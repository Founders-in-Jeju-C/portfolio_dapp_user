import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Start from "./components/start";
import Login from "./components/login";
import Bottom_navigation from "./components/bottom_navigation";
import fire from "./firebase";
import Register from "./components/register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
const StartStack = createStackNavigator({
  Start: { screen: Start },
  Login: { screen: Login },
  Register: { screen: Register },
});

// const BottomNavi = createAppContainer(Bottom_navigation);

const temp = createStackNavigator({
  Before: { screen: StartStack },
  After: { screen: Bottom_navigation },
});

const Navi = createAppContainer(temp);
export default function App() {
  // //화면 이동
  // let content = <Start gotoPage={gotoPage} />;
  // if (page === "Login") content = <Login gotoPage={gotoPage} />;
  // else if (page === "Register") content = <Register gotoPage={gotoPage} />;

  // const notNaviPages = ["Start", "Login", "Register"];

  return (
    <View style={styles.container}>
      {/* {notNaviPages.includes(page) ? (
        content
      ) : (
        <NavigationContainer>
          <BottomNavi />
        </NavigationContainer>
      )} */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
