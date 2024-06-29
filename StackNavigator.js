import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen1 from "./screens/OnboardingScreen1";
import Dashboard from "./screens/Dashboard"; // Updated import for Dashboard
import { enableScreens } from 'react-native-screens';
enableScreens();


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="OnboardingScreen1">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
