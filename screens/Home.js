import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, Border, Color, FontFamily, Padding } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.latestWorkoutSection, styles.sectionPosition]}>
        <View style={[styles.workoutCard1, styles.workoutCardLayout]}>
          <View style={[styles.workoutCardBg, styles.workoutCardLayout]}>
            <View style={[styles.workoutCardBg1, styles.workoutCardLayout]} />
          </View>
          <View style={[styles.workoutText, styles.workoutPosition1]}>
            <Text style={[styles.fullbodyWorkout, styles.workoutFlexBox]}>
              Fullbody Workout
            </Text>
            <Text style={[styles.caloriesBurn, styles.minsAgoTypo]}>
              180 Calories Burn | 20minutes
            </Text>
          </View>
          <View style={[styles.workoutProgressBar, styles.workoutLayout2]}>
            <View
              style={[styles.workoutProgressBarChild, styles.workoutLayout2]}
            />
            <LinearGradient
              style={[styles.workoutProgressBarItem, styles.workoutPosition]}
              locations={[0, 1]}
              colors={["#c58bf2", "#92a3fd"]}
            />
          </View>
          <Image
            style={styles.workoutPicIcon}
            contentFit="cover"
            source={require("../assets/workoutpic.png")}
          />
          <Image
            style={[styles.workoutBtnIcon, styles.workoutLayout1]}
            contentFit="cover"
            source={require("../assets/workoutbtn.png")}
          />
        </View>
        <View style={[styles.workoutCard11, styles.workoutCardLayout]}>
          <View style={[styles.workoutCardBg, styles.workoutCardLayout]}>
            <View style={[styles.workoutCardBg1, styles.workoutCardLayout]} />
          </View>
          <View style={[styles.workoutText, styles.workoutPosition1]}>
            <Text style={[styles.fullbodyWorkout, styles.workoutFlexBox]}>
              Ab Workout
            </Text>
            <Text style={[styles.caloriesBurn, styles.minsAgoTypo]}>
              180 Calories Burn | 20minutes
            </Text>
          </View>
          <View style={[styles.workoutProgressBar, styles.workoutLayout2]}>
            <View
              style={[styles.workoutProgressBarChild, styles.workoutLayout2]}
            />
            <LinearGradient
              style={[styles.workoutProgressBarItem, styles.workoutPosition]}
              locations={[0, 1]}
              colors={["#c58bf2", "#92a3fd"]}
            />
          </View>
          <Image
            style={styles.workoutPicIcon}
            contentFit="cover"
            source={require("../assets/workoutpic1.png")}
          />
          <Image
            style={[styles.workoutBtnIcon, styles.workoutLayout1]}
            contentFit="cover"
            source={require("../assets/workoutbtn.png")}
          />
        </View>
        <View style={[styles.latestWorkout, styles.workoutLayout1]}>
          <Text style={[styles.latestWorkout1, styles.workoutClr]}>
            Latest Workout
          </Text>
        </View>
        <View style={[styles.seemore, styles.seemorePosition]}>
          <Text style={[styles.seeMore, styles.workoutFlexBox]}>See more</Text>
        </View>
        <View style={[styles.workoutCard2, styles.workoutCardLayout]}>
          <View style={[styles.workoutCardBg, styles.workoutCardLayout]}>
            <View
              style={[styles.workoutCardBg5, styles.workoutCardBg5ShadowBox]}
            />
          </View>
          <View style={[styles.workoutText2, styles.workoutPosition1]}>
            <Text style={[styles.lowerbodyWorkout, styles.workoutClr]}>
              Lowerbody Workout
            </Text>
            <Text style={[styles.caloriesBurn, styles.minsAgoTypo]}>
              200 Calories Burn | 30minutes
            </Text>
          </View>
          <View style={[styles.workoutProgressBar, styles.workoutLayout2]}>
            <View
              style={[styles.workoutProgressBarChild, styles.workoutLayout2]}
            />
            <LinearGradient
              style={[styles.workoutProgressBarChild1, styles.workoutPosition]}
              locations={[0, 1]}
              colors={["#c58bf2", "#92a3fd"]}
            />
          </View>
          <Image
            style={[styles.workoutBtnIcon, styles.workoutLayout1]}
            contentFit="cover"
            source={require("../assets/workoutbtn.png")}
          />
          <Image
            style={styles.workoutPicIcon}
            contentFit="cover"
            source={require("../assets/workoutpic2.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.titleHome, styles.headerLayout]}>
          <Text style={[styles.welcomeBack, styles.workoutFlexBox]}>
            Welcome Back,
          </Text>
          <Text style={[styles.stefaniWong, styles.friTypo]}>Stefani Wong</Text>
        </View>
        <Image
          style={styles.notificationIcon}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
      </View>
      <View style={[styles.statusSection, styles.sectionPosition]}>
        <View style={[styles.activityStatus, styles.workoutLayout1]}>
          <Text style={[styles.latestWorkout1, styles.workoutClr]}>
            Activity Status
          </Text>
        </View>
        <View style={styles.activityStatusCard}>
          <View style={styles.status}>
            <View style={[styles.heartRateBg, styles.fillChildPosition]}>
              <LinearGradient
                style={[styles.heartRateBgChild, styles.childPosition]}
                locations={[0, 1]}
                colors={["#92a3fd", "#9dceff"]}
              />
            </View>
            <View style={[styles.heartRateText, styles.textPosition]}>
              <Text style={[styles.heartRate, styles.workoutClr]}>
                Heart Rate
              </Text>
              <Text style={[styles.bpm, styles.bpmTypo]}>78 BPM</Text>
            </View>
            <Image
              style={[styles.heartRateGraphIcon, styles.graphIconLayout]}
              contentFit="cover"
              source={require("../assets/heartrategraph.png")}
            />
            <View style={styles.heartRateModal}>
              <View style={[styles.heartRateModalBg, styles.childIconLayout]}>
                <Image
                  style={[styles.heartRateModalBgChild, styles.graphIconLayout]}
                  contentFit="cover"
                  source={require("../assets/polygon-1.png")}
                />
                <LinearGradient
                  style={[
                    styles.heartRateModalBgItem,
                    styles.iconlylightarrowUpPosition,
                  ]}
                  locations={[0, 1]}
                  colors={["#c58bf2", "#eea4ce"]}
                />
              </View>
              <View style={styles.heartRateText1}>
                <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                  3mins ago
                </Text>
              </View>
              <Image
                style={[styles.heartRateModalDotIcon, styles.graphIconLayout]}
                contentFit="cover"
                source={require("../assets/heartratemodaldot.png")}
              />
            </View>
          </View>
          <View style={styles.status1}>
            <View style={[styles.heartRateBg, styles.fillChildPosition]}>
              <View
                style={[styles.waterIntakeBgChild, styles.fillChildPosition]}
              />
            </View>
            <View style={[styles.waterIntakeGraph, styles.sleepPosition]}>
              <View
                style={[styles.waterIntakeGraphChild, styles.fillChildPosition]}
              />
              <LinearGradient
                style={[styles.waterIntakeGraphItem, styles.childIconLayout]}
                locations={[0, 1]}
                colors={["#c58bf2", "#b4c0fe"]}
              />
            </View>
            <View
              style={[styles.waterIntakeText, styles.waterIntakeTextPosition]}
            >
              <Text style={[styles.waterIntake, styles.workoutFlexBox]}>
                Water Intake
              </Text>
              <Text style={[styles.bpm, styles.bpmTypo]}>4 Liters</Text>
            </View>
            <View
              style={[styles.realTimeUpdates, styles.waterIntakeTextPosition]}
            >
              <View style={[styles.heartRateBg, styles.fillChildPosition]}>
                <Text style={[styles.am8am, styles.mlLayout]}>6am - 8am</Text>
                <Text style={[styles.ml, styles.mlLayout]}>600ml</Text>
                <Text style={[styles.am11am, styles.mlLayout]}>9am - 11am</Text>
                <Text style={[styles.ml1, styles.mlLayout]}>500ml</Text>
                <Text style={[styles.realTimeUpdates1, styles.sunClr]}>
                  Real time updates
                </Text>
                <Text style={[styles.am2pm, styles.mlLayout]}>11am - 2pm</Text>
                <Text style={[styles.ml2, styles.mlLayout]}>1000ml</Text>
                <Text style={[styles.pm4pm, styles.mlLayout]}>2pm - 4pm</Text>
                <Text style={[styles.ml3, styles.mlLayout]}>700ml</Text>
                <Text style={[styles.pmNow, styles.mlLayout]}>4pm - now</Text>
                <Text style={[styles.ml4, styles.mlLayout]}>900ml</Text>
              </View>
              <Image
                style={[
                  styles.realTimeUpdatesProgressIcon,
                  styles.graphIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/realtimeupdatesprogress.png")}
              />
            </View>
          </View>
          <View style={[styles.status2, styles.statusPosition]}>
            <View style={[styles.heartRateBg, styles.fillChildPosition]}>
              <View
                style={[styles.sleepStatusBgChild, styles.childShadowBox]}
              />
            </View>
            <View style={[styles.sleepText, styles.sleepPosition]}>
              <Text style={[styles.heartRate, styles.workoutClr]}>Sleep</Text>
              <Text style={[styles.h20m, styles.bpmTypo]}>
                <Text style={styles.text}>8</Text>
                <Text style={styles.h}>h</Text>
                <Text style={styles.text}> 20</Text>
                <Text style={styles.h}>m</Text>
              </Text>
            </View>
            <Image
              style={[styles.sleepGraphIcon, styles.sleepPosition]}
              contentFit="cover"
              source={require("../assets/sleepgraph.png")}
            />
          </View>
          <View style={[styles.status3, styles.statusPosition]}>
            <View style={[styles.heartRateBg, styles.fillChildPosition]}>
              <View style={[styles.caloriesBgChild, styles.childShadowBox]} />
            </View>
            <View style={[styles.caloriesText, styles.sleepPosition]}>
              <Text style={[styles.heartRate, styles.workoutClr]}>
                Calories
              </Text>
              <Text style={[styles.bpm, styles.bpmTypo]}>760 kCal</Text>
            </View>
            <View style={styles.caloriesPie}>
              <Image
                style={[styles.caloriesPieEllipseIcon, styles.graphIconLayout]}
                contentFit="cover"
                source={require("../assets/caloriespieellipse.png")}
              />
              <View style={styles.caloriesPieText}>
                <Image
                  style={[
                    styles.caloriesPieEllipseIcon,
                    styles.graphIconLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-112.png")}
                />
                <Text style={[styles.kcalLeft, styles.mlLayout]}>
                  230kCal left
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.workoutSection, styles.sectionPosition]}>
        <View style={[styles.workoutProgress, styles.dropdownPosition]}>
          <Text style={[styles.workoutProgress1, styles.seemorePosition]}>
            Workout Progress
          </Text>
          <View style={[styles.dropdown, styles.dropdownPosition]}>
            <View style={[styles.heartRateBg, styles.fillChildPosition]}>
              <LinearGradient
                style={[styles.bgChild, styles.fillChildPosition]}
                locations={[0, 1]}
                colors={["#92a3fd", "#9dceff"]}
              />
            </View>
            <View style={[styles.weekly, styles.titleLayout]}>
              <Text style={styles.weekly1}>Weekly</Text>
              <Image
                style={[styles.iconlylightarrowDown2, styles.graphIconLayout]}
                contentFit="cover"
                source={require("../assets/iconlylightarrow--down-22.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.graph}>
          <View style={[styles.heartRateBg, styles.fillChildPosition]}>
            <View style={styles.graphY}>
              <Text style={[styles.text2, styles.textTypo1]}>20%</Text>
              <Text style={[styles.text3, styles.textTypo1]}>40%</Text>
              <Text style={[styles.text4, styles.textTypo]}>60%</Text>
              <Text style={[styles.text5, styles.textTypo]}>80%</Text>
              <Text style={[styles.text6, styles.textTypo1]}>100%</Text>
              <Text style={[styles.text7, styles.textTypo1]}>0%</Text>
            </View>
            <View style={styles.graphLine}>
              <View style={[styles.graphLineChild, styles.lineChildPosition]} />
              <View style={[styles.graphLineItem, styles.lineChildPosition]} />
              <View style={[styles.graphLineInner, styles.lineChildPosition]} />
              <View style={[styles.lineView, styles.lineChildPosition]} />
              <View
                style={[styles.graphLineChild1, styles.lineChildPosition]}
              />
              <View
                style={[styles.graphLineChild2, styles.lineChildPosition]}
              />
            </View>
            <View style={styles.graphX}>
              <Text style={[styles.sun, styles.sunClr]}>Sun</Text>
              <Text style={[styles.mon, styles.sunClr]}>Mon</Text>
              <Text style={[styles.tue, styles.sunClr]}>Tue</Text>
              <Text style={[styles.wed, styles.sunClr]}>Wed</Text>
              <Text style={[styles.thu, styles.sunClr]}>Thu</Text>
              <Text style={[styles.fri, styles.friTypo]}>Fri</Text>
              <Text style={[styles.sat, styles.sunClr]}>Sat</Text>
            </View>
          </View>
          <Image
            style={[styles.lineGraphIcon, styles.graphIconLayout]}
            contentFit="cover"
            source={require("../assets/linegraph1.png")}
          />
          <Image
            style={[styles.activeGraphIcon, styles.graphIconLayout]}
            contentFit="cover"
            source={require("../assets/activegraph.png")}
          />
        </View>
        <View style={styles.graphicsModal}>
          <View style={[styles.heartRateBg, styles.fillChildPosition]}>
            <View style={[styles.bgItem, styles.childShadowBox]} />
          </View>
          <View style={[styles.text8, styles.text8Position]}>
            <View style={[styles.date, styles.datePosition]}>
              <Text
                style={[styles.fri28May, styles.text9Typo]}
              >{`Fri, 28 May `}</Text>
            </View>
            <View style={[styles.title, styles.titleLayout]}>
              <Text style={[styles.upperbodyWorkout, styles.sunClr]}>
                Upperbody Workout
              </Text>
            </View>
            <View style={[styles.percentIncrease, styles.datePosition]}>
              <Text style={[styles.text9, styles.text9Typo]}>90%</Text>
              <Image
                style={[
                  styles.iconlylightarrowUp,
                  styles.iconlylightarrowUpPosition,
                ]}
                contentFit="cover"
                source={require("../assets/iconlylightarrow--up2.png")}
              />
            </View>
          </View>
          <View style={[styles.progressbar, styles.text8Position]}>
            <View style={[styles.heartRateBg, styles.fillChildPosition]}>
              <View style={[styles.bgInner, styles.fillChildPosition]} />
            </View>
            <View style={[styles.fill, styles.fillChildPosition]}>
              <LinearGradient
                style={[styles.fillChild, styles.fillChildPosition]}
                locations={[0, 1]}
                colors={["#c58bf2", "#92a3fd"]}
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.navbarIcon}
        contentFit="cover"
        source={require("../assets/navbar.png")}
      />
      <View style={[styles.banner, styles.sectionPosition]}>
        <View style={[styles.heartRateBg, styles.fillChildPosition]}>
          <LinearGradient
            style={[styles.ba, styles.heartShadowBox]}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          />
        </View>
        <Image
          style={[styles.caloriesPieEllipseIcon, styles.graphIconLayout]}
          contentFit="cover"
          source={require("../assets/bannerdots.png")}
        />
        <View style={[styles.bannerText, styles.textPosition]}>
          <Text style={[styles.bmiBodyMass, styles.bpmTypo]}>
            BMI (Body Mass Index)
          </Text>
          <Text style={[styles.youHaveA, styles.workoutFlexBox]}>
            You have a normal weight
          </Text>
        </View>
        <LinearGradient
          style={[styles.button, styles.textPosition]}
          locations={[0, 1]}
          colors={["#c58bf2", "#eea4ce"]}
        >
          <Text style={[styles.button1, styles.workoutTypo]}>View More</Text>
        </LinearGradient>
        <View style={[styles.bannerPie, styles.bannerPiePosition]}>
          <Image
            style={[styles.caloriesPieEllipseIcon, styles.graphIconLayout]}
            contentFit="cover"
            source={require("../assets/bannerpieellipse1.png")}
          />
          <View style={styles.bannerPieText}>
            <Text style={[styles.text10, styles.workoutTypo]}>20,1</Text>
          </View>
        </View>
      </View>
      <View style={[styles.action, styles.sectionPosition]}>
        <View style={[styles.heartRateBg, styles.fillChildPosition]}>
          <LinearGradient
            style={[styles.scheduleBgChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          />
        </View>
        <View style={[styles.workoutScheduleText, styles.textPosition]}>
          <Text style={[styles.todayTarget, styles.workoutClr]}>
            Today Target
          </Text>
        </View>
        <View style={[styles.buttonCheck, styles.bannerPiePosition]}>
          <View style={[styles.heartRateBg, styles.fillChildPosition]}>
            <LinearGradient
              style={[styles.bgChild, styles.fillChildPosition]}
              locations={[0, 1]}
              colors={["#92a3fd", "#9dceff"]}
            />
          </View>
          <View style={styles.buttonText}>
            <Text style={[styles.check, styles.workoutFlexBox]}>Check</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionPosition: {
    left: 30,
    width: 315,
  },
  workoutCardLayout: {
    height: 80,
    left: 0,
    width: 315,
    position: "absolute",
  },
  workoutPosition1: {
    height: 36,
    left: 75,
    top: 15,
    position: "absolute",
  },
  workoutFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  minsAgoTypo: {
    lineHeight: 15,
    fontSize: FontSize.textCaptionSemiBold_size,
    textAlign: "left",
  },
  workoutLayout2: {
    height: 10,
    width: 191,
    position: "absolute",
  },
  workoutPosition: {
    borderBottomLeftRadius: Border.br_31xl,
    borderTopLeftRadius: Border.br_31xl,
    backgroundColor: Color.blueLinear,
    height: 10,
    top: 0,
    left: 0,
    position: "absolute",
  },
  workoutLayout1: {
    height: 24,
    position: "absolute",
  },
  workoutClr: {
    color: Color.blackColor,
    textAlign: "left",
  },
  seemorePosition: {
    top: 3,
    position: "absolute",
  },
  workoutCardBg5ShadowBox: {
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(29, 36, 42, 0.05)",
    backgroundColor: Color.whiteColor,
  },
  headerLayout: {
    height: 53,
    position: "absolute",
  },
  friTypo: {
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
  },
  fillChildPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  childPosition: {
    opacity: 0.2,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.blueLinear,
    position: "absolute",
    width: "100%",
  },
  textPosition: {
    left: "6.35%",
    position: "absolute",
  },
  bpmTypo: {
    lineHeight: 21,
    left: "0%",
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  graphIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childIconLayout: {
    width: "100%",
    left: "0%",
  },
  iconlylightarrowUpPosition: {
    bottom: "16.67%",
    right: "0%",
    position: "absolute",
  },
  sleepPosition: {
    left: "13.33%",
    position: "absolute",
  },
  waterIntakeTextPosition: {
    left: "33.33%",
    position: "absolute",
  },
  mlLayout: {
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  sunClr: {
    color: Color.gray1,
    top: "0%",
    fontFamily: FontFamily.textSmallTextRegular,
  },
  statusPosition: {
    left: 165,
    width: 150,
    height: 150,
    position: "absolute",
  },
  childShadowBox: {
    shadowColor: "rgba(29, 22, 23, 0.07)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.whiteColor,
  },
  dropdownPosition: {
    height: 30,
    top: 0,
    position: "absolute",
  },
  titleLayout: {
    height: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_2xs_6,
    textAlign: "right",
    position: "absolute",
  },
  textTypo: {
    left: "6.9%",
    fontSize: FontSize.size_2xs_6,
    textAlign: "right",
    color: Color.gray1,
    fontFamily: FontFamily.textSmallTextRegular,
    position: "absolute",
  },
  lineChildPosition: {
    borderTopWidth: 1.2,
    borderColor: Color.gray3,
    borderStyle: "solid",
    left: "-0.21%",
    right: "-0.21%",
    width: "100.42%",
    height: "0.88%",
    position: "absolute",
  },
  text8Position: {
    left: "7.69%",
    position: "absolute",
  },
  datePosition: {
    bottom: "60%",
    height: "40%",
    top: "0%",
    position: "absolute",
  },
  text9Typo: {
    fontSize: FontSize.size_5xs,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.textSmallTextRegular,
    textAlign: "left",
    position: "absolute",
  },
  heartShadowBox: {
    elevation: 22,
    shadowRadius: 22,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  workoutTypo: {
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
  },
  bannerPiePosition: {
    right: "6.35%",
    position: "absolute",
  },
  workoutCardBg1: {
    borderRadius: Border.br_base,
    top: 0,
    backgroundColor: Color.whiteColor,
    height: 80,
  },
  workoutCardBg: {
    top: 0,
  },
  fullbodyWorkout: {
    color: Color.gray3,
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    top: 0,
    left: 0,
  },
  caloriesBurn: {
    top: 21,
    color: Color.gray21,
    fontFamily: FontFamily.textSmallTextRegular,
    left: 0,
    position: "absolute",
  },
  workoutText: {
    width: 146,
  },
  workoutProgressBarChild: {
    backgroundColor: Color.borderColor,
    borderRadius: Border.br_31xl,
    top: 0,
    left: 0,
  },
  workoutProgressBarItem: {
    width: 63,
    backgroundColor: Color.blueLinear,
  },
  workoutProgressBar: {
    top: 60,
    left: 75,
    height: 10,
    width: 191,
  },
  workoutPicIcon: {
    left: 15,
    width: 50,
    height: 50,
    top: 15,
    position: "absolute",
  },
  workoutBtnIcon: {
    top: 28,
    left: 276,
    width: 24,
  },
  workoutCard1: {
    top: 39,
  },
  workoutCard11: {
    top: 229,
  },
  latestWorkout1: {
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.textLargeTextRegular_size,
    color: Color.blackColor,
    left: 0,
    top: 0,
    position: "absolute",
  },
  latestWorkout: {
    width: 123,
    top: 0,
    left: 0,
  },
  seeMore: {
    color: Color.gray2,
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    top: 0,
    left: 0,
  },
  seemore: {
    left: 257,
    width: 58,
    height: 18,
  },
  workoutCardBg5: {
    borderRadius: Border.br_base,
    top: 0,
    height: 80,
    left: 0,
    width: 315,
    position: "absolute",
  },
  lowerbodyWorkout: {
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    top: 0,
    left: 0,
    position: "absolute",
  },
  workoutText2: {
    width: 149,
  },
  workoutProgressBarChild1: {
    width: 105,
    backgroundColor: Color.blueLinear,
  },
  workoutCard2: {
    top: 134,
  },
  latestWorkoutSection: {
    top: 1183,
    height: 309,
    width: 315,
    position: "absolute",
  },
  welcomeBack: {
    color: Color.gray2,
    fontFamily: FontFamily.textSmallTextRegular,
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    top: 0,
    left: 0,
  },
  stefaniWong: {
    top: 23,
    fontSize: FontSize.titleH4Bold_size,
    lineHeight: 30,
    color: Color.blackColor,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  titleHome: {
    width: 138,
    top: 0,
    left: 0,
  },
  notificationIcon: {
    top: 5,
    left: 275,
    width: 40,
    height: 40,
    position: "absolute",
  },
  header: {
    top: 40,
    width: 315,
    left: 30,
  },
  activityStatus: {
    width: 118,
    top: 0,
    left: 0,
  },
  heartRateBgChild: {
    elevation: 22,
    shadowRadius: 22,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(149, 173, 254, 0.3)",
    borderRadius: Border.br_xl,
  },
  heartRateBg: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  heartRate: {
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
    position: "absolute",
  },
  bpm: {
    fontSize: FontSize.textMediumTextSemiBold_size,
    top: "52.27%",
    lineHeight: 21,
  },
  heartRateText: {
    width: "20.32%",
    bottom: "57.33%",
    top: "13.33%",
    height: "29.33%",
    right: "73.33%",
  },
  heartRateGraphIcon: {
    height: "41%",
    top: "40%",
    bottom: "19%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  heartRateModalBgChild: {
    height: "33.33%",
    width: "13.7%",
    top: "66.67%",
    right: "42.47%",
    left: "43.84%",
    borderRadius: Border.br_12xs,
    bottom: "0%",
    position: "absolute",
  },
  heartRateModalBgItem: {
    height: "83.33%",
    shadowColor: "rgba(197, 139, 242, 0.3)",
    elevation: 22,
    shadowRadius: 22,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    left: "0%",
    top: "0%",
    backgroundColor: Color.blueLinear,
    borderRadius: Border.br_31xl,
    width: "100%",
  },
  heartRateModalBg: {
    height: "75%",
    bottom: "25%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  minsAgo: {
    color: Color.whiteColor,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.textSmallTextRegular,
    position: "absolute",
  },
  heartRateText1: {
    height: "37.5%",
    width: "72.6%",
    top: "12.5%",
    right: "13.7%",
    bottom: "50%",
    left: "13.7%",
    position: "absolute",
  },
  heartRateModalDotIcon: {
    height: "12.5%",
    width: "6.85%",
    top: "87.5%",
    right: "46.58%",
    left: "46.58%",
    bottom: "0%",
    position: "absolute",
  },
  heartRateModal: {
    height: "26.67%",
    width: "23.17%",
    top: "22.67%",
    right: "26.35%",
    bottom: "50.67%",
    left: "50.48%",
    position: "absolute",
  },
  status: {
    height: 150,
    top: 0,
    left: 0,
    width: 315,
    position: "absolute",
  },
  waterIntakeBgChild: {
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(29, 36, 42, 0.05)",
    backgroundColor: Color.whiteColor,
    width: "100%",
  },
  waterIntakeGraphChild: {
    borderRadius: Border.br_11xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.borderColor,
    width: "100%",
  },
  waterIntakeGraphItem: {
    height: "54.91%",
    top: "45.09%",
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.blueLinear,
    position: "absolute",
  },
  waterIntakeGraph: {
    height: "87.3%",
    width: "13.33%",
    bottom: "6.35%",
    top: "6.35%",
    right: "73.33%",
  },
  waterIntake: {
    color: Color.black,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
  },
  waterIntakeText: {
    height: "13.97%",
    width: "52%",
    right: "14.67%",
    bottom: "79.68%",
    top: "6.35%",
  },
  am8am: {
    top: "10.05%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    color: Color.gray2,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  ml: {
    top: "17.59%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  am11am: {
    top: "29.15%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    color: Color.gray2,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  ml1: {
    top: "36.68%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  realTimeUpdates1: {
    left: "0%",
    lineHeight: 15,
    fontSize: FontSize.textCaptionSemiBold_size,
    textAlign: "left",
    position: "absolute",
  },
  am2pm: {
    top: "48.24%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    color: Color.gray2,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  ml2: {
    top: "55.78%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  pm4pm: {
    top: "67.34%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    color: Color.gray2,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  ml3: {
    top: "74.87%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  pmNow: {
    top: "86.43%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    color: Color.gray2,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  ml4: {
    top: "93.97%",
    left: "19.57%",
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  realTimeUpdatesProgressIcon: {
    height: "80.4%",
    width: "10.87%",
    top: "11.56%",
    right: "89.13%",
    bottom: "8.04%",
    left: "0%",
    position: "absolute",
  },
  realTimeUpdates: {
    height: "63.17%",
    width: "61.33%",
    top: "23.49%",
    right: "5.33%",
    bottom: "13.33%",
  },
  status1: {
    height: 315,
    width: 150,
    top: 166,
    left: 0,
    position: "absolute",
  },
  sleepStatusBgChild: {
    borderRadius: Border.br_xl,
  },
  text: {
    fontSize: FontSize.textMediumTextSemiBold_size,
  },
  h: {
    fontSize: FontSize.textCaptionSemiBold_size,
  },
  h20m: {
    top: "52.27%",
    lineHeight: 21,
  },
  sleepText: {
    width: "31.33%",
    right: "55.33%",
    bottom: "57.33%",
    top: "13.33%",
    height: "29.33%",
  },
  sleepGraphIcon: {
    height: "52%",
    width: "73.33%",
    top: "46%",
    right: "13.33%",
    bottom: "2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  status2: {
    top: 166,
    left: 165,
  },
  caloriesBgChild: {
    borderRadius: Border.br_xl,
  },
  caloriesText: {
    width: "41.33%",
    top: "16%",
    right: "45.33%",
    bottom: "54.67%",
    height: "29.33%",
    left: "13.33%",
  },
  caloriesPieEllipseIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  kcalLeft: {
    width: "75%",
    top: "25%",
    left: "12.5%",
    textAlign: "center",
    color: Color.whiteColor,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  caloriesPieText: {
    height: "72.73%",
    width: "72.73%",
    top: "13.64%",
    right: "13.64%",
    bottom: "13.64%",
    left: "13.64%",
    position: "absolute",
  },
  caloriesPie: {
    height: "44%",
    width: "44%",
    top: "49.33%",
    right: "28%",
    bottom: "6.67%",
    left: "28%",
    position: "absolute",
  },
  status3: {
    top: 331,
  },
  activityStatusCard: {
    height: 481,
    left: 0,
    top: 39,
    width: 315,
    position: "absolute",
  },
  statusSection: {
    top: 386,
    height: 520,
    width: 315,
    position: "absolute",
  },
  workoutProgress1: {
    color: Color.blackColor,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.textLargeTextRegular_size,
    left: 0,
  },
  bgChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.blueLinear,
    borderRadius: Border.br_31xl,
    width: "100%",
  },
  weekly1: {
    textAlign: "right",
    color: Color.whiteColor,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.textSmallTextRegular,
    lineHeight: 15,
    fontSize: FontSize.textCaptionSemiBold_size,
    position: "absolute",
  },
  iconlylightarrowDown2: {
    width: "26.79%",
    left: "73.21%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  weekly: {
    width: "73.68%",
    top: "26.67%",
    right: "13.16%",
    bottom: "23.33%",
    left: "13.16%",
  },
  dropdown: {
    left: 239,
    width: 76,
  },
  workoutProgress: {
    left: 0,
    width: 315,
  },
  text2: {
    top: "71.43%",
    left: "10.34%",
    fontSize: FontSize.size_2xs_6,
    color: Color.gray1,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  text3: {
    top: "53.9%",
    left: "0%",
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
  },
  text4: {
    top: "35.71%",
  },
  text5: {
    top: "18.18%",
  },
  text6: {
    left: "13.79%",
    color: Color.gray1,
    top: "0%",
    fontFamily: FontFamily.textSmallTextRegular,
  },
  text7: {
    top: "89.61%",
    left: "10.34%",
    fontSize: FontSize.size_2xs_6,
    color: Color.gray1,
    fontFamily: FontFamily.textSmallTextRegular,
  },
  graphY: {
    height: "89.53%",
    width: "9.21%",
    bottom: "10.47%",
    left: "90.79%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  graphLineChild: {
    top: "-0.44%",
    bottom: "99.56%",
  },
  graphLineItem: {
    top: "20%",
    bottom: "79.12%",
  },
  graphLineInner: {
    top: "39.71%",
    bottom: "59.42%",
  },
  lineView: {
    top: "59.42%",
    bottom: "39.71%",
  },
  graphLineChild1: {
    top: "79.85%",
    bottom: "19.27%",
  },
  graphLineChild2: {
    top: "99.56%",
    bottom: "-0.44%",
  },
  graphLine: {
    height: "79.65%",
    width: "89.84%",
    top: "4.65%",
    right: "10.16%",
    bottom: "15.7%",
    opacity: 0.3,
    left: "0%",
    position: "absolute",
  },
  sun: {
    left: "0%",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.textSmallTextRegular_size,
  },
  mon: {
    left: "15.64%",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.textSmallTextRegular_size,
  },
  tue: {
    left: "32.36%",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.textSmallTextRegular_size,
  },
  wed: {
    left: "47.64%",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.textSmallTextRegular_size,
  },
  thu: {
    left: "65.09%",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.textSmallTextRegular_size,
  },
  fri: {
    left: "80%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.textSmallTextRegular_size,
  },
  sat: {
    left: "92.73%",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.textSmallTextRegular_size,
  },
  graphX: {
    height: "10.47%",
    width: "87.3%",
    top: "89.53%",
    right: "11.43%",
    left: "1.27%",
    bottom: "0%",
    position: "absolute",
  },
  lineGraphIcon: {
    height: "64.48%",
    width: "89.62%",
    top: "13.37%",
    right: "10.22%",
    bottom: "22.15%",
    left: "0.16%",
    position: "absolute",
  },
  activeGraphIcon: {
    height: "70.35%",
    width: "7.94%",
    top: "26.74%",
    right: "22.54%",
    bottom: "2.91%",
    left: "69.52%",
    position: "absolute",
  },
  graph: {
    top: 45,
    height: 172,
    left: 0,
    width: 315,
    position: "absolute",
  },
  bgItem: {
    borderRadius: Border.br_5xs,
  },
  fri28May: {
    color: Color.gray2,
  },
  date: {
    width: "42%",
    right: "58%",
    left: "0%",
  },
  upperbodyWorkout: {
    left: "0%",
    fontSize: FontSize.textCaptionSemiBold_size,
    textAlign: "left",
    position: "absolute",
  },
  title: {
    top: "50%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  text9: {
    color: Color.success,
  },
  iconlylightarrowUp: {
    height: "66.67%",
    width: "32%",
    top: "16.67%",
    left: "68%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  percentIncrease: {
    width: "25%",
    left: "75%",
    right: "0%",
  },
  text8: {
    height: "51.72%",
    width: "76.92%",
    top: "17.24%",
    right: "15.38%",
    bottom: "31.03%",
  },
  bgInner: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.borderColor,
    width: "100%",
  },
  fillChild: {
    borderTopLeftRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.blueLinear,
    width: "100%",
  },
  fill: {
    width: "79.09%",
    right: "20.91%",
    left: "0%",
    bottom: "0%",
    top: "0%",
  },
  progressbar: {
    height: "8.62%",
    width: "84.62%",
    top: "74.14%",
    right: "7.69%",
    bottom: "17.24%",
  },
  graphicsModal: {
    top: 35,
    left: 94,
    width: 130,
    height: 58,
    position: "absolute",
  },
  workoutSection: {
    top: 936,
    height: 217,
    width: 315,
    position: "absolute",
  },
  navbarIcon: {
    top: 1437,
    width: 375,
    height: 90,
    left: 0,
    position: "absolute",
  },
  ba: {
    borderRadius: Border.br_3xl,
    shadowColor: "rgba(149, 173, 254, 0.3)",
    shadowRadius: 22,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.blueLinear,
    width: "100%",
  },
  bmiBodyMass: {
    color: Color.whiteColor,
    fontSize: FontSize.textMediumTextSemiBold_size,
    top: "0%",
  },
  youHaveA: {
    top: "59.09%",
    color: Color.whiteColor,
    left: "0%",
    fontFamily: FontFamily.textSmallTextRegular,
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
  },
  bannerText: {
    height: "30.14%",
    width: "51.43%",
    top: "17.81%",
    right: "42.22%",
    bottom: "52.05%",
  },
  button1: {
    color: Color.whiteColor,
    lineHeight: 15,
    fontSize: FontSize.textCaptionSemiBold_size,
    textAlign: "left",
  },
  button: {
    height: "23.97%",
    width: "30.16%",
    top: "58.22%",
    right: "63.49%",
    bottom: "17.81%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.blueLinear,
    borderRadius: Border.br_31xl,
  },
  text10: {
    color: Color.whiteColor,
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextRegular_size,
  },
  bannerPieText: {
    height: "16.98%",
    width: "21.7%",
    top: "18.87%",
    right: "18.87%",
    bottom: "64.15%",
    left: "59.43%",
    position: "absolute",
  },
  bannerPie: {
    height: "72.6%",
    width: "33.65%",
    top: "13.7%",
    bottom: "13.7%",
    left: "60%",
  },
  banner: {
    top: 123,
    height: 146,
    width: 315,
    position: "absolute",
  },
  scheduleBgChild: {
    borderRadius: Border.br_base,
  },
  todayTarget: {
    fontSize: FontSize.textMediumTextSemiBold_size,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
    position: "absolute",
  },
  workoutScheduleText: {
    height: "36.84%",
    width: "29.84%",
    top: "31.58%",
    right: "63.81%",
    bottom: "31.58%",
  },
  check: {
    color: Color.whiteColor,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.textSmallTextRegular,
    fontSize: FontSize.textSmallTextRegular_size,
    textAlign: "left",
  },
  buttonText: {
    height: "64.29%",
    width: "55.88%",
    top: "17.86%",
    right: "22.06%",
    bottom: "17.86%",
    left: "22.06%",
    position: "absolute",
  },
  buttonCheck: {
    height: "49.12%",
    width: "21.59%",
    top: "26.32%",
    bottom: "24.56%",
    left: "72.06%",
  },
  action: {
    top: 299,
    height: 57,
    width: 315,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 1527,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whiteColor,
  },
});

export default Home;
