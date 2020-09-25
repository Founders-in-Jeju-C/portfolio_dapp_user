import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text> Portfolio </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Portfolio;
