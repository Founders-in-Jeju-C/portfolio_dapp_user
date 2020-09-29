import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Start from "./components/start";
import Login from "./components/login";
import Bottom_navigation from "./components/bottom_navigation";
import fire from "./firebase";
import Portfolio from "./components/portfolio";
import Register from "./components/register";
import Recommend_result from "./components/recommend_result";
import { NavigationContainer } from "@react-navigation/native";
import Issuer from "./components/issuer";


const Navi = createAppContainer(Bottom_navigation);

export default function App() {
  const [page, setPage] = useState("Start");

  const gotoPage = (page) => {
    setPage(page);
  };

  //화면 이동
  let content = <Start gotoPage={gotoPage} />;
  if (page === "Login") content = <Login gotoPage={gotoPage} />;
  else if (page == "Portfolio") content = <Portfolio gotoPage={gotoPage} />;
  else if (page === "Register") content = <Register gotoPage={gotoPage} />;
  else {
  }

  const notNaviPages = ["Start", "Login", "Register"];

  return (
    <View style={styles.container}>
      {notNaviPages.includes(page) ? content : <NavigationContainer><Navi /></NavigationContainer>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
