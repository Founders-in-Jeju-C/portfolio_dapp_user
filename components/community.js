import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Container } from "native-base";
import { Button } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Community = () => {
  let tempData = [
    {
      user_id: "z56sd1f5afz",
      image: require("../images/ai_bot.png"),
      date: "2020.10.01",
      title: "이게 뭔가요?",
      content: "?????????????????",
      like: "3",
    },
    {
      user_id: "z7978wq4er6z",
      image: require("../images/book.png"),
      date: "2020.10.11",
      title: "아 진짜 빡치네요",
      content: "2!!!!!!!!",
      like: "36580640",
    },
    {
      user_id: "zzxc2313zvcz",
      image: require("../images/chatbot.png"),
      date: "2020.09.10",
      title: "너무 졸립니다.",
      content:
        "2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe2dasjfnjqwkernqjwlernlqkwe",
      like: "3",
    },
    {
      user_id: "zzzvawqez",
      image: require("../images/cardnews.png"),
      date: "2020.11.01",
      title: "상현님 주작하지마세요",
      content: "상현님 주작하지마세요",
      like: "99999999999999999",
    },
    {
      user_id: "z7978wq4er6z",
      image: require("../images/AI.png"),
      date: "2020.10.11",
      title: "상현님 주작하지마세요",
      content: "상현님 주작하지마세요",
      like: "3",
    },
    {
      user_id: "zzxc2313zvcz",
      image: require("../images/me.png"),
      date: "2020.09.10",
      title: "상현님 주작하지마세요",
      content: "상현님 주작하지마세요",
      like: "5",
    },
    {
      user_id: "zzxc2313zvcz",
      image: require("../images/ai_search.png"),
      date: "2020.09.10",
      title: "상현님 주작하지마세요",
      content: "상현님 주작하지마세요",
      like: "5",
    },
  ];
  tempData.sort((a, b) => (a.date > b.date ? -1 : 1));
  // const [communityData, setCommunityData] = useState(
  //   tempData.slice().sort((a, b) => (a.date > b.date ? -1 : 1))
  // );
  // useEffect(() => {
  //   setCommunityData(tempData);
  // }, tempData);

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
        <ScrollView>
          <View style={{ marginBottom: 230, alignItems: "center" }}>
            {tempData.map((card, i) => {
              return (
                <View style={styles.cardContainer} key={i}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.userImage}>
                          <Ionicons name="md-person" size={30} color="black" />
                        </View>
                        <View style={styles.userId}>
                          <Text style={{ fontSize: 15 }}>{card.user_id}</Text>
                        </View>
                      </View>
                      <View style={styles.date}>
                        <Text style={{ fontSize: 15 }}>{card.date}</Text>
                      </View>
                    </View>
                    <View
                      style={{ flexDirection: "column", paddingBottom: 10 }}
                    >
                      <View style={{ alignSelf: "center" }}>
                        <View style={{ height: 350, color: "red" }}>
                          <Image
                            style={{ height: 345, resizeMode: "contain" }}
                            source={card.image}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.title}>
                      <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                        {card.title}
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <Text style={{ fontSize: 15 }}>{card.content}</Text>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10 }}>
                      <Ionicons name="md-heart" size={15} color="red" />
                      <Text style={{ paddingLeft: 3 }}>{card.like}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    backgroundColor: "#112f4c",
  },
  header: {
    paddingBottom: 30,
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
  cardContainer: {
    alignContent: "center",
    backgroundColor: "white",
    width: screenWidth,
    paddingBottom: 40,
  },
  userImage: {
    fontSize: 40,
    padding: 10,
  },
  userId: {
    fontSize: 20,
    padding: 10,
  },
  date: {
    fontSize: 20,
    padding: 10,
  },
  title: {
    paddingLeft: 20,
  },
  content: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  like: {
    paddingLeft: 10,
  },
  boradName: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    paddingLeft: "5%",
    color: "#f1c40f",
    marginTop: "3%",
    marginBottom: "3%",
  },
});

export default Community;
