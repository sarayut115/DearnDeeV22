import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, StatusBar, SafeAreaView } from "react-native";
import HomeScreen1 from "../screens/HomeScreen1";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation }) => {
  const navigation123 = useNavigation();
  return (
    <>
      {/* <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </SafeAreaView> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Account") {
              iconName = "person";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#00b4d8",
          tabBarInactiveTintColor: "#888",
          // tabBarStyle: {
          //   display: "flex",
          // },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            
            headerLeft: () => (
              <View style={{ marginLeft: 25, marginBottom:20 }}>
                <Text style={{ fontSize: 16, fontWeight: "normal", color: "#111",margin:2 }}>
                  ยินดีต้อนรับ 
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#111" }}>
                  Maximus Walker
                </Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation123.navigate("123")}
                style={{ marginRight: 15 }}
              >
                <Ionicons name="add-circle-outline" size={35} color="#00b4d8" />
              </TouchableOpacity>
            ),
            headerTitle: "", // ลบ headerTitle ออก
          }}
        />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default () => {
  return <MainContainer />;
};
