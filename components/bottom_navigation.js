import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "@react-navigation/compat";
import Community from "./community";
import Community_pass from "./community_pass";
import Community_free from "./community_free";
import Portfolio from "./portfolio";
import Recommend from "./recommend";
import Recommend_search from "./recommend_search";
import Recommend_chatbot from "./recommend_chatbot";
import { Ionicons } from "@expo/vector-icons";
import Recommend_result from "./recommend_result";
import Portfolio_enrollment from "./portfolio_enrollment";
import Issuer from "./issuer";
import { NavigationContainer } from "@react-navigation/native";
import Hiring from "./hiring";

const CommunityStack = createStackNavigator({
  Community: { screen: Community, navigationOptions: { headerShown: false } },
  Community_pass: {
    screen: Community_pass,
    navigationOptions: { headerShown: false },
  },
  Community_free: {
    screen: Community_free,
    navigationOptions: { headerShown: false },
  },
});

const PortfolioStack = createStackNavigator({
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      title: "포트폴리오",
      headerShown: false,
    },
  },
  Portfolio_enrollment: {
    screen: Portfolio_enrollment,
    navigationOptions: {
      title: "등록",
      headerShown: false,
    },
  },
});

const RecommendStack = createStackNavigator({
  Recommend: {
    screen: Recommend,
    navigationOptions: {
      title: "추천",
      headerShown: false,
    },
  },
  Recommend_search: {
    screen: Recommend_search,
    navigationOptions: {
      title: "검색",
      headerShown: false,
    },
  },
  Recommend_chatbot: {
    screen: Recommend_chatbot,
    navigationOptions: {
      title: "검색",
      headerShown: false,
    },
  },
});

const HiringStack = createStackNavigator({
  Hiring: {
    screen: Hiring,
    navigationOptions: { title: "채용 공고", headerShown: false },
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
