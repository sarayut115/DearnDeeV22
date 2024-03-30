import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { firebase } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { BarChart } from 'react-native-chart-kit';
import DateTimePicker from '@react-native-community/datetimepicker';

const History = ({ route }) => {
    const { deviceId, deviceName } = route.params;
    const navigation = useNavigation();
    const auth = firebase.auth();
    const db = firebase.firestore();
    const realtimeDB = firebase.database();
    const [usageHistory, setUsageHistory] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredHistory, setFilteredHistory] = useState([]);
    const filterHistory = () => {
        const filteredData = usageHistory.filter(item => {
            const itemDate = new Date(item.timestamp.toMillis());
            return (
                itemDate.getDate() === selectedDate.getDate() &&
                itemDate.getMonth() === selectedDate.getMonth() &&
                itemDate.getFullYear() === selectedDate.getFullYear()
            );
        });
        setFilteredHistory(filteredData);
    };
    useEffect(() => {
        filterHistory();
    }, [selectedDate]);

    useEffect(() => {
        const fetchUsageHistory = async () => {
            try {
                const userDocRef = db.collection('users').doc(auth.currentUser.uid);
                const userDoc = await userDocRef.get();
                const userData = userDoc.data();
                if (userData && userData.devicesAll) {
                    const device = userData.devicesAll.find(d => d.id === deviceId);
                    if (device && device.History) {
                        // Calculate duration for each usage record
                        const updatedHistory = device.History.map((item, index, arr) => {
                            if (item.isOn && arr[index + 1] && !arr[index + 1].isOn) {
                                const duration = arr[index + 1].timestamp.toMillis() - item.timestamp.toMillis();
                                return { ...item, duration };
                            }
                            return item;
                        }).filter(item => item.duration); // Filter out records without duration
                        setUsageHistory(updatedHistory);
                        setFilteredHistory(updatedHistory); // Initialize filtered history with all history data
                    }
                }
            } catch (error) {
                console.error('Error fetching usage history:', error);
            }
        };

        fetchUsageHistory();
    }, [auth.currentUser.uid, db, deviceId]);


    const formatDateThai = (date) => {
        const thaiMonths = [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
            "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม",
            "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear() + 543; // แปลงเป็น พ.ศ.
        return `${day} ${thaiMonths[monthIndex]} ${year}`;
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>ติดตามการใช้งาน </Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.sectionTitle}>{deviceId}. {deviceName}</Text>
                <Text style={styles.sectionTitle}>ประวัติการใช้งาน:</Text>
                <View style={styles.usageContainer}>
                    <BarChart
                        data={{
                            labels: filteredHistory.map((item, index) => `${index + 1}`),
                            datasets: [{
                                data: filteredHistory.map(item => item.duration / 1000), // แปลงจากมิลลิวินาทีเป็นนาที
                            }]
                        }}
                        width={350}
                        height={220}
                        yAxisLabel=""
                        chartConfig={{
                            backgroundColor: "#fff",
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726",
                            }
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </View>
                <View>
                    <DateTimePicker
                        value={selectedDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={(event, selectedDate) => setSelectedDate(selectedDate)}
                    />
                    <TouchableOpacity onPress={filterHistory}>
                        <Text>Apply Filter</Text>
                    </TouchableOpacity>
                </View>
                {filteredHistory.map((item, index) => (
                    <View key={index} style={styles.usageItem}>
                        {/* <Text>{index + 1}. เปิดเครื่องเมื่อ: {item.timestamp.toDate().toLocaleString()}</Text>
                        <Text>   ปิดเครื่องเมื่อ: {new Date(item.timestamp.toMillis() + item.duration).toLocaleString()}</Text> */}
                        <Text>{index + 1}. เปิดเครื่องเมื่อ: {formatDateThai(item.timestamp.toDate())}</Text>
                        <Text>   ปิดเครื่องเมื่อ: {formatDateThai(new Date(item.timestamp.toMillis() + item.duration))}</Text>

                        <Text>   ระยะเวลาการใช้งาน: {formatDuration(item.duration)}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const formatDuration = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    return `${hours} ชั่วโมง ${remainingMinutes} นาที ${remainingSeconds} วินาที`;
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 75,
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
    },
    backButton: {
        paddingTop: 30,
    },
    usageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    usageItem: {
        marginBottom: 10,
    },
});

export default History;
