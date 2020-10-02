<<<<<<< HEAD
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

=======
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Recommend = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageLine}>
        <Image source={require("../images/book_icon.png")} />
        <Text style={styles.header}> Folio Chain</Text>
      </View>
      <View style={{ alignItems: "center", paddingBottom: "12%" }}>
        <Text style={styles._header}>안녕하세요 !</Text>
        <Image source={require("../images/AI.png")} />
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", paddingLeft: "12%" }}
          onPress={() => {
            navigation.navigate("Recommend_search");
          }}
        >
          <Ionicons name="md-search" size={50} color="#f1c40f" />
          <Text style={styles.text}> 관심 기업 검색하기</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ paddingBottom: "8%" }}></Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", paddingLeft: "12%" }}
          onPress={() => {
            navigation.navigate("Recommend_chatbot");
          }}
        >
          <Ionicons name="md-chatbubbles" size={50} color="#f1c40f" />
          <Text style={styles.text}> Chat bot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#112f4c",
  },
  imageLine: {
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 50,
  },
  header: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  _header: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingBottom: "8%",
  },
  text: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 15,
  },
});

export default Recommend;