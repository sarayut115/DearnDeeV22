import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { firebase } from '../../config';

export default function DetailsScreen({ navigation }) {
    const realtimeDB = firebase.database();
    const [value, setValue] = useState(1);

    useEffect(() => {
        // Subscribe to changes in the Firebase database
        const dbRef = realtimeDB.ref('test/intensity');
        const onDataChange = (snapshot) => {
            const firebaseValue = snapshot.val();
            if (firebaseValue !== null) {
                setValue(firebaseValue);
            }
        };

        dbRef.on('value', onDataChange);

        // Unsubscribe when the component unmounts
        return () => {
            dbRef.off('value', onDataChange);
        };
    }, [realtimeDB]);

    const handlePress = (newValue) => {
        // Update the local state
        setValue(newValue);

        // Update the Firebase database
        realtimeDB.ref('test/intensity').set(newValue);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: item === value ? '#3498db' : '#2c3e50' },
            ]}
            onPress={() => handlePress(item)}>
            <Text style={{ color: 'white', fontSize: 18 }}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>ปรับความแรงของเครื่อง</Text>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
                horizontal
                contentContainerStyle={{ marginTop: 20 }}
            />
            <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 500 }}>ความแรงของคุณ: {value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 5,
    },
});
