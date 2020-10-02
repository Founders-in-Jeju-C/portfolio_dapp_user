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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

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
    <ScrollView>
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
                {/* <View>
                  {value.isOpend ? (
                    <Button style={{ backgroundColor: "lightblue" }}>
                      <Text> 지원 </Text>
                    </Button>
                  ) : (
                    <Button style={{ backgroundColor: "orange" }}>
                      <Text> 마감 </Text>
                    </Button>
                  )}
                </View> */}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    backgroundColor: "white",
  },
  imageLine: {
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: 30,
    marginBottom: 20,
    paddingBottom: 10,
    backgroundColor: "#112f4c",
  },
  header: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    width: 380,
    alignSelf: "center",
  },
  title: {
    fontSize: 40,
    color: "#f1c40f",
    fontWeight: "bold",
    paddingBottom: 30,
  },
  content: {
    fontSize: 20,
    color: "#f1c40f",
  },
});

export default Hiring;
