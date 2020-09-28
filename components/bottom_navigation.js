import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createSwitchNavigator } from '@react-navigation/compat';
import Community from "./community";
import Portfolio from "./portfolio";
import Recommend from "./recommend";
import { Ionicons } from "@expo/vector-icons";
import Recommend_result from "./recommend_result";
import Issuer from "./issuer";

const RecommendNavigator = createSwitchNavigator({
    First: {screen: Recommend}, 
    Second: {screen: Recommend_result}
});

const Bottom_navigation = createBottomTabNavigator({
  Community: {
    screen: Community,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-people" size={25} style={{ color: tintColor }} />
      ),
    },
  },
  Portfolio: {
    screen: Portfolio,
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
    screen: RecommendNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="logo-android" size={25} style={{ color: tintColor }} />
      ),
    },
  },
  // for test
  Issuer: {
    screen: Issuer,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-people" size={25} style={{ color: tintColor }} />
      ),
    },
  },
});

export default Bottom_navigation;
