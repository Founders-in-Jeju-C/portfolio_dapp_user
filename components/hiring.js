import { Button } from "native-base";
import React, { createRef, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const Hiring = () => {
  const [hiringData, setHiringData] = useState([
    {
      title: "삼성 전자 공채",
      content: "넣으세요",
      date: "2020-09-30",
      isOpend: true,
    },
    {
      title: "LG CNS 공채",
      content: "넣으세요",
      date: "2020-10-12",
      isOpend: true,
    },
    {
      title: "아",
      content: "넣으세요",
      date: "2020-10-13",
      isOpend: true,
    },
    {
      title: "너무",
      content: "넣으세요",
      date: "2020-10-14",
      isOpend: true,
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
      date: "2020-10-15",
      isOpend: false,
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
      date: "2020-10-15",
      isOpend: false,
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
      date: "2020-10-15",
      isOpend: false,
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
      date: "2020-10-15",
      isOpend: false,
    },
    {
      title: "못",
      content: "넣으세요",
      date: "2020-10-16",
      isOpend: true,
    },
    {
      title: "하겠다",
      content: "넣으세요",
      date: "2020-10-17",
      isOpend: true,
    },
    {
      title: "하겠다",
      content: "넣으세요",
      date: "2020-10-17",
      isOpend: true,
    },

    {
      title: "하겠다",
      content: "넣으세요",
      date: "2020-10-17",
      isOpend: true,
    },
    {
      title: "못",
      content: "넣으세요",
      date: "2020-10-16",
      isOpend: true,
    },
    {
      title: "하겠다",
      content: "넣으세요",
      date: "2020-10-17",
      isOpend: true,
    },
    {
      title: "하겠다",
      content: "넣으세요",
      date: "2020-10-17",
      isOpend: true,
    },
    {
      title: "하겠다",
      content: "넣으세요",
      date: "2020-10-17",
      isOpend: true,
    },
  ]);
  const data = hiringData.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.bookIcon} source={require("../images/book_icon2.png")} />
        <Text style={styles.logoText}>Folio Chain</Text>
        <Image style={styles.listIcon} source={require("../images/list_icon.png")} />
        </View>
          <View style={{ backgroundColor: '#112f4c', flexDirection: "row" }} >
          <Text style={styles.item1}>
            채용
          </Text>
          </View>
      <ScrollView style={styles.notificationList}>
        {data.map((value) => {
          return (
            <View style={styles.notificationBox}>
              <View>
                <Text style={{fontSize: 18}}>제목 : '{value.title}'</Text>
                <Text style={{fontSize: 18}}>본문 : '{value.content}'</Text>
                </View>
              {value.isOpend ? (
                <Button style={styles.button1}>
                  <Text style={{fontWeight: "bold"}}> 지원 하기 </Text>
                </Button>) 
                : ( <Button style={styles.button2}>
                    <Text> 마감 </Text>
                  </Button> )
                }
                </View>)})}
    </ScrollView>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 0.2,
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
  listIcon: {
    marginLeft: "25%",
    marginTop: "10%",
    width: "20%",
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
  notificationBox: {
    padding: "5%",
    marginTop: "5%",
    marginBottom: "2%",
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  username: {
    color: "black",
    fontSize: 17,
    alignSelf: 'center',
    marginLeft: "5%"
  },
  item1: {
    marginTop: "5%",
    marginBottom: "1%",
    marginLeft: "6%",
    fontSize: 25,
    fontWeight: "bold",
    color: 'rgb(241, 196, 15)',
  },
  notificationList: {
    flex: 10,
    paddingRight: "5%",
    paddingLeft: "5%",
    backgroundColor: '#112f4c',
    
  },
  button1: {
    marginTop: "10%",
    backgroundColor: "rgb(241, 196, 15)",
    padding: "5%",
  },
  button2: {
    marginTop: "10%",
    backgroundColor: "#F2F2F2",
    padding: "5%",
  }
})

export default Hiring;

