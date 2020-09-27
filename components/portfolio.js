import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PortfolioBox from "./portfolioBox";
import sample from "../database/sample";

const Portfolio = () => {
  let getData = { ...sample };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../images/logo_renew_remove.png")} />
        <Text style={styles.userText}>" {getData.user} " 님</Text>
      </View>
      <PortfolioBox data={getData.data} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#025880",
  },
  container: {
    paddingTop: 30,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  userText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Portfolio;
