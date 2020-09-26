import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Recommend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Recommend </Text>
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
