import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Community(props) {
  return (
    <View style={styles.container}>
      <Text> Community </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
