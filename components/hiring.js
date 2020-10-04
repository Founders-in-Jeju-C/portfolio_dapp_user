import { Button } from "native-base";
import React, { createRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Hiring = () => {
  const [hiringData, setHiringData] = useState([
    {
      title: "SAMSUNG",
      content: "삼성전자 2020 신입사원 채용",
    },
    {
      title: "LG",
      content: "LG CNS 공개 채용",
    },
    {
      title: "NAVER",
      content: "네이버웹툰 2020 하반기 채용",
    },
    {
      title: "한국전력공사",
      content: "한국전력공사 2020 하반기 신입직원 채용",
    },
    {
      title: "많다",
      content: "넣으세요",
    },
    {
      title: "많다",
      content: "넣으세요",
    },
    {
      title: "많다",
      content: "넣으세요",
      date: "2020-10-15",
      isOpend: false,
    },
    {
      title: "많다",
      content: "넣으세요",
    },
    {
      title: "많다",
      content: "넣으세요",
    },
    {
      title: "하겠다",
      content: "넣으세요",
    },
    {
      title: "하겠다",
      content: "넣으세요",
    },

    {
      title: "하겠다",
      content: "넣으세요",
    },
    {
      title: "못",
      content: "넣으세요",
    },
    {
      title: "하겠다",
      content: "넣으세요",
    },
    {
      title: "하겠다",
      content: "넣으세요",
    },
    {
      title: "하겠다",
      content: "넣으세요",
    },
  ]);
  const data = hiringData.slice();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.bookIcon}
          source={require("../images/book_icon2.png")}
        />
        <Text style={styles.logoText}>Folio Chain</Text>
      </View>
    <ScrollView >
    <View>
          <View style={styles.card}>
            {data.map((value, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{
                    borderWidth: 1,
                    backgroundColor: "#112f4c",
                    paddingBottom: 40,
                    marginBottom: 20,
                  }}
                  onPress={() => {
                    alert(`${i + 1}번째 공고에 지원합니다.(test)`);
                  }}
                >
                  <View>
                    <Text style={styles.title}>{value.title}</Text>
                    <Text style={styles.content}>{value.content}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "white",
  },
  header: {
    //flex: 1,
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
    marginBottom:"5.8%",
  },
  card: {
    width: "93%",
    alignSelf: "center",
  },
  title: {
    fontSize: 40,
    color: "#f1c40f",
    fontWeight: "bold",
    paddingTop:"3%",
    paddingBottom: "10%",
    paddingLeft:"3%",
  },
  content: {
    fontSize: 20,
    color: "#f1c40f",
    paddingLeft:"3%",
  },
});

export default Hiring;
