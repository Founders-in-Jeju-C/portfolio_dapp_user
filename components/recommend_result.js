import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Recommend_result extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Recommend_result </Text>
    </View>
  );
  }
}

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

export default Recommend_result;
