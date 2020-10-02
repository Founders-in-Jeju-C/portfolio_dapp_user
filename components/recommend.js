import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Recommend_result from "./recommend_result";

const Recommend = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Recommend_result")}
        title="recommend"
      />
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Recommend;
