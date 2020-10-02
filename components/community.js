import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Button } from "native-base";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Community = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.imageLine}>
          <Image source={require("../images/book_icon.png")} />
          <Text style={styles.header}> Folio Chain</Text>
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
  button: {
    width: screenWidth - 80,
    height: screenHeight - 600,
    marginVertical: 30,
    alignSelf: "center",
    backgroundColor: "#f1c40f",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#112f4c",
  },
});

export default Community;
