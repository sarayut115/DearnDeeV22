import * as React from "react";
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { firebase } from '../config';
import { useNavigation } from "@react-navigation/native";



const auth = firebase.auth();

const SetttingScreen = () => {

    const navigation = useNavigation();
    const auth = firebase.auth();

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                console.log('LogOut สำเร็จ');
                navigation.replace('LoginPage');
            })
            .catch(error => alert(error.message));
    };

    return (
        <View style={styles.Setttingscreen}>
            <View style={styles.header1}>
                <TouchableOpacity style={styles.backNavs} onPress={() => navigation.navigate("MainContainer")}>
                    <View style={styles.backNavsChild} />
                    <Image
                        style={styles.backNavsItem}
                        contentFit="cover"
                        source={require("../assets/group-9845.png")}
                    />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={[styles.text, styles.textFlexBox]}>
                        การตั้งค่า
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header1: {
        top: 39,
        left: 30,
        width: 315,
        height: 32,
        position: "absolute",
        // backgroundColor:'red'
    },
    backNavsChild: {
        borderRadius: Border.br_5xs,
        backgroundColor: Color.borderColor,
        width: 32,
        left: 0,
        top: 0,
        height: 32,
        position: "absolute",
    },
    backNavsItem: {
        top: 8,
        left: 8,
        width: 16,
        height: 16,
        position: "absolute",
    },
    backNavs: {
        width: 32,
        left: 0,
        top: 0,
        height: 32,
        position: "absolute",
    },
    title: {
        top: 6,
        left: 72,
        width: 185,
        height: 24,
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: FontSize.textLargeTextRegular_size,
        lineHeight: 24,
        fontWeight: "700",
        fontSize: 17,
        fontFamily: FontFamily.titleH2Bold,
        color: Color.blackColor,
        textAlign: "left",
        left: 0,
        top: 0,
    },
    Setttingscreen: {
        borderRadius: Border.br_21xl,
        flex: 1,
        height: 1000,
        overflow: "hidden",
        width: "100%",
        backgroundColor: 'white',
    },
});

export default SetttingScreen;
