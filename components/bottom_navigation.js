import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "@react-navigation/compat";
import Community from "./community";
import Portfolio from "./portfolio";
import Recommend from "./recommend";
import { Ionicons } from "@expo/vector-icons";
import Recommend_result from "./recommend_result";
import Portfolio_enrollment from "./portfolio_enrollment";
import Issuer from "./issuer";
import { NavigationContainer } from "@react-navigation/native";

const CommunityStack = createStackNavigator({
  Community: { screen: Community },
});

const PortfolioStack = createStackNavigator({
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      title: "포트폴리오",
    },
  },
  Portfolio_enrollment: {
    screen: Portfolio_enrollment,
    navigationOptions: {
      title: "등록",
    },
  },
});

const RecommendStack = createStackNavigator({
  Recommend: {
    screen: Recommend,
    navigationOptions: {
      title: "추천",
    },
  },
  Recommend_result: {
    screen: Recommend_result,
    navigationOptions: {
      title: "결과",
    },
  },
});

const Bottom_navigation = createBottomTabNavigator(
  {
    Community: {
      screen: CommunityStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-people" size={25} style={{ color: tintColor }} />
        ),
      },
    },
    Portfolio: {
      screen: PortfolioStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="md-finger-print"
            size={25}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Recommend: {
      screen: RecommendStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="logo-android"
            size={25}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Portfolio",
  }
);

export default Bottom_navigation;

// export default Bottom_navigation;
// const AllPageStack = createStackNavigator();
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
//       <PortfolioStack.Screen name="Portfolio" component={Portfolio} />
//       <PortfolioStack.Screen
//         name="Portfolio_enrollment"
//         component={Portfolio_enrollment}
//       />
//     </PortfolioStack.Navigator>
//   );
// };
// const RecommendStack = createStackNavigator();
// const RecommendStackScreen = () => {
//   return (
//     <RecommendStack.Navigator>
//       <RecommendStack.Screen name="Recommend" component={Recommend} />
//       <RecommendStack.Screen
//         name="Recommend_result"
//         component={Recommend_result}
//       />
//     </RecommendStack.Navigator>
//   );
// };

// const Tab = createBottomTabNavigator();

// const Bottom_navigation = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
// screenOption={({ route }) => {
//   tabBarIcon: ({ tintColor }) => {
//     let iconName;
//     if (route.name === "Portfolio") {
//       iconName = "md-finger-print";
//     } else if (route.name === "Communtiy") {
//       iconName = "md-people";
//     } else if (route.name === "Recommend") {
//       iconName = "logo-android";
//     }
//     return <Ionicons name={iconName} size={25} style={tintColor} />;
//   };
// }}
//       >
//         <Tab.Screen name="Portfolio" component={PortfolioStackScreen} />
//         <Tab.Screen name="Community" component={CommunityStackScreen} />
//         <Tab.Screen name="Recommend" component={RecommendStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Bottom_navigation;

// // ~!!!! 되는 부분 ~!~!~!!~!
// const RecommendNavigator = createSwitchNavigator({
//   First: { screen: Recommend },
//   Second: { screen: Recommend_result },
// });

// const Bottom_navigation = createBottomTabNavigator({
//   Community: {
//     screen: Community,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons name="md-people" size={25} style={{ color: tintColor }} />
//       ),
//     },
//   },
//   Portfolio: {
// screen: Portfolio,
// navigationOptions: {
//   tabBarIcon: ({ tintColor }) => (
//     <Ionicons
//       name="md-finger-print"
//       size={25}
//       style={{ color: tintColor }}
//     />
//   ),
// },
//   },
//   Recommend: {
//     screen: RecommendNavigator,
// navigationOptions: {
//   tabBarIcon: ({ tintColor }) => (
//     <Ionicons name="logo-android" size={25} style={{ color: tintColor }} />
//   ),
// },
//   },
//   // // for test
//   // Issuer: {
//   //   screen: Issuer,
//   //   navigationOptions: {
//   //     tabBarIcon: ({ tintColor }) => (
//   //       <Ionicons name="md-people" size={25} style={{ color: tintColor }} />
//   //     ),
//   //   },
//   // },
// });
// export default Bottom_navigation;

// const Bottom_navigation = createBottomTabNavigator({
//   Community: {
//     screen: Community,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons name="md-people" size={25} style={{ color: tintColor }} />
//       ),
//     },
//   },
//   Portfolio: {
//     screen: Portfolio,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons
//           name="md-finger-print"
//           size={25}
//           style={{ color: tintColor }}
//         />
//       ),
//     },
//   },
//   Recommend: {
//     screen: Recommend,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons name="logo-android" size={25} style={{ color: tintColor }} />
//       ),
//     },
//   },
// });

// export default Bottom_navigation;
// const Tab = createBottomTabNavigator();

// const CommunityStackScreen = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Community" component={Community} />
//     </Tab.Navigator>
//   );
// };

// const PortfolioStackScreen = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Portfolio" component={Portfolio} />
//       <Tab.Screen
//         name="Portfolio_enrollment"
//         component={Portfolio_enrollment}
//       />
//     </Tab.Navigator>
//   );
// };

// const RecommendStackScreen = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Recommend" component={Recommend} />
//       <Tab.Screen name="Recommend_result" component={Recommend_result} />
//     </Tab.Navigator>
//   );
// };

// export default Bottom_navigation = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Portfolio" component={PortfolioStackScreen} />
//       <Stack.Screen name="Community" component={CommunityStackScreen} />
//       <Stack.Screen name="Recommend" component={RecommendStackScreen} />
//     </Stack.Navigator>
//   );
// };
