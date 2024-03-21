import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { firebase } from '../../config';

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, Border, FontFamily } from "../../GlobalStyles";

export default function AccountScreen({ navigation }) {
    return (
        <View style={styles.profile}>
            <View style={[styles.profileSection, styles.sectionPosition]}>
                <View style={styles.personalData}>
                    <View style={[styles.heightCard, styles.cardLayout]}>
                        <View style={[styles.heightCard, styles.cardLayout]}>
                            <View style={[styles.bgChild, styles.childShadowBox]} />
                        </View>
                        <View style={[styles.heightText, styles.textPosition2]}>
                            <Text style={styles.cm}>180cm</Text>
                            <Text style={[styles.text, styles.textTypo]}>ส่วนสูง</Text>
                        </View>
                    </View>
                    <View style={[styles.weightCard, styles.cardLayout]}>
                        <View style={[styles.heightCard, styles.cardLayout]}>
                            <View style={[styles.bgItem, styles.childShadowBox]} />
                        </View>
                        <View style={[styles.weightText, styles.textPosition2]}>
                            <Text style={styles.cm}>65kg</Text>
                            <Text style={[styles.text1, styles.textTypo]}>น้ำหนัก</Text>
                        </View>
                    </View>
                    <View style={[styles.ageCard, styles.cardLayout]}>
                        <View style={[styles.heightCard, styles.cardLayout]}>
                            <View style={[styles.bgInner, styles.childShadowBox]} />
                        </View>
                        <View style={[styles.ageText, styles.textPosition2]}>
                            <Text style={styles.cm}>22 ปี</Text>
                            <Text style={[styles.text3, styles.textTypo]}>อายุ</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.name, styles.namePosition]}>
                    <Text style={[styles.maximusWalker, styles.text6Position]}>
                        Maximus Walker
                    </Text>
                    <Text style={[styles.loseAFat, styles.textTypo]}>
                        Lose a Fat Program
                    </Text>
                </View>
                <Image
                    style={styles.latestPicIcon}
                    contentFit="cover"
                    source={require("../../assets/latestpic.png")}
                />
                <View style={[styles.button, styles.bg3Layout]}>
                    <View style={[styles.bg3, styles.bg3Layout]}>
                        <LinearGradient
                            style={[
                                styles.rectangleLineargradient,
                                styles.toggleChildPosition,
                            ]}
                            locations={[0, 1]}
                            colors={["#92a3fd", "#9dceff"]}
                        />
                    </View>
                    <View style={[styles.text4, styles.text4Layout]}>
                        <Text style={styles.text5}>แก้ไข</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.dataCardSection, styles.sectionPosition]}>
                <View style={styles.rectangleViewPosition}>
                    <View style={styles.rectangleViewPosition}>
                        <View
                            style={[styles.rectangleView, styles.rectangleViewPosition]}
                        />
                    </View>
                    <View style={[styles.title, styles.titlePosition]}>
                        <Text style={[styles.text6, styles.text6Position]}>บัญชี</Text>
                    </View>
                    <View style={[styles.personalData1, styles.iconProfileLayout]}>
                        <Image
                            style={[styles.iconProfile, styles.iconProfileLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconprofile.png")}
                        />
                        <View style={[styles.text7, styles.textPosition]}>
                            <Text style={[styles.text8, styles.textTypo]}>
                                ข้อมูลส่วนบุคคล
                            </Text>
                        </View>
                        <Image
                            style={[styles.iconArrow, styles.iconLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconarrow.png")}
                        />
                    </View>
                    <View style={[styles.achievement, styles.iconProfileLayout]}>
                        <Image
                            style={[styles.iconProfile, styles.iconProfileLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconachievement.png")}
                        />
                        <View style={[styles.text9, styles.textPosition]}>
                            <Text style={[styles.text8, styles.textTypo]}>ความสำเร็จ</Text>
                        </View>
                        <Image
                            style={[styles.iconArrow, styles.iconLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconarrow.png")}
                        />
                    </View>
                    <View style={[styles.activityHistory, styles.iconProfileLayout]}>
                        <View style={[styles.text11, styles.textPosition]}>
                            <Text style={[styles.text8, styles.textTypo]}>
                                ประวัตการใช้งานของเครื่อง
                            </Text>
                        </View>
                        <Image
                            style={[styles.iconArrow, styles.iconLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconarrow.png")}
                        />
                        <Image
                            style={[styles.iconProfile, styles.iconProfileLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconactivity.png")}
                        />
                    </View>
                </View>
                <View style={[styles.notificationSection, styles.bg5Layout]}>
                    <View style={[styles.bg5, styles.bg5Layout]}>
                        <View style={[styles.bgChild1, styles.bg5Layout]} />
                    </View>
                    <View style={[styles.title1, styles.titlePosition]}>
                        <Text style={[styles.text6, styles.text6Position]}>
                            การแจ้งเตือน
                        </Text>
                    </View>
                    <View style={[styles.personalData1, styles.iconProfileLayout]}>
                        <View style={[styles.text14, styles.textPosition]}>
                            <Text style={[styles.text8, styles.textTypo]}>
                                การแจ้งเตือนแบบ Pop-up
                            </Text>
                        </View>
                        <View style={[styles.toggle, styles.textPosition]}>
                            <LinearGradient
                                style={[styles.toggleChild, styles.text4Layout]}
                                locations={[0, 1]}
                                colors={["#c58bf2", "#eea4ce"]}
                            />
                            <Image
                                style={[styles.toggleItem, styles.namePosition]}
                                contentFit="cover"
                                source={require("../../assets/ellipse-170.png")}
                            />
                        </View>
                        <Image
                            style={[styles.iconProfile, styles.iconProfileLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconnotif.png")}
                        />
                    </View>
                </View>
                <View style={[styles.otherSection, styles.bg6Layout]}>
                    <View style={[styles.bg6, styles.bg6Layout]}>
                        <View style={[styles.bgChild2, styles.bg6Layout]} />
                    </View>
                    <View style={[styles.title2, styles.titlePosition]}>
                        <Text style={[styles.text6, styles.text6Position]}>อื่นๆ</Text>
                    </View>
                    <View style={[styles.personalData1, styles.iconProfileLayout]}>
                        <View style={[styles.text16, styles.textPosition]}>
                            <Text style={[styles.text8, styles.textTypo]}>ติดต่อเรา</Text>
                        </View>
                        <Image
                            style={[styles.iconArrow, styles.iconLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconarrow.png")}
                        />
                        <Image
                            style={[styles.iconProfile, styles.iconProfileLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconmessage.png")}
                        />
                    </View>
                    <View style={[styles.activityHistory, styles.iconProfileLayout]}>
                        <View style={[styles.text18, styles.textPosition]}>
                            <Text style={[styles.text8, styles.textTypo]}>การตั้งค่า</Text>
                        </View>
                        <Image
                            style={[styles.iconArrow, styles.iconLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconarrow.png")}
                        />
                        <Image
                            style={[styles.iconProfile, styles.iconProfileLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconsetting.png")}
                        />
                    </View>
                    <View style={[styles.privacyPolicy, styles.iconProfileLayout]}>
                        <View style={[styles.text20, styles.text20Position]}>
                            <Text style={[styles.text8, styles.textTypo]}>
                                นโยบายความเป็นส่วนตัว
                            </Text>
                        </View>
                        <Image
                            style={[styles.iconArrow5, styles.text20Position]}
                            contentFit="cover"
                            source={require("../../assets/iconarrow.png")}
                        />
                        <Image
                            style={[styles.iconProfile, styles.iconProfileLayout]}
                            contentFit="cover"
                            source={require("../../assets/iconprivacy.png")}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionPosition: {
        width: 315,
        left: 30,
        position: "absolute",
    },
    cardLayout: {
        width: 95,
        top: 0,
        height: 65,
        position: "absolute",
    },
    childShadowBox: {
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowColor: "rgba(29, 22, 23, 0.07)",
        borderRadius: Border.br_base,
        backgroundColor: Color.whiteColor,
    },
    textPosition2: {
        top: 11,
        height: 44,
        position: "absolute",
    },
    textTypo: {
        color: Color.gray1,
        fontFamily: FontFamily.textMediumTextRegular,
        lineHeight: 18,
        fontSize: FontSize.textSmallTextMedium_size,
        textAlign: "left",
        position: "absolute",
    },
    namePosition: {
        top: 3,
        position: "absolute",
    },
    text6Position: {
        color: Color.blackColor,
        textAlign: "left",
        top: 0,
        left: 0,
        position: "absolute",
    },
    bg3Layout: {
        height: 30,
        width: 83,
        position: "absolute",
    },
    toggleChildPosition: {
        backgroundColor: Color.waterIntakeLinear,
        borderRadius: Border.br_80xl,
        top: 0,
        left: 0,
    },
    text4Layout: {
        height: 18,
        position: "absolute",
    },
    rectangleViewPosition: {
        height: 189,
        top: 0,
        left: 0,
        width: 315,
        position: "absolute",
    },
    titlePosition: {
        height: 24,
        left: 20,
        top: 20,
        position: "absolute",
    },
    iconProfileLayout: {
        height: 20,
        position: "absolute",
    },
    textPosition: {
        top: 1,
        height: 18,
        position: "absolute",
    },
    iconLayout: {
        width: 18,
        left: 262,
    },
    bg5Layout: {
        height: 99,
        left: 0,
        width: 315,
        position: "absolute",
    },
    bg6Layout: {
        height: 159,
        left: 0,
        width: 315,
        position: "absolute",
    },
    text20Position: {
        top: 2,
        height: 18,
        position: "absolute",
    },
    bgChild: {
        width: 95,
        top: 0,
        height: 65,
        position: "absolute",
        left: 0,
    },
    heightCard: {
        left: 0,
    },
    cm: {
        textAlign: "left",
        fontFamily: FontFamily.textSmallTextMedium,
        fontWeight: "500",
        lineHeight: 21,
        fontSize: FontSize.textMediumTextRegular_size,
        top: 0,
        left: 0,
        position: "absolute",
    },
    text: {
        left: 3,
        top: 26,
        fontFamily: FontFamily.textMediumTextRegular,
    },
    heightText: {
        left: 24,
        width: 46,
        height: 44,
    },
    bgItem: {
        width: 95,
        top: 0,
        height: 65,
        position: "absolute",
        left: 0,
    },
    text1: {
        left: 1,
        top: 26,
        fontFamily: FontFamily.textMediumTextRegular,
    },
    weightText: {
        left: 29,
        width: 36,
        height: 44,
    },
    weightCard: {
        left: 110,
    },
    bgInner: {
        width: 95,
        top: 0,
        height: 65,
        position: "absolute",
        left: 0,
    },
    text3: {
        left: 5,
        top: 26,
        fontFamily: FontFamily.textMediumTextRegular,
    },
    ageText: {
        width: 29,
        height: 44,
        left: 30,
    },
    ageCard: {
        left: 220,
    },
    personalData: {
        top: 70,
        height: 65,
        left: 0,
        width: 315,
        position: "absolute",
    },
    maximusWalker: {
        fontFamily: FontFamily.textSmallTextMedium,
        fontWeight: "500",
        lineHeight: 21,
        fontSize: FontSize.textMediumTextRegular_size,
        color: Color.blackColor,
    },
    loseAFat: {
        top: 26,
        fontFamily: FontFamily.textMediumTextRegular,
        left: 0,
    },
    name: {
        left: 70,
        width: 117,
        height: 44,
    },
    latestPicIcon: {
        width: 55,
        height: 55,
        top: 0,
        left: 0,
        position: "absolute",
    },
    rectangleLineargradient: {
        height: 30,
        width: 83,
        position: "absolute",
    },
    bg3: {
        top: 0,
        left: 0,
    },
    text5: {
        color: Color.whiteColor,
        lineHeight: 18,
        fontSize: FontSize.textSmallTextMedium_size,
        textAlign: "left",
        fontFamily: FontFamily.textSmallTextMedium,
        fontWeight: "500",
        top: 0,
        left: 0,
        position: "absolute",
    },
    text4: {
        top: 6,
        width: 25,
        left: 30,
    },
    button: {
        top: 10,
        left: 232,
    },
    profileSection: {
        top: 32,
        height: 135,
    },
    rectangleView: {
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowColor: "rgba(29, 22, 23, 0.07)",
        borderRadius: Border.br_base,
        backgroundColor: Color.whiteColor,
    },
    text6: {
        fontSize: FontSize.textLargeTextRegular_size,
        lineHeight: 24,
        fontWeight: "600",
        fontFamily: FontFamily.textLargeTextSemiBold,
    },
    title: {
        width: 35,
    },
    iconProfile: {
        width: 20,
        top: 0,
        left: 0,
    },
    text8: {
        top: 0,
        left: 0,
    },
    text7: {
        width: 77,
        left: 30,
    },
    iconArrow: {
        top: 1,
        height: 18,
        position: "absolute",
    },
    personalData1: {
        top: 59,
        width: 280,
        height: 20,
        left: 20,
    },
    text9: {
        width: 53,
        left: 30,
    },
    achievement: {
        top: 89,
        width: 280,
        height: 20,
        left: 20,
    },
    text11: {
        width: 128,
        left: 30,
    },
    activityHistory: {
        top: 119,
        width: 280,
        height: 20,
        left: 20,
    },
    bgChild1: {
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowColor: "rgba(29, 22, 23, 0.07)",
        borderRadius: Border.br_base,
        backgroundColor: Color.whiteColor,
        top: 0,
    },
    bg5: {
        top: 0,
    },
    title1: {
        width: 90,
    },
    text14: {
        width: 133,
        left: 30,
    },
    toggleChild: {
        backgroundColor: Color.waterIntakeLinear,
        borderRadius: Border.br_80xl,
        top: 0,
        left: 0,
        width: 36,
    },
    toggleItem: {
        left: 21,
        width: 12,
        height: 12,
    },
    toggle: {
        left: 244,
        width: 36,
    },
    notificationSection: {
        top: 204,
    },
    bgChild2: {
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowColor: "rgba(29, 22, 23, 0.07)",
        borderRadius: Border.br_base,
        backgroundColor: Color.whiteColor,
        top: 0,
    },
    bg6: {
        top: 0,
    },
    title2: {
        width: 31,
    },
    text16: {
        width: 44,
        left: 30,
    },
    text18: {
        width: 45,
        left: 30,
    },
    text20: {
        width: 115,
        left: 30,
    },
    iconArrow5: {
        width: 18,
        left: 262,
    },
    privacyPolicy: {
        top: 88,
        width: 280,
        height: 20,
        left: 20,
    },
    otherSection: {
        top: 318,
    },
    dataCardSection: {
        top: 180,
        height: 477,
    },
    profile: {
        // borderRadius: Border.br_21xl,
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
        backgroundColor: Color.whiteColor,
    },
});