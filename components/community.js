import React from "react";
import { StyleSheet, Text, View, Image, Input } from "react-native";

const Community = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Community</Text>
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

export default Community;
