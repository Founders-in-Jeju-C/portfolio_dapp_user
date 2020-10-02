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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Recommend = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: "5%",
        }}
      >
        <Feather name="menu" size={27} color="black" />
        <Text style={{ letterSpacing: 1, fontSize: 20, fontWeight: "900" }}>
          FOLIO CHAIN
        </Text>
        <MaterialCommunityIcons name="bell" size={27} color="black" />
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
          <Ionicons name="md-search" size={50} color="#112f4c" />
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
          <Ionicons name="md-chatbubbles" size={50} color="#112f4c" />
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
    backgroundColor: "white",
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
    color: "#112f4c",
    textAlign: "center",
    paddingBottom: 20,
  },
  text: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "#112f4c",
    paddingLeft: 15,
  },
});

export default Recommend;
