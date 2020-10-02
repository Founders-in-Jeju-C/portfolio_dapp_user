import { Button } from "native-base";
import React, { createRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";

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
    <ScrollView>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>
          Hiring Page
        </Text>
        {data.map((value) => {
          return (
            <View
              style={{
                borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>`제목 : {value.title}`</Text>
                <Text>`본문 : {value.content}`</Text>
              </View>
              <View>
                {value.isOpend ? (
                  <Button style={{ backgroundColor: "lightblue" }}>
                    <Text> 지원 </Text>
                  </Button>
                ) : (
                  <Button style={{ backgroundColor: "orange" }}>
                    <Text> 마감 </Text>
                  </Button>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Hiring;
