import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity ,Button } from "react-native";
import Recommend_result from "./recommend_result";

class Recommend extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Button onPress={() => this.props.navigation.navigate('Second')}
             title = 'recommend' /> 
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

export default Recommend;