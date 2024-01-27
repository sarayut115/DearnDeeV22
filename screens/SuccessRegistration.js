import * as React from "react";
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";


const SuccessRegistration = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('LogOut สำเร็จ');
        navigation.replace("LoginPage")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.successRegistration}>
      <View style={styles.titleSection}>
        
        <View style={styles.onboardTitle}>
          <Text style={[styles.welcome, styles.button1Typo]}>
            ยินดีต้อนรับ 
          </Text>
          <Text style={[styles.emailcurrent, styles.button1Typo]}>
           {auth.currentUser?.email}
          </Text>
        </View>
        <View style={styles.onboardDescription}>
          <Text style={[styles.text, styles.textPosition]}>
            ตอนนี้คุณพร้อมแล้ว, ไปเริ่มกันเลย!
          </Text>
        </View>
      </View>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#92a3fd", "#9dceff"]}
      >
        {/* <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={[styles.button1, styles.button1Typo]}>
            ไปสู่หน้าหลัก
          </Text>
        </Pressable> */}
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.pressable}
        >
          <Text style={[styles.button1, styles.button1Typo]}>Sign out</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  button1Typo: {
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
    
  },
  text: {
    fontSize: FontSize.textSmallTextRegular_size,
    lineHeight: 18,
    fontFamily: FontFamily.textSmallTextRegular,
    color: Color.gray1,
    width: 214,
  },
  onboardDescription: {
    top: 70,
    left: 36,
    height: 18,
    width: 214,
    position: "absolute",
  },
  welcome: {
    fontSize: FontSize.titleH4Bold_size,
    lineHeight: 30,
    color: Color.blackColor,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  emailcurrent: {
    fontSize: FontSize.titleH4Bold_size,
    lineHeight: 30,
    color: Color.blackColor,
    textAlign: "center",
    left: 0,
    top: 25,
    position: "absolute",
  },
  onboardTitle: {
    height: 30,
    left: 0,
    top: 0,
    width: 300,
    position: "absolute",

  },
  titleSection: {
    top: 450,
    left: 44,
    height: 53,
    width: 287,
    position: "absolute",
  },
  button1: {
    fontSize: FontSize.textLargeTextRegular_size,
    lineHeight: 24,
    color: Color.whiteColor,
    textAlign: "left",
  },
  pressable: {
    borderRadius: Border.br_80xl,
    shadowColor: "rgba(149, 173, 254, 0.3)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_110xl,
    paddingVertical: Padding.p_lg,
    backgroundColor: Color.blueLinear,
    width: "100%",
  },
  button: {
    left: 30,
    top: 712,
    width: 315,
    position: "absolute",
  },
  groupIcon: {
    height: "36.06%",
    width: "74.03%",
    top: "12.56%",
    right: "12.91%",
    bottom: "51.38%",
    left: "13.07%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  successRegistration: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.whiteColor,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SuccessRegistration;
