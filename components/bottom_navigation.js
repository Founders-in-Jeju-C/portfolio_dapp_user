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
import Hiring from "./hiring";

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

const HiringStack = createStackNavigator({
  Hiring: {
    screen: Hiring,
    navigationOptions: { title: "채용 공고" },
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
    Hiring: {
      screen: HiringStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="md-clipboard"
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
