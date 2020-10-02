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
import Portfolio from './components/portfolio';
import Enroll from './components/portfolio_enrollment';
import Company_main from './components/company_main';

const BottomNavi = createAppContainer(Bottom_navigation);
export default function App() {
  const [page, setPage] = useState("Start");
  const [props, setProps] = useState({});

  const gotoPage = (page, props) => {
    setPage(page);
    setProps(props);
  };

  //화면 이동
  let content = <Start gotoPage={gotoPage} />;
  if (page === "Login") content = <Login gotoPage={gotoPage} />;
  else if (page === "Register") content = <Register gotoPage={gotoPage} />;
  else if (page === "Portfolio") {
    content = <Portfolio gotoPage={gotoPage} />;
    return (
      <NavigationContainer>
        <BottomNavi />
      </NavigationContainer>
    )
  }
  else if (page === "Portfolio_Enroll") content = <Enroll gotoPage={gotoPage} />
  else if (page === "Company_main") content = <Company_main gotoPage={gotoPage} />
  else {
  }

  const notNaviPages = ["Start", "Login", "Register", "Portfolio", "Portfolio_Enroll", "Company_main"];

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