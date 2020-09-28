import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Community from "./community";
import Portfolio from "./portfolio";
import Recommend from "./recommend";
import { Ionicons } from "@expo/vector-icons";
import Issuer from "./issuer";

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
    screen: Recommend,
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
