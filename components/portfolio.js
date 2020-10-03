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
  TouchableOpacity,
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
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const head = ["학력", "자격증", "수상내역", "대외활동", "기타"];

const Portfolio = ({ navigation, ids }) => {
  let getData = { ...sample };
  const data = [...getData.data];
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

  const onPressInfo = (value) => {
    const info = data.filter((v) => v.type === value);
    alert(`등록된 ${value} 정보를 확인합니다.`);
    navigation.navigate("Portfolio_info", { type: value, info: info });
  };

  // componentDidMount = () => {
  //   fetch(`${database}/address.json`)
  //     .then((res) => {
  //       if (res.status != 200) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((user) => {
  //       this.setState({
  //         data: getData.data,
  //       });
  //     });
  // };

  return (
    <View style={styles.container}>
      <View style={styles.imageLine}>
        <Image source={require("../images/book_icon.png")} />
        <Text style={styles.header}> Folio Chain</Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: "5%",
        }}
      >
        <Text style={styles.userText}>{getData.user} 님</Text>
        <Button style={styles.enrollmentBtn}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.enrollmentText}>등록</Text>
          </View>
        </Button>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginBottom: "10%",
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
              size={35}
              color="#112f4c"
              style={{ padding: "10%" }}
            />
          </Button>
        </View>
      </View>

      <View style={styles.bigbox}>
        {head.map((value, index) => {
          return (
            <TouchableOpacity
              key={value}
              onPress={() => {
                onPressInfo(value);
              }}
            >
              <View style={styles.smallbox}>
                <Text style={styles.title}>{value}</Text>
                <AntDesign name="right" size={24} color="white" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#112f4c",
    width: screenWidth,
    height: screenHeight,
  },
  imageLine: {
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: "7%",
    backgroundColor: "white",
    paddingBottom: 10,
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
    color: "white",
  },
  enrollmentBtn: {
    marginTop: "5%",
    width: 60,
    height: 40,
    backgroundColor: "#f1c40f",
  },
  enrollmentText: {
    color: "#112f4c",
    fontWeight: "bold",
    fontSize: 18,
  },
  bigbox: {
    borderColor: "white",
    borderWidth: 0.5,
    width: "90%",
    height: "43%",
    backgroundColor: "#112f4c",
    alignSelf: "center",
  },
  smallbox: {
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  small_container: { color: "white", backgroundColor: "white" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  textheader: { margin: 6, textAlign: "center", fontWeight: "bold" },
  text: { margin: 6, textAlign: "left" },
  input: {
    height: 50,
    width: 280,
    borderWidth: 1,
    backgroundColor: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchBtn: {
    borderWidth: 0.5,
    width: 50,
    height: 50,
    backgroundColor: "#f1c40f",
    fontWeight: "bold",
    borderColor: "gray",
  },
});

export default Portfolio;
