import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class Recommend_chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      messages: [
        { id: 1, sent: true, msg: "Message1" },
        { id: 2, sent: false, msg: "Message2" },
      ],
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem = this._renderItem.bind(this);
  }

  reply() {
    var messages = this.state.messages;
    messages.push({
      id: Math.floor(Math.random() * 99999999999999999 + 1),
      sent: false,
      msg: this.state.msg,
    });
    this.setState({ msg: "", messages: messages });
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id: Math.floor(Math.random() * 99999999999999999 + 1),
        sent: true,
        msg: this.state.msg,
      });
      this.setState({ messages: messages });
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({ item }) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image
            source={require("../images/chatbot.png")}
            style={styles.userPic}
          />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.rightMsg}>
          <View style={styles.rightBlock}>
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
          <Image source={require("../images/me.png")} style={styles.userPic} />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: "5%",
            backgroundColor: "white",
          }}
        >
          <Feather name="menu" size={27} color="black" />
          <Text style={{ letterSpacing: 1, fontSize: 20, fontWeight: "900" }}>
            FOLIO CHAIN
          </Text>
          <MaterialCommunityIcons name="bell" size={27} color="black" />
        </View>
        <View style={{ flex: 0.15, backgroundColor: "white" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 20,
            }}
          >
            챗봇과 대화를 시작합니다.
          </Text>
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
              style={styles.list}
              extraData={this.state}
              data={this.state.messages}
              keyExtractor={(item) => {
                return item.id;
              }}
              renderItem={this.renderItem}
            />
            <View style={styles.input}>
              <TextInput
                style={{ flex: 1 }}
                value={this.state.msg}
                placeholderTextColor="#696969"
                onChangeText={(msg) => this.setState({ msg })}
                blurOnSubmit={false}
                onSubmitEditing={() => this.send()}
                placeholder="Type a message"
                returnKeyType="send"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width,
    height,
  },
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#075e54",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
  },
  input: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
    height: 50,
    width: width - 20,
    backgroundColor: "#fff",
    margin: 10,
    borderColor: "#696969",
    borderWidth: 1,
  },
  eachMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
  },
  rightMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
    alignSelf: "flex-end",
  },
  userPic: {
    height: 50,
    width: 50,
    margin: 7,
    borderRadius: 20,
    backgroundColor: "black",
  },
  msgBlock: {
    width: 200,
    borderRadius: 10,
    backgroundColor: "#112f4c",
    padding: 20,
  },
  rightBlock: {
    width: 200,
    borderRadius: 10,
    backgroundColor: "#112f4c",
    padding: 20,
  },
  msgTxt: {
    fontSize: 18,
    color: "rgb(241, 196, 15)",
    fontWeight: "600",
  },
  rightTxt: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  header: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#112f4c",
  },
  bookIcon: {
    marginLeft: 13,
    marginTop: 35,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  logoText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 7,
    marginTop: 42,
    marginBottom: 10,
    color: "white",
  },
});