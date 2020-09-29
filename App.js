import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Start from "./components/start";
import Login from "./components/login";
import Bottom_navigation from "./components/bottom_navigation";
import fire from "./firebase";
import Portfolio from "./components/portfolio";
import Register from "./components/register";
import Recommend from "./components/recommend";
import { NavigationContainer } from "@react-navigation/native";
import Issuer from "./components/issuer";
import Portfolio_enrollment from "./components/portfolio_enrollment";
import Community from "./components/community";
import Recommend_result from "./components/recommend_result";
import { AppContainer } from "react-native-stack";
import Ionicons from "@expo/vector-icons";

// const AllPageStack = createStackNavigator({
//   Community: { screen: Community },
//   Portfolio: { screen: Portfolio },
//   Portfolio_enrollment: { screen: Portfolio_enrollment },
//   Recommend: { screen: Recommend },
//   Recommend_result: { screen: Recommend_result },
// });
// const AllPageStackScreen = () => {
//   return (
//     <AllPageStack.Navigator>
//       <AllPageStack.Screen name="Community" component={Community} />
//       <AllPageStack.Screen name="Portfolio" component={Portfolio} />
//       <AllPageStack.Screen
//         name="Portfolio_enrollment"
//         component={Portfolio_enrollment}
//       />
//       <AllPageStack.Screen name="Recommend" component={Recommend} />
//       <AllPageStack.Screen
//         name="Recommend_result"
//         component={Recommend_result}
//       />
//     </AllPageStack.Navigator>
//   );
// };
// const CommunityStack = createStackNavigator();
// const CommunityStackScreen = () => {
//   return (
//     <CommunityStack.Navigator>
//       <CommunityStack.Screen name="Community" component={Community} />
//     </CommunityStack.Navigator>
//   );
// };
// const PortfolioStack = createStackNavigator();
// const PortfolioStackScreen = () => {
//   return (
//     <PortfolioStack.Navigator>
//       <PortfolioStack.Screen name = "Portfolio" component = {Portfolio} />
//       <PortfolioStack.Screen name = "Portfolio_enrollment" component = {Portfolio_enrollment} />
//     </PortfolioStack.Navigator>
//   )
// }
// const RecommendStack = createStackNavigator({
//   Recommend: { screen: Recommend },
//   Recommend_result: { screen: Recommend_result },
// });
// const RecommendStackScreen = () => {
//   return (
//     <RecommendStack.Navigator>
//       <RecommendStack.Screen name = "Recommend" component = {Recommend} />
//       <RecommendStack.Screen name = "Recommend_result" component = {Recommend_result} />
//     </RecommendStack.Navigator>
//   )
// }
// const CommunityStack = createStackNavigator({
//   Community: { screen: Community },
// });
// const CommunityStackScreen = () => {
//   return (
//     <CommunityStack.Navigator>
//       <CommunityStack.screen name="Community" component={Community} />
//     </CommunityStack.Navigator>
//   );
// // };
// const PortfolioStack = createStackNavigator({
//   Portfolio: { screen: Portfolio },
//   Portfolio_enrollment: { screen: Portfolio_enrollment },
// });
// const RecommendStack = createStackNavigator();
// const RecommendStackScreen = () => {
//   return (
//     <RecommendStack.Navigator>
//       <RecommendStack.screen name="Recommend" component={Recommend} />
//       <RecommendStack.screen
//         name="Recommend_result"
//         component={Recommend_result}
//       />
//     </RecommendStack.Navigator>
//   );
// };

// const Tab = createBottomTabNavigator({
//   Portfolio: { screen: PortfolioStack },
//   Community: { screen: CommunityStack },
//   Recommend: { screen: RecommendStack },
// });

// const Bottom_navigation = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       // screenOption={({ route }) => {
//       //   tabBarIcon: ({ tintColor }) => {
//       //     let iconName;
//       //     if (route.name === "Portfolio") {
//       //       iconName = "md-finger-print";
//       //     } else if (route.name === "Communtiy") {
//       //       iconName = "md-people";
//       //     } else if (route.name === "Recommend") {
//       //       iconName = "logo-android";
//       //     }
//       //     return <Ionicons name={iconName} size={25} style={tintColor} />;
//       //   };
//       // }}
//       >
//         <Tab.Screen name="Portfolio" component={AllPageStack} />
//         <Tab.Screen name="Community" component={AllPageStack} />
//         <Tab.Screen name="Recommend" component={AllPageStack} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
// const BottomNavi = createAppContainer(Bottom_navigation);
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
  else {
  }

  const notNaviPages = ["Start", "Login", "Register"];

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
