import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from "native-base";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Community = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
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
        <View>
          <Text style={styles.boradName}>커뮤니티</Text>
        </View>
        <View>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Community_pass")}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.buttonText}> 합격 게시판 </Text>
            </View>
          </Button>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Community_free")}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.buttonText}> 자유 게시판 </Text>
            </View>
          </Button>
        </View>
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
  boradName: {
    fontSize: 25,
    color: "#112f4c",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  header: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    width: screenWidth - 80,
    height: screenHeight - 600,
    marginVertical: 30,
    alignSelf: "center",
    backgroundColor: "#112f4c",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#f1c40f",
  },
});

export default Community;
