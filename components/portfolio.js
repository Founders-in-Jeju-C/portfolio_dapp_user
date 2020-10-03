import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  List,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import sample from "../database/sample";
// import userCertification from '../build/contracts/UserCertification.json';
// import getWeb3 from './utils/getWeb3';
import Issuer from "./issuer";
import { Button } from "native-base";
import {
  MaterialCommunityIcons,
  Feather,
  Entypo,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const database = "https://react-dapp.firebaseio.com";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const head = ["학력", "자격증", "수상내역", "대외활동", "기타"];

const Portfolio = ({ ids }) => {
  let getData = { ...sample };
  const data = getData.data;
  let [currentData, setCurrentData] = useState(data);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    setCurrentData(data);
  }, data);

  const onKeyPress = () => {
    const tempData = data.filter((v) => v["name"].includes(searchWord));
    if (tempData.length === 0) {
      alert("검색 결과가 없습니다. 다시 입력해주세요");
      setCurrentData(data);
    } else setCurrentData(tempData);
    setSearchWord("");
  };

  componentDidMount = () => {
    fetch(`${database}/address.json`)
      .then((res) => {
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((user) => {
        this.setState({
          data: getData.data,
        });
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageLine}>
        <Image source={require("../images/book_icon.png")} />
        <Text style={styles.header}> Folio Chain</Text>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={styles.userText}>님</Text>
        <Button>
          <Text>추가하기</Text>
        </Button>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginBottom: "7%",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="검색어 입력란"
            value={searchWord}
            onChangeText={(value) => setSearchWord(value)}
          />
          <Button style={styles.searchBtn} onPress={onKeyPress}>
            <Entypo
              name="magnifying-glass"
              size={25}
              color="#f1c40f"
              style={{ padding: 10 }}
            />
          </Button>
        </View>
      </View>

      <View
        style={{
          width: "90%",
          height: "77%",
          backgroundColor: "#112f4c",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 0.5,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>학력</Text>
          <AntDesign name="right" size={24} color="white" />
        </View>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 0.5,
            width: "100%",
            height: "54%",
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={styles.title}>자격증</Text>
            <AntDesign
              name="right"
              size={24}
              color="white"
              style={{ alignSelf: "center" }}
            />
          </View>
          {data.map((v) => {
            if (v["name"] != "" && v["name"] != null) {
              return (
                <View
                  style={{
                    width: "100%",
                    height: "11%",
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "#112f4c",
                  }}
                >
                  <Text
                    style={{ marginLeft: "10%", fontSize: 20, color: "white" }}
                  >
                    <FontAwesome name="circle" size={8} color="white" />{" "}
                    {v["name"]}
                  </Text>
                  <Text style={{ fontSize: 20, color: "white" }}>
                    {" "}
                    {v["verify"]}
                  </Text>
                </View>
              );
            }
          })}
        </View>

        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 0.5,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>수상내역</Text>
          <AntDesign name="right" size={24} color="white" />
        </View>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 0.5,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>대외활동</Text>
          <AntDesign name="right" size={24} color="white" />
        </View>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 0.5,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>기타</Text>
          <AntDesign name="right" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  imageLine: {
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: 30,
  },
  header: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "#112f4c",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: "5%",
    marginLeft: "3%",
    marginTop: "3%",
  },
  userText: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: "3%",
    marginTop: 20,
  },
  small_container: { color: "white", backgroundColor: "white" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  textheader: { margin: 6, textAlign: "center", fontWeight: "bold" },
  text: { margin: 6, textAlign: "left" },
  input: { height: 35, width: 280, borderWidth: 1 },
  searchBtn: {
    borderWidth: 0.5,
    width: 45,
    height: 35,
    backgroundColor: "#112f4c",
    fontWeight: "bold",
    borderColor: "gray",
  },
});

export default Portfolio;
