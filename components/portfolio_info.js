import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { Textarea } from "native-base";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Container } from "native-base";
import { Button } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
let infoLen;

const Portfolio_info = ({ navigation }) => {
  const [info, setInfo] = useState(navigation.state.params);
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#112f4c", height: screenHeight }}>
        <View style={styles.container}>
          <View style={styles.imageLine}>
            <Image source={require("../images/book_icon.png")} />
            <Text style={styles.header}> Folio Chain</Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={styles.messageHeader}>{info.type}</Text>

            <ScrollView>
              <View style={styles.messageBox}>
                {info.info.map((value, i) => {
                  return (
                    <View style={styles.infoBox}>
                      <Text style={styles.index}> {i + 1}. </Text>
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "space-around",
                        }}
                      >
                        <Text style={styles.name}>
                          {" "}
                          이름 : {value["name"]}{" "}
                        </Text>
                        <Text style={styles.value}>
                          {" "}
                          값 : {value["value"]}{" "}
                        </Text>
                        <Text style={styles.verify}>
                          {" "}
                          검증 : {value["verify"]}{" "}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: "60%",
    backgroundColor: "#112f4c",
  },
  imageLine: {
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
    marginBottom: 50,
    backgroundColor: "white",
  },
  header: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "#112f4c",
  },
  messageHeader: {
    color: "#112f4c",
    fontWeight: "bold",
    borderWidth: 0.5,
    borderColor: "white",
    fontSize: 30,
    width: screenWidth - 50,
    textAlign: "center",
    backgroundColor: "#f1c40f",
  },
  messageBox: {
    width: screenWidth - 50,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 2,
    fontSize: 17,
  },
  infoBox: {
    flexDirection: "row",
    borderBottomColor: "#112f4c",
    borderBottomWidth: 1,
    padding: 5,
  },
  index: {
    fontWeight: "bold",
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  value: {
    fontWeight: "bold",
    fontSize: 20,
  },
  verify: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Portfolio_info;
