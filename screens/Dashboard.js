import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen.js";
import CardsScreen from "./CardsScreen.js";
import BillScreen from "./BillScreen.js";
import ProfileScreen from "./ProfileScreen.js";
import { Ionicons } from "@expo/vector-icons";
import { enableScreens } from "react-native-screens";

enableScreens();

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cards") {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === "Bill") {
            iconName = focused ? "receipt" : "receipt-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#303F9F",
        tabBarInactiveTintColor: "#757575B2",
        tabBarStyle: {
          height: 90,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
      <Tab.Screen name="Bill" component={BillScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Dashboard;
