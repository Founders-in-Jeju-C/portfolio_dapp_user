import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Community from "./community";
import Community_pass from "./community_pass";
import Community_free from "./community_free";
import Portfolio from "./portfolio";
import Portfolio_enrollment from "./portfolio_enrollment";
import Hiring from "./hiring";
import Recommend from "./recommend";
import Recommend_search from "./recommend_search";
import Recommend_chatbot from "./recommend_chatbot";
import { Ionicons } from "@expo/vector-icons";
import Issuer from "./issuer";

const CommunityStack = createStackNavigator({
  Community: {
    screen: Community,
    navigationOptions: { title: "커뮤니티", headerShown: false },
  },
  Community_pass: {
    screen: Community_pass,
    navigationOptions: { title: "합격게시판", headerShown: false },
  },
  Community_free: {
    screen: Community_free,
    navigationOptions: { title: "자유게시판", headerShown: false },
  },
});

const PortfolioStack = createStackNavigator({
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
<<<<<<< HEAD
      title: "포트폴리오", headerShown: false
=======
      title: "포트폴리오",
      headerShown: false,
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
    },
  },
  Portfolio_enrollment: {
    screen: Portfolio_enrollment,
    navigationOptions: {
<<<<<<< HEAD
      title: "등록", headerShown: false
=======
      title: "등록",
      headerShown: false,
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
    },
  },
});

const RecommendStack = createStackNavigator({
  Recommend: {
    screen: Recommend,
    navigationOptions: {
<<<<<<< HEAD
      title: "추천", headerShown: false
=======
      title: "추천",
      headerShown: false,
    },
  },
  Recommend_search: {
    screen: Recommend_search,
    navigationOptions: {
      title: "검색",
      headerShown: false,
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
    },
  },
  Recommend_chatbot: {
    screen: Recommend_chatbot,
    navigationOptions: {
<<<<<<< HEAD
      title: "결과", headerShown: false
=======
      title: "챗봇",
      headerShown: false,
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
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
