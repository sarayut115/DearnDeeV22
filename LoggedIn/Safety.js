import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../config';

const Safety = () => {
    const navigation = useNavigation();
    const db = firebase.firestore();
    const auth = firebase.auth();
    const [email, setEmail] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [modalVisible, setModalVisible] = useState(false); // State สำหรับควบคุมการแสดง Modal

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const isEmailVerified = user.emailVerified;
                setIsEmailVerified(isEmailVerified);
                setEmail(user.email);
            }
        });
        return unsubscribe;
    }, []);

    const handleEmailVerification = async () => {
        try {
            // ให้แสดง Alert เพื่อยืนยันการส่งอีเมล
            Alert.alert(
                "ยืนยันการส่งอีเมลยืนยัน",
                "คุณต้องการส่งอีเมลยืนยันไปยังอีเมลของคุณหรือไม่?",
                [
                    {
                        text: "ยกเลิก",
                        style: "cancel"
                    },
                    {
                        text: "ยืนยัน",
                        onPress: async () => {
                            // ทำการส่งอีเมลยืนยัน
                            await auth.currentUser.sendEmailVerification();
                            alert("อีเมลยืนยันถูกส่งไปยังอีเมลของคุณแล้ว");
                            // รีเฟรชข้อมูลผู้ใช้เพื่ออัปเดตสถานะการยืนยันอีเมล
                            await auth.currentUser.reload();
                            setIsEmailVerified(false); // อัปเดตสถานะการยืนยันอีเมล
                        },
                    },
                ]
            );
        } catch (error) {
            alert("เกิดข้อผิดพลาดในการส่งอีเมลยืนยัน");
            console.error(error);
        }
    };
    

    const handlePasswordChange = () => {
        // Handle password change functionality here
        navigation.navigate('ForgotPasswordAct', { email });
    };

    const handleFaceIDLogin = () => {
        // Handle Face ID login functionality here
    };

    const handleAccountDeletion = async () => {
        try {
            setModalVisible(true); // เปิด Modal เมื่อคลิกที่ปุ่มลบบัญชี
        } catch (error) {
            alert("เกิดข้อผิดพลาดในการลบบัญชี");
            console.error(error);
        }
    };

    const confirmAccountDeletion = async () => {
        try {
            // ลองเข้าสู่ระบบอีกครั้งเพื่อยืนยันรหัสผ่าน
            await auth.signInWithEmailAndPassword(email, passwordConfirmation);
    
            // ลบบัญชีผู้ใช้
            await auth.currentUser.delete();
    
            // ลบเอกสารที่มี email ตรงกับข้อมูลที่ถูกลบออกจาก Firestore
            await db.collection("users").where("email", "==", email).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                });
    
            // ปิด Modal
            setModalVisible(false);
    
            // แสดงข้อความแจ้งลบบัญชีสำเร็จ
            alert("บัญชีของคุณได้ถูกลบเรียบร้อยแล้ว");
    
            // นำผู้ใช้ไปยังหน้า Login (หรือหน้าที่ต้องการ)
            navigation.navigate('LoginPage'); // แก้ไข 'Login' เป็นชื่อของหน้าที่ต้องการให้ไป
        } catch (error) {
            // แสดงข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาดในการลบบัญชี
            alert("เกิดข้อผิดพลาดในการลบบัญชี");
            console.error(error);
        }
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>บัญชีและความปลอดภัย</Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* <Text style={styles.sectionTitle}>ข้อมูลส่วนบุคคลที่เราเก็บ</Text> */}

                <TouchableOpacity style={styles.button} onPress={handleEmailVerification}>
                    <Text style={styles.buttonText}>ยืนยันอีเมล</Text>
                    <View style={styles.textContainer}>
                        <Text style={[styles.buttonSubText, styles.text]}> {email} </Text>
                        <Text style={[styles.verificationText, !isEmailVerified && styles.unverifiedText, styles.text]}>
                            {isEmailVerified ? "ได้รับการยืนยันแล้ว" : "ยังไม่ยืนยันอีเมล"}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
                    <Text style={styles.buttonText}>แก้ไขรหัสผ่าน</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleFaceIDLogin}>
                    <Text style={styles.buttonText}>เข้าสู่ระบบด้วย Face ID</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleAccountDeletion}>
                    <Text style={[styles.buttonText, styles.deleteButtonText]}>ลบบัญชีการใช้งาน</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Modal สำหรับการยืนยันการลบบัญชี */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>กรุณาป้อนรหัสผ่านเพื่อยืนยันการลบบัญชี</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="รหัสผ่าน"
                            secureTextEntry
                            value={passwordConfirmation}
                            onChangeText={setPasswordConfirmation}
                        />
                        <View style={styles.modalButtonContainer}>
                            <Button title="ยกเลิก" onPress={() => setModalVisible(false)} />
                            <Button title="ยืนยัน" onPress={confirmAccountDeletion} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flexDirection: 'row',
    },
    text: {
        marginRight: 30, // กำหนดระยะห่างระหว่างข้อความ
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
        marginLeft: 55,
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 1,
        marginBottom: 10,
    },
    backButton: {
        paddingTop: 30,
    },
    button: {
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonSubText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    saveButton: {
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 15,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    deleteButton: {
        backgroundColor: 'red',
    },
    deleteButtonText: {
        color: 'white',
    },
    verificationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 10,
    },
    unverifiedText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9100', // เปลี่ยนเป็นสีแดง
        marginTop: 10,
    },
    // สไตล์สำหรับ Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
});

export default Safety;
