import { Container, Button, Form, Input, Label, Item, CheckBox } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import sample from "../database/sample";
import { withNavigation } from "react-navigation";
import {
  AntDesign,
} from "@expo/vector-icons";

const database = 'https://react-dapp.firebaseio.com';
const Portfolio_enrollment = (props) => {
  useEffect(() => {
    setEnrollData(enrollData);
  }, enrollData);
  // let datalist = props.navigation.state.params.data;
  const firstData = {
    name: "",
    from: "",
    value: "",
    verify: false,
  };

  const [enrollData, setEnrollData] = useState(firstData);

  const onChangeName = (e) => setEnrollData({ ...enrollData, name: e });
  const onChangeFrom = (e) => setEnrollData({ ...enrollData, from: e });
  const onChangeValue = (e) => setEnrollData({ ...enrollData, value: e });


  const _post = () => {
    return fetch(`${database}/address/approve.json`, {
      method: "POST",
      body: JSON.stringify(firstData),
    })
      .then((res) => {
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {

      });
  }


  const onClickEnrollment = () => {
    let element = ["name", "from", "value"];
    for (let i = 0; i < element.length; i++)
      if (enrollData[element[i]] === "") {
        alert("모두 입력해주세요");
        return;
      }
    if (!this.state.checked) {
      Alert.alert(
        "확인을 누르면 미검증 자격으로 남게 됩니다.",
        "계속 진행하시려면 확인을 눌러주세요. ",
        [
          {
            text: "확인",
            onPress: () => {
              setEnrollData({ ...enrollData, verify: "X" });
              _post();
              Alert.alert("", "등록 완료. 페이지를 이동합니다.", [
                {
                  text: "확인",
                  onPress: () => {
                    // datalist.push(enrollData);
                    // setEnrollData(firstData);
                    props.navigation.navigate("Portfolio", datalist);
                  },
                },
              ]);
            },
          },
          {
            text: "취소",
            onPress: () => {
              return;
            },
          },
        ]
      );
    } else {
      // datalist.push(enrollData);
      // setEnrollData(firstData);
      _post();
      Alert.alert("", "승인 요청 완료", [
        {
          text: "확인",
          onPress: () => props.navigation.navigate("Portfolio", datalist),
        },
      ]);
    }
  };
  return (
    <Container style={{ backgroundColor: '#112f4c' }}>
      {/* <Image source={require("../images/logo_renew_remove.png")} /> */}
      <View style={styles.header}>
        <Image style={styles.bookIcon}
          source={require('../images/book.png')} />
        <Text style={styles.logoText}>
          Folio Chain
        </Text>
        <AntDesign name="back" size={35} color="#f1c40f" style={{ marginTop: '14%', marginLeft: '37%' }} />
      </View>
      <View style={{ marginLeft: '3%', marginBottom: '1%', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>자격증 </Text>
        <Text style={{ color: "#f1c40f", fontWeight: 'bold', fontSize: 28 }}>추가</Text>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>하기</Text>
      </View>
      <Form style={{ height: 300 }}>
        <Input
          value={enrollData.name}
          autoCorrect={false}
          style={styles.input}
          placeholder='Name'
          onChangeText={onChangeName}
        />

        <Input
          value={enrollData.from}
          autoCorrect={false}
          style={styles.input}
          placeholder='Institution'
          onChangeText={onChangeFrom}
        />


        <Input
          value={enrollData.value}
          autoCorrect={false}
          style={styles.input}
          placeholder='Content'
          onChangeText={onChangeValue}
        />
      </Form>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#112f4c',
        marginTop: '10%',
        marginLeft: '5%'
      }}>

        <Text style={styles.text}>해당 </Text>
        <Text style={styles.text_effect}>기관</Text>
        <Text style={styles.text}>으로부터</Text>
        <Text style={styles.text_effect}> 인증 </Text>
        <Text style={styles.text}>받으시겠습니까? </Text>
        <CheckBox

          style={{ borderColor: "gray" }}

        />
      </View>

      <Button style={{
        alignSelf: 'center', borderRadius: 7, borderColor: '#112f4c', width: 130,
        height: 50,
        marginTop: '20%',
        marginBottom: '30%',
        backgroundColor: '#f1c40f'
      }} onPress={onClickEnrollment}>
        <Text style={{
          color: '#112f4c', fontWeight: 'bold'
          , fontSize: 21, marginLeft: '32%'
        }}>Add</Text>
      </Button>


    </Container>
  );
};
const styles = StyleSheet.create({
  small_container: { backgroundColor: "#fff", width: 350 },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  textheader: { margin: 6, textAlign: "center", fontWeight: "bold" },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,

  },
  input: {
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'white',
    marginTop: 45,

  },
  searchBtn: {
    borderWidth: 1,
    width: 50,
    height: 50,
    backgroundColor: "#f1c40f",
    fontWeight: "bold",
    borderColor: "black",
  },
  text_effect: {
    color: "#f1c40f",
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#f1c40f'
  }, 
  header: {
    flex: 1,
    marginTop:"10%",
    flexDirection: "row",
    justifyContent: 'flex-start',
    backgroundColor: '#112f4c',
  },
  bookIcon: {
    marginLeft: "4%",
    marginTop: "7%",
    width: "10%",
    height: "50%",
    resizeMode: 'contain',
  },
  logoText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 29,
    marginLeft: "2%",
    marginTop: "14%",
    color: 'white',
  },
});
export default Portfolio_enrollment;
