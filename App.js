import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { View, StyleSheet, Text } from "react-native";
import Start_navigation from "./components/start_navigation";
import Bottom_navigation from "./components/bottom_navigation";
import fire from "./firebase";
import Register from "./components/register";
import Company_main from "./components/company_main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";

// const temp = createStackNavigator(
//   {
//     Before: {
//       screen: Start_navigation,
//       navigationOptions: { headerShown: false },
//     },
//     After: {
//       screen: Bottom_navigation,
//       navigationOptions: { headerShown: false },
//     },
//   },
//   {
//     initialRouteName: "Before",
//   }
// );
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
  else if (page === "Company_main")
    content = <Company_main gotoPage={gotoPage} />;

  const notNaviPages = ["Start", "Login", "Register", "Company_main"];

  const Navi = createAppContainer(temp);

  export default function App() {
    return (
      <NavigationContainer>
        <Navi />
      </NavigationContainer>
    );
  }
}
