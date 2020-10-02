import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { View, StyleSheet, Text } from "react-native";
import Start_navigation from "./components/start_navigation";
import Bottom_navigation from "./components/bottom_navigation";
import fire from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";

const temp = createStackNavigator(
  {
    Before: {
      screen: Start_navigation,
      navigationOptions: { headerShown: false },
    },
    After: {
      screen: Bottom_navigation,
      navigationOptions: { headerShown: false },
    },
  },
  {
    initialRouteName: "Before",
  }
);

const Navi = createAppContainer(temp);
export default function App() {
  return (
    <NavigationContainer>
      <Navi />
    </NavigationContainer>
  );
}
