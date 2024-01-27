import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotpassword}>
      <View style={styles.titleSection}>
        <Text style={styles.text}>ยินดีต้อนรับ</Text>
        <Text style={[styles.text1, styles.textTypo]}>
          ลืมรหัสผ่านใช่หรือไม่
        </Text>
      </View>
      <View style={[styles.labelSection, styles.labelLayout]}>
        <View style={[styles.label, styles.labelLayout]}>
          <View style={styles.labelChildPosition}>
            <View style={[styles.labelBgChild, styles.labelChildPosition]} />
          </View>
          <View style={[styles.placeholder, styles.placeholderLayout]}>
            <Image
              style={[styles.iconlylightmessage, styles.placeholderLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightmessage.png")}
            />
            <Text style={[styles.email, styles.emailTypo]}>อีเมล</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.pictureIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/picture.png")}
      />
      <View style={styles.profileText}>
        <Text style={[styles.text2, styles.textTypo]}>
          หากต้องการรีเซ็ตรหัสผ่านกรุณากรอกอีเมลของคุณ
        </Text>
        <Text style={[styles.text3, styles.text3FlexBox]}>
          ตรวจสอบอีเมลของคุณ จะส่งลิงค์รีเซ็ตรหัสผ่านไปให้คุณ
        </Text>
      </View>
      <View style={styles.buttonLargeRegister}>
        <LinearGradient
          style={[styles.buttonLargeRegisterChild, styles.labelChildPosition]}
          locations={[0, 1]}
          colors={["#92a3fd", "#9dceff"]}
        />
        <Text style={[styles.register, styles.text3FlexBox]}>
          ส่งลิ้งรีเซ็ตรหัสผ่าน
        </Text>
      </View>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
  },
  labelLayout: {
    height: 48,
    width: 315,
    position: "absolute",
  },
  labelChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  placeholderLayout: {
    height: 18,
    position: "absolute",
  },
  emailTypo: {
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text3FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  text: {
    left: 44,
    textAlign: "left",
    color: Color.blackColor,
    fontFamily: FontFamily.textSmallTextRegular,
    lineHeight: 24,
    fontSize: FontSize.textLargeTextRegular_size,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 32,
    fontSize: FontSize.titleH4Bold_size,
    lineHeight: 30,
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
    left: 0,
    textAlign: "left",
    color: Color.blackColor,
    position: "absolute",
  },
  titleSection: {
    top: 40,
    left: 103,
    width: 168,
    height: 62,
    position: "absolute",
  },
  labelBgChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.borderColor,
    borderStyle: "solid",
    borderColor: Color.borderColor,
    borderWidth: 1,
  },
  iconlylightmessage: {
    width: 18,
    left: 0,
    top: 0,
  },
  email: {
    left: "52.83%",
    color: Color.gray2,
    top: "0%",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  placeholder: {
    top: 15,
    left: 15,
    width: 53,
  },
  label: {
    left: 0,
    top: 0,
  },
  labelSection: {
    top: 434,
    left: 29,
  },
  pictureIcon: {
    height: "29.68%",
    width: "57.87%",
    top: "17.73%",
    right: "17.6%",
    bottom: "52.59%",
    left: "24.53%",
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.size_smi,
    lineHeight: 30,
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
    left: 0,
    textAlign: "left",
    color: Color.blackColor,
    position: "absolute",
    top: 0,
  },
  text3: {
    top: 120,
    left: 14,
    color: Color.gray1,
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  profileText: {
    top: 397,
    left: 43,
    width: 275,
    height: 138,
    position: "absolute",
  },
  buttonLargeRegisterChild: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.blueLinear,
  },
  register: {
    top: "30%",
    left: "30.16%",
    color: Color.whiteColor,
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.textLargeTextRegular_size,
    textAlign: "center",
  },
  buttonLargeRegister: {
    top: 554,
    left: 30,
    shadowColor: "rgba(149, 173, 254, 0.3)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    height: 60,
    width: 315,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  arrowLeft: {
    left: "9.87%",
    top: "5.42%",
    right: "85.33%",
    bottom: "92.61%",
    width: "4.8%",
    height: "1.97%",
    position: "absolute",
  },
  forgotpassword: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.whiteColor,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassword;
