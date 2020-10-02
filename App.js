import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { View, StyleSheet, Text } from "react-native";
import Start_navigation from "./components/start_navigation";
import Bottom_navigation from "./components/bottom_navigation";
import fire from "./firebase";
<<<<<<< HEAD
import Register from "./components/register";
import { NavigationContainer } from "@react-navigation/native";
import Portfolio from './components/portfolio';
import Enroll from './components/portfolio_enrollment';
import Company_main from "./components/company_main";

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
  else if (page === "Company_main") content = <Company_main gotoPage={gotoPage} />;
  else if (page === "Portfolio") {
    content = <Portfolio gotoPage={gotoPage} ids={props.ids} />;
    return (
      <NavigationContainer>
        <BottomNavi />
      </NavigationContainer>
    )
  }
  else if (page === "Portfolio_Enroll") content = <Enroll gotoPage={gotoPage} />
  else {
  }

  const notNaviPages = ["Start", "Login", "Register", "Portfolio", "Portfolio_Enroll", "Company_main"];
=======
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
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6

const Navi = createAppContainer(temp);
export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      {notNaviPages.includes(page) ? (
        content
      ) : (
          <NavigationContainer>
            <BottomNavi />
          </NavigationContainer>
        )}
    </View>
=======
    <NavigationContainer>
      <Navi />
    </NavigationContainer>
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
  );
}
