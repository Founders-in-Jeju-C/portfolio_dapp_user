import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Community from "./community";
import Portfolio from "./portfolio";

const Bottom_navigation = createBottomTabNavigator({
  Community: {
    screen: Community,
  },
  Portfolio: {
    screen: Portfolio,
  },
});

export default Bottom_navigation;
