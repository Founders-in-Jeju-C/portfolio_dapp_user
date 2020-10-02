import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PortfolioBox from "./portfolioBox";
import sample from "../database/sample";
import { Button } from "native-base";

const Portfolio = ({ navigation }) => {
  const [getData, setData] = useState(sample);
  useEffect(() => {
    setData(sample);
  }, sample.data);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../images/logo_renew_remove.png")} />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.userText}>" {getData.user} " 님</Text>
          <Button
            style={{ backgroundColor: "grey" }}
            onPress={() => navigation.navigate("Portfolio_enrollment", getData)}
          >
            <Text style={{ fontWeight: "bold" }}> 추가 </Text>
          </Button>
        </View>
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
