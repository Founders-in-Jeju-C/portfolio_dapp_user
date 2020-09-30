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
import Company from "./components/company";
import { NavigationContainer } from "@react-navigation/native";

const BottomNavi = createAppContainer(Bottom_navigation);
export default function App() {
  const [page, setPage] = useState("Start");

  const gotoPage = (page) => {
    setPage(page);
  };

  //화면 이동
  let content = <Start gotoPage={gotoPage} />;
  if (page === "Login") content = <Login gotoPage={gotoPage} />;
  else if (page === "Register") content = <Register gotoPage={gotoPage} />;
  else if (page === "Company") content = <Company gotoPage={gotoPage} />;

  const notNaviPages = ["Start", "Login", "Register", "Company"];

  return (
    <View style={styles.container}>
      {notNaviPages.includes(page) ? (
        content
      ) : (
        <NavigationContainer>
          <BottomNavi />
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
