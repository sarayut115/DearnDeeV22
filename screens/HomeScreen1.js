
import * as React from "react";
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { firebase } from '../config';

const HomeSceen = () => {

    const realtimeDB = firebase.database();
    const [value, setValue] = useState(0);

    const [isOn, setIsOn] = useState(false);

    const [isVectorActive, setIsVectorActive] = useState(false);
    const [isRimentalHealthFillActive, setIsRimentalHealthFillActive] = useState(false);
    const [isMaterialSymbolshdrAutoActive, setIsMaterialSymbolshdrAutoActive] = useState(true);


    const handleVectorPress = () => {
        setIsVectorActive(true);
        setIsRimentalHealthFillActive(false);
        setIsMaterialSymbolshdrAutoActive(false);
    };

    const handleRimentalHealthFillPress = () => {
        setIsVectorActive(false);
        setIsRimentalHealthFillActive(true);
        setIsMaterialSymbolshdrAutoActive(false);
    };

    const handleMaterialSymbolshdrAutoPress = () => {
        setIsVectorActive(false);
        setIsRimentalHealthFillActive(false);
        setIsMaterialSymbolshdrAutoActive(true);
    };

    useEffect(() => {
        // Subscribe to changes in the Firebase database
        const dbRef = realtimeDB.ref('test/intensity');
        const onDataChange = (snapshot) => {
            const intensityValue = snapshot.val();
            if (intensityValue !== null) {
                setValue(intensityValue);
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
        // console.log("ส่งละ")
    };

    const handlePressIsOnOff = () => {
        setIsOn(!isOn);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.button,
                styles.flatListItem,
                { backgroundColor: item === value ? '#3498db' : '#2c3e50' },
            ]}
            onPress={() => handlePress(item)}>
            <Text style={{ color: 'white', fontSize: 18 }}>{item}</Text>
        </TouchableOpacity>
    );




    return (

        <View style={styles.homesceen1}>
            <View style={styles.header1}>
                <View style={styles.backNavs}>
                    <View style={styles.backNavsChild} />
                    <Image
                        style={styles.backNavsItem}
                        contentFit="cover"
                        source={require("../assets/group-9845.png")}
                    />
                </View>
                <Image
                    style={[styles.detailNavsIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/detailnavs.png")}
                />
                <View style={styles.title}>
                    <Text style={[styles.text, styles.textFlexBox]}>
                        เครื่องกระตุ้นกระแสไฟฟ้า
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={[styles.iconlyboldplayParent, styles.parentLayout]}
                onPress={handlePressIsOnOff}
            >
                <Image
                    style={styles.iconlyboldplay}
                    contentFit="cover"
                    source={isOn ? require("../assets/iconlyboldplay1.png") : require("../assets/iconlyboldplay.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>{isOn ? "เปิดใช้งาน" : "ปิดใช้งาน"}</Text>
            </TouchableOpacity>
            <View style={[styles.materialSymbolshdrAutoParent, styles.parentLayout]}>

                {/* <TouchableOpacity>
                    <Image
                        style={styles.vectorIcon}
                        contentFit="cover"
                        source={require("../assets/vector.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.rimentalHealthFillIcon}
                        contentFit="cover"
                        source={require("../assets/rimentalhealthfill.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.materialSymbolshdrAutoIcon}
                        contentFit="cover"
                        source={require("../assets/materialsymbolshdrauto.png")}
                    />
                </TouchableOpacity>

                <Text style={[styles.text2, styles.textTypo]}>อัตโนมัติ</Text>
                <Text style={[styles.text3, styles.textTypo]}>ทั่วไป</Text>
                <Text style={styles.text4}>ปรับขั้นสูง</Text> */}

                <TouchableOpacity onPress={handleVectorPress}>
                    <Image
                        style={styles.vectorIcon}
                        contentFit="cover"
                        source={isVectorActive ? require("../assets/vector1.png") : require("../assets/vector.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleRimentalHealthFillPress}>
                    <Image
                        style={styles.rimentalHealthFillIcon}
                        contentFit="cover"
                        source={isRimentalHealthFillActive ? require("../assets/rimentalhealthfill1.png") : require("../assets/rimentalhealthfill.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleMaterialSymbolshdrAutoPress}>
                    <Image
                        style={styles.materialSymbolshdrAutoIcon}
                        contentFit="cover"
                        source={isMaterialSymbolshdrAutoActive ? require("../assets/materialsymbolshdrauto1.png") : require("../assets/materialsymbolshdrauto.png")}
                    />
                </TouchableOpacity>


                {/* <Text style={[styles.text2, styles.textTypo, isMaterialSymbolshdrAutoActive && { color: '#A0A0A0' }]}>อัตโนมัติ</Text>
                <Text style={[styles.text3, styles.textTypo, isVectorActive && { color: '#A0A0A0' }]}>ทั่วไป</Text>
                <Text style={[styles.text4, isRimentalHealthFillActive && { color: '#A0A0A0' }]}>ปรับขั้นสูง</Text> */}
                <Text style={[styles.text2, styles.textTypo, { color: isMaterialSymbolshdrAutoActive ? 'black' : '#A0A0A0' }]}>อัตโนมัติ</Text>
                <Text style={[styles.text3, styles.textTypo, { color: isVectorActive ? 'black' : '#A0A0A0' }]}>ส่วนตัว</Text>
                <Text style={[styles.text4, { color: isRimentalHealthFillActive ? 'black' : '#A0A0A0' }]}>ปรับขั้นสูง</Text>


            </View>

            <View style={[styles.homesceen1Child, styles.parentLayout, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={[styles.text, { alignSelf: 'flex-start', fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 4 }]}>ปรับความแรง</Text>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.toString()}
                    horizontal
                    contentContainerStyle={[{ marginTop: 20 }, styles.flatListContainer]}
                />
            </View>

            <View style={[styles.homesceen1Item, styles.homesceen1Layout]} />
            <View style={[styles.homesceen1Inner, styles.homesceen1Layout]} />
            <View style={[styles.homesceen2Inner, styles.homesceen1Layout]} />

            <LinearGradient
                style={[styles.bannerPie1ParentAA, styles.scheduleBgChildBgAA]}
                locations={[0, 1]}
                colors={["#92a3fd", "#9dceff"]}
            >
                <View style={styles.bannerPie1AA}>
                    <View style={styles.bannerPieTextAA}>
                        <Text style={[styles.textAA, styles.textPositionAA]}>80 %</Text>
                    </View>
                </View>
                <View style={styles.action}>
                    <View style={[styles.scheduleBgAA, styles.scheduleChildPositionAA]}>
                        <LinearGradient
                            style={[styles.scheduleBgChildAA, styles.scheduleChildPositionAA]}
                            locations={[0, 1]}
                            colors={["#92a3fd", "#9dceff"]}
                        />
                    </View>
                    <View style={styles.workoutScheduleTextAA}>
                        <Text style={[styles.todayTargetAA, styles.textPositionAA]}>
                            เครื่องสามารถใช้ได้อีกประมาณ
                        </Text>
                    </View>
                    <View style={styles.buttonCheckAA}>
                        <View style={[styles.scheduleBgAA, styles.scheduleChildPositionAA]}>
                            <LinearGradient
                                style={[styles.buttonBgChildAA, styles.buttonLayoutAA]}
                                locations={[0, 1]}
                                colors={["#92a3fd", "#9dceff"]}
                            />
                        </View>
                        <View style={styles.buttonTextAA}>
                            <Text style={[styles.checkAA, styles.checkClrAA]}>1 ชม.</Text>
                        </View>
                    </View>
                </View>
                <LinearGradient
                    style={[styles.button1AA, styles.buttonLayoutAA]}
                    locations={[0, 1]}
                    colors={["#c58bf2", "#eea4ce"]}
                >
                    <Text style={[styles.buttonAA, styles.checkClrAA]}>แบตเตอรี่</Text>
                </LinearGradient>
            </LinearGradient>

        </View>

    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        flexGrow: 0,
        flexShrink: 1,
        width: '100%',
        alignItems: 'center',
    },
    flatListItem: {
        marginHorizontal: 7, // ปรับระยะห่างรอบขอบ
        paddingVertical: 15, // ปรับระยะห่างด้านบนและด้านล่าง
        paddingHorizontal: 22, // ปรับระยะห่างด้านซ้ายและด้านขวา
        borderRadius: 15, // ปรับขนาดของมุม
        marginTop: -12,
    },

    textFlexBox: {
        textAlign: "left",
        position: "absolute",
    },
    parentLayout: {
        // width: 334,
        width: 346,
        borderRadius: 10,
        left: 20,
        backgroundColor: Color.borderColor,
        position: "absolute",
        overflow: "hidden",
        // backgroundColor: 'red'
    },
    text1Typo: {
        fontFamily: FontFamily.textLargeTextSemiBold,
        fontWeight: "600",
        lineHeight: 21,
        fontSize: FontSize.textMediumTextRegular_size,
    },
    textTypo: {
        color: Color.colorDarkgray_100,
        top: "72.82%",
        height: "19.42%",
        fontFamily: FontFamily.textLargeTextSemiBold,
        fontWeight: "600",
        lineHeight: 21,
        fontSize: FontSize.textMediumTextRegular_size,
        textAlign: "left",
        position: "absolute",
    },
    homesceen1Layout: {
        height: 87,
        width: 334,
        borderRadius: Border.br_3xs,
        left: 20,
        backgroundColor: Color.borderColor,
        position: "absolute",
        overflow: "hidden",
        // backgroundColor: 'yellow'
    },
    text5Clr: {
        color: Color.whiteColor,
        textAlign: "left",
    },
    frameChildLayout: {
        height: 219,
        width: 334,
    },
    childBg: {
        backgroundColor: Color.waterIntakeLinear,
        position: "absolute",
    },
    actionPosition: {
        left: 17,
        position: "absolute",
    },
    scheduleChildPosition: {
        left: "0%",
        top: "0%",
    },
    buttonLayout: {
        borderRadius: Border.br_31xl,
        backgroundColor: Color.waterIntakeLinear,
        position: "absolute",
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
    detailNavsIcon: {
        width: "10.16%",
        left: "89.84%",
        bottom: "0%",
        right: "0%",
        height: "100%",
        top: "0%",
        maxWidth: "100%",
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
    title: {
        top: 6,
        left: 72,
        width: 185,
        height: 24,
        position: "absolute",
        // backgroundColor: 'red'
    },
    header1: {
        top: 39,
        left: 30,
        width: 315,
        height: 32,
        position: "absolute",
    },
    iconlyboldplay: {
        height: "81.16%",
        top: "10.14%",
        right: "55.69%",
        bottom: "8.7%",
        left: "27.54%",
        width: "16.77%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    text1: {
        height: "28.99%",
        top: "36.23%",
        left: "47.31%",
        width: "19.46%",
        textAlign: "left",
        position: "absolute",
    },
    iconlyboldplayParent: {
        top: 322,
        height: 69,
    },
    vectorIcon: {
        height: 52,
        right: "74.25%",
        bottom: "27.18%",
        left: "8.98%",
        top: "20.45%",
        width: 52,
        // maxHeight: "100%",
        // maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
        // backgroundColor:'red'
        marginTop: 17,
    },
    rimentalHealthFillIcon: {
        height: 60,
        right: "74.25%",
        bottom: "12.18%",
        left: "73%",
        top: "20.45%",
        width: 60,
        // maxHeight: "100%",
        // maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
        marginTop: 15,
    },
    materialSymbolshdrAutoIcon: {
        // height: "52%",
        // width: "17.77%",
        // top: "19.3%",
        // right: "41.62%",
        // bottom: "32.04%",
        // left: "41.61%",
        height: 60,
        right: "74.25%",
        bottom: "27.18%",
        left: "42%",
        top: "20.45%",
        width: 60,
        // maxHeight: "100%",
        // maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
        // backgroundColor:'red'
        marginTop: 15,
    },
    text2: {
        width: "29.34%",
        left: "43.13%",
    },
    text3: {
        left: "12.5%",
        width: "19.46%",
    },
    text4: {
        top: "72.82%",
        height: "19.42%",
        left: "73.65%",
        fontFamily: FontFamily.textLargeTextSemiBold,
        fontWeight: "600",
        lineHeight: 21,
        fontSize: FontSize.textMediumTextRegular_size,
        width: "19.46%",
        textAlign: "left",
        position: "absolute",
    },
    materialSymbolshdrAutoParent: {
        top: 407,
        height: 103,
    },
    homesceen1Child: {
        top: 526,
        height: 100,
    },
    homesceen1Item: {
        top: 643,
    },
    homesceen1Inner: {
        top: 746,
    },
    homesceen2Inner: {
        top: 846,
    },
    text5: {
        height: "2.09%",
        width: "37.6%",
        top: "37.44%",
        left: "13.6%",
        fontFamily: FontFamily.textMediumTextRegular,
        color: Color.whiteColor,
        fontSize: FontSize.textSmallTextMedium_size,
        position: "absolute",
        lineHeight: 18,
    },
    frameChild: {
        borderRadius: Border.br_3xl,
        height: 219,
        width: 334,
        left: 0,
        top: 0,
        backgroundColor: Color.waterIntakeLinear,
    },
    frameItem: {
        top: 7,
        width: 307,
        height: 145,
        overflow: "hidden",
    },
    bannerPieEllipseIcon: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
        bottom: "0%",
        right: "0%",
        height: "100%",
        left: "0%",
        width: "100%",
    },
    text6: {
        lineHeight: 18,
        fontSize: FontSize.textSmallTextMedium_size,
        left: "0%",
        fontFamily: FontFamily.textLargeTextSemiBold,
        fontWeight: "600",
        textAlign: "left",
        color: Color.blackColor,
        height: "100%",
        position: "absolute",
        width: "100%",
    },
    bannerPieText: {
        height: "20.48%",
        width: "33.3%",
        top: "39.76%",
        right: "29.16%",
        bottom: "39.76%",
        left: "37.53%",
        position: "absolute",
    },
    bannerPie1: {
        height: "45.25%",
        width: "32.54%",
        top: "21%",
        right: "32.72%",
        bottom: "33.74%",
        left: "34.73%",
        position: "absolute",
    },
    scheduleBgChild: {
        borderRadius: Border.br_base,
        opacity: 0.2,
        backgroundColor: Color.waterIntakeLinear,
        position: "absolute",
        bottom: "0%",
        right: "0%",
        height: "100%",
        left: "0%",
        width: "100%",
    },
    scheduleBg: {
        bottom: "0%",
        right: "0%",
        height: "100%",
        left: "0%",
        width: "100%",
        position: "absolute",
    },
    todayTarget: {
        fontWeight: "500",
        fontFamily: FontFamily.textSmallTextMedium,
        fontSize: FontSize.textMediumTextRegular_size,
        left: "0%",
        textAlign: "left",
        color: Color.blackColor,
        position: "absolute",
    },
    workoutScheduleText: {
        height: "36.84%",
        width: "55.85%",
        top: "31.58%",
        right: "37.79%",
        bottom: "31.58%",
        left: "6.35%",
        position: "absolute",
    },
    buttonBgChild: {
        left: "0%",
        top: "0%",
        bottom: "0%",
        right: "0%",
        height: "100%",
        width: "100%",
    },
    check: {
        color: Color.whiteColor,
        textAlign: "left",
        fontFamily: FontFamily.textMediumTextRegular,
        fontSize: FontSize.textSmallTextMedium_size,
        position: "absolute",
    },
    buttonText: {
        height: "64.29%",
        width: "37.21%",
        top: "17.86%",
        right: "40.78%",
        bottom: "17.86%",
        left: "22.02%",
        position: "absolute",
    },
    buttonCheck: {
        height: "49.12%",
        width: "21.57%",
        top: "26.32%",
        right: "6.35%",
        bottom: "24.56%",
        left: "72.07%",
        position: "absolute",

    },
    action: {
        top: 152,
        width: 299,
        height: 57,
        borderRadius: 22,
        backgroundColor: Color.whiteColor,
        left: 17,
    },
    rectangleParent: {
        top: 85,
        left: 20,
        height: 219,
        position: "absolute",
        overflow: "hidden",
        borderRadius: 15,
    },
    button: {
        fontFamily: FontFamily.textLargeTextSemiBold,
        fontWeight: "600",
        lineHeight: 21,
        fontSize: FontSize.textMediumTextRegular_size,
    },
    button1: {
        marginTop: -314,
        width: "34.13%",
        top: "50%",
        right: "31.73%",
        left: "34.13%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: Padding.p_11xl,
        paddingVertical: Padding.p_3xs,
        height: 32,
    },
    homesceen1: {
        borderRadius: Border.br_21xl,
        flex: 1,
        // height: 812,
        height: 1000,
        overflow: "hidden",
        width: "100%",
        backgroundColor: Color.whiteColor,
    },


    //สี่เหลี่ยมบนหน้าจออันแรก
    scheduleBgChildBgAA: {
        backgroundColor: Color.waterIntakeLinear,
        position: "absolute",
    },
    scheduleChildPositionAA: {
        left: "0%",
        top: "0%",
        // backgroundColor:'yellow'
    },
    textPositionAA: {
        textAlign: "left",
        color: Color.blackColor,
        left: "0%",
        top: "0%",
        position: "absolute",
    },
    buttonLayoutAA: {
        borderRadius: 15,
        backgroundColor: Color.waterIntakeLinear,
        position: "absolute",
        justifyContent: "center"
    },
    checkClrAA: {
        color: Color.whiteColor,
        // textAlign: "center", // ทำให้ข้อความอยู่ตรงกลางแนวนอน
    },

    bannerPieEllipseIconAA: {
        maxWidth: "100%",
        maxHeight: "100%",
        bottom: "0%",
        right: "0%",
        left: "0%",
        top: "0%",
        height: "300%",
        width: "300%",
        position: "absolute",
        overflow: "hidden",
    },
    textAA: {
        lineHeight: 18,
        fontFamily: FontFamily.textLargeTextSemiBold,
        fontWeight: "600",
        fontSize: 16,
        height: "100%",
        textAlign: "left",
        color: Color.blackColor,
        width: "100%",
        // paddingRight:10,
        // backgroundColor:'red'
    },
    bannerPieTextAA: {
        height: "20.48%",
        width: "40%",
        top: "39.76%",
        right: "29.16%",
        bottom: "39.76%",
        left: "32%", // ปรับค่า left ลงเพื่อขยับไปทางซ้ายจอ
        position: "absolute",
    },

    bannerPie1AA: {
        height: 100,
        width: 100,
        top: "21%",
        right: "32.72%",
        bottom: "33.74%",
        left: "34.73%",
        position: "absolute",
        borderRadius: 50, // ค่าความสูงและความกว้างหาร 2
        backgroundColor: 'white',
    },

    scheduleBgChildAA: {
        borderRadius: Border.br_base,
        opacity: 0.2,
        bottom: "0%",
        right: "0%",
        left: "0%",
        top: "0%",
        height: "100%",
        width: "100%",
        backgroundColor: Color.waterIntakeLinear,
        position: "absolute",
    },
    scheduleBgAA: {
        bottom: "0%",
        right: "0%",
        left: "0%",
        top: "0%",
        height: "100%",
        width: "100%",
        position: "absolute",

    },
    todayTargetAA: {
        fontWeight: "500",
        fontFamily: FontFamily.textSmallTextMedium,
        fontSize: FontSize.textMediumTextRegular_size,
    },
    workoutScheduleTextAA: {
        height: "36.84%",
        width: "60%",
        top: "31.58%",
        right: "37.79%",
        bottom: "31.58%",
        left: "6.35%",
        position: "absolute",
    },
    buttonBgChildAA: {
        left: "0%",
        top: "0%",
        bottom: "0%",
        right: "0%",
        height: "100%",
        width: "100%",
    },
    checkAA: {
        fontFamily: FontFamily.textMediumTextRegular,
        fontSize: FontSize.textSmallTextMedium_size,
        left: "0%",
        top: "0%",
        color: Color.whiteColor,
        position: "absolute",
    },
    buttonTextAA: {
        height: "64.29%",
        width: "60%",
        top: "17.86%",
        right: "40.78%",
        bottom: "17.86%",
        left: "22.02%",
        position: "absolute",
        // backgroundColor:'red'
    },
    buttonCheckAA: {
        height: "49.12%",
        width: "21.57%",
        top: "26.32%",
        right: "6.35%",
        bottom: "24.56%",
        left: "72.07%",
        position: "absolute",

    },
    actionAA: {
        top: 152,
        left: 17,
        borderRadius: Border.br_3xl,
        width: 299,
        height: 57,
        position: "absolute",
        backgroundColor: Color.whiteColor,
    },
    buttonAA: {
        lineHeight: 21,
        fontSize: FontSize.textMediumTextRegular_size,
        fontFamily: FontFamily.textLargeTextSemiBold,
        fontWeight: "600",
    },
    button1AA: {
        marginTop: -102.5,
        width: "38.32%",
        top: "50%",
        right: "29.34%",
        left: "32.34%",
        height: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: Padding.p_11xl,
        paddingVertical: Padding.p_3xs,
    },
    bannerPie1ParentAA: {
        top: 85,
        left: 20,
        borderRadius: 12,
        width: 346,
        height: 219,
        overflow: "hidden",
    },
    homesceen1AA: {
        borderRadius: Border.br_21xl,
        flex: 1,
        height: 812,
        overflow: "hidden",
        width: "100%",
        backgroundColor: Color.whiteColor,
    },
});

export default HomeSceen;

