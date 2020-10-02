import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Input } from "native-base";
import Recommend_result from "./recommend_result";

const url = 'http://svc.saltlux.ai:31781';
const header = { 'Content-Type': 'application/json;' }

class Recommend extends React.Component {

  state = {
    a: 'a다',
    result: '',
    search: '',
    answer: 'ddd'
  }
  search = () => {

    return fetch('http://svc.saltlux.ai:31781', {
      headers: { 'Content-Type': 'application/json;' },
      method: 'POST',
      body: JSON.stringify({
        "key": "eeb05e5c-5bf7-4e9e-a923-4c40b89a537b",
        "serviceId": "01880175149",
        "argument": {
          "question": "대한민국의 수도는?"
        }
      })
    }).then(response => {
      this.setState({ result: JSON.stringify(response.answer) });
    }).catch(function (error) {
      alert('안됨');
    });

    //
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.a}</Text>
        <Input
          value={this.state.search}
          onChangeText={(search) => {
            this.setState({ search: search })
          }
          } />
        <Text>{this.state.result}</Text>
        <Button title='클릭' onPress={this.search} />
        <Button onPress={() => this.props.navigation.navigate('Second')}
          title='recommend' />
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