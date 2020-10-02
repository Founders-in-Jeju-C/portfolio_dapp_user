import { Container, Button, Form, Input, Label, Item } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import sample from "../database/sample";
import { withNavigation } from "react-navigation";

const Portfolio_enrollment = (props) => {
  useEffect(() => {
    setEnrollData(enrollData);
  }, enrollData);
  let datalist = props.navigation.state.params.data;
  const firstData = {
    name: "",
    from: "",
    value: "",
    verify: "",
  };
  const [enrollData, setEnrollData] = useState(firstData);

  const onChangeName = (e) => setEnrollData({ ...enrollData, name: e });
  const onChangeFrom = (e) => setEnrollData({ ...enrollData, from: e });
  const onChangeValue = (e) => setEnrollData({ ...enrollData, value: e });

  const onVerification = () => {
    let element = ["name", "from", "value"];
    for (let i = 0; i < element.length; i++)
      if (enrollData[element[i]] === "") {
        alert("모두 입력해주세요");
        return;
      }
    let verify = true;
    // 기관 데이터베이스에서 같은 정보 있는지 조회
    if (verify) {
      alert("검증 성공");
      setEnrollData({ ...enrollData, verify: "O" });
    } else {
      alert("검증 실패");
      setEnrollData({ ...enrollData, verify: "X" });
    }
  };
  const onClickEnrollment = () => {
    let element = ["name", "from", "value"];
    for (let i = 0; i < element.length; i++)
      if (enrollData[element[i]] === "") {
        alert("모두 입력해주세요");
        return;
      }
    if (enrollData["verify"] === "") {
      Alert.alert(
        "확인을 누르면 미검증 자격으로 남게 됩니다.",
        "계속 진행하시려면 확인을 눌러주세요. ",
        [
          {
            text: "확인",
            onPress: () => {
              setEnrollData({ ...enrollData, verify: "X" });
              Alert.alert("", "등록 완료. 페이지를 이동합니다.", [
                {
                  text: "확인",
                  onPress: () => {
                    datalist.push(enrollData);
                    setEnrollData(firstData);
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
      datalist.push(enrollData);
      setEnrollData(firstData);
      Alert.alert("", "등록 완료. 페이지를 이동합니다.", [
        {
          text: "확인",
          onPress: () => props.navigation.navigate("Portfolio", datalist),
        },
      ]);
    }
  };
  return (
    <Container>
      {/* <Image source={require("../images/logo_renew_remove.png")} /> */}

      <Form>
        <Item floatingLabel>
          <Label>자격증</Label>
          <Input
            value={enrollData.name}
            autoCorrect={false}
            onChangeText={onChangeName}
          />
        </Item>

        <Item floatingLabel>
          <Label>발급 기관</Label>
          <Input
            value={enrollData.from}
            autoCorrect={false}
            onChangeText={onChangeFrom}
          />
        </Item>
        <Item floatingLabel>
          <Label>값</Label>
          <Input
            value={enrollData.value}
            autoCorrect={false}
            onChangeText={onChangeValue}
          />
        </Item>
        <Item style={{ alignSelf: "center" }}>
          <Button style={{ width: 50, height: 50 }} onPress={onVerification}>
            <Text>검증</Text>
          </Button>
          <Button style={{ width: 50, height: 50 }} onPress={onClickEnrollment}>
            <Text>등록</Text>
          </Button>
        </Item>
      </Form>
    </Container>
  );
};
const styles = StyleSheet.create({
  big_container: {
    borderWidth: 2,
    backgroundColor: "lightgrey",
  },
  small_container: { backgroundColor: "#fff", width: 350 },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  textheader: { margin: 6, textAlign: "center", fontWeight: "bold" },
  text: { margin: 6, textAlign: "center" },
  input: { width: 300, borderWidth: 1, padding: 10 },
  searchBtn: {
    borderWidth: 1,
    width: 50,
    height: 50,
    backgroundColor: "lightblue",
    fontWeight: "bold",
    borderColor: "black",
  },
});
export default Portfolio_enrollment;
