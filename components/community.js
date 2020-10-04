import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Container } from "native-base";
import { Button } from "native-base";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Community = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.bookIcon}
          source={require("../images/book_icon2.png")}
        />
        <Text style={styles.logoText}>Folio Chain</Text>
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
  header: {
    flex: 0.235,
    flexDirection: "row",
    backgroundColor: "white",
  },
  bookIcon: {
    marginLeft: "4%",
    marginTop: "10%",
    width: "10%",
    height: "50%",
    resizeMode: "contain",
  },
  logoText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: "2%",
    marginTop: "11%",
    color: "#112f4c",
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
