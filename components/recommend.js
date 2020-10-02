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
      <View style={{ alignItems: "center", paddingBottom: 50 }}>
        <Text style={styles._header}>안녕하세요 !</Text>
        <Image source={require("../images/AI.png")} />
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", paddingLeft: 50 }}
          onPress={() => {
            navigation.navigate("Recommend_search");
          }}
        >
          <Ionicons name="md-search" size={50} color="#f1c40f" />
          <Text style={styles.text}> 관심 기업 검색하기</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ paddingBottom: 30 }}></Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", paddingLeft: 50 }}
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
    paddingBottom: 20,
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
