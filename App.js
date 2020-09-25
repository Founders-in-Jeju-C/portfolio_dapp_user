import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Start from "./components/start";
import Login from "./components/login";
import Community from "./components/community";
import Portfolio from "./components/portfolio";

const tempNavi = createBottomTabNavigator({
  Community: {
    screen: Community,
  },
  포트폴리오: {
    screen: Portfolio,
  },
});

const Navi = createAppContainer(tempNavi);

export default function App() {
  const [page, setPage] = useState("Start");

  const gotoPage = (page) => {
    setPage(page);
  };

  //화면 이동
  let content = <Start gotoPage={gotoPage} />;
  if (page === "Login") content = <Login gotoPage={gotoPage} />;

  const naviPages = ["Portfolio", "Community"];

  return (
    <View style={styles.container}>
      {!naviPages.includes(page) ? content : <Navi />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
