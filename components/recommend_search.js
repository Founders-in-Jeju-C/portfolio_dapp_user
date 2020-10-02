import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  Image,
} from "react-native";
import { Input, Label, Item, Textarea } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Recommend_search = ({ navigation }) => {
  const [companyName, setCompanyName] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.imageLine}>
        <Image source={require("../images/book_icon.png")} />
        <Text style={styles.header}> Folio Chain</Text>
      </View>
      <View style={styles.searchBox}>
        <TextInput
          value={companyName}
          onChangeText={(v) => setCompanyName(v)}
          placeholder="회사명을 입력해주세요"
          backgroundColor="white"
          style={{ height: 50, fontSize: 20, width: screenWidth - 50 }}
        />
        <Ionicons
          name="md-search"
          size={50}
          style={{ paddingLeft: 5 }}
          onPress={() => {
            alert("검색");
            setCompanyName("");
            setAnswer("삼성전자는 .....\n아아아아악입니다.\n");
          }}
        />
      </View>
      <View>
        <Text style={styles.messageHeader}>MESSAGE</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Textarea
          style={styles.messageBox}
          value={answer}
          disabled={true}
        ></Textarea>
        <View style={styles.logoStyle}>
          <View>
            <Ionicons name="logo-android" size={80} color={"#f1c40f"} />
          </View>
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
  searchBox: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    marginBottom: 50,
  },
  header: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  messageHeader: {
    color: "#f1c40f",
    fontWeight: "bold",
    fontSize: 30,
    width: 300,
    marginLeft: 20,
    textAlign: "center",
  },
  messageBox: {
    width: 300,
    height: 400,
    backgroundColor: "white",
    borderWidth: 2,
    marginLeft: 20,
    fontSize: 17,
  },
  logoStyle: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },
});
export default Recommend_search;
