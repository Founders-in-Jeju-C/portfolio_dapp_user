import React, { Component } from "react";
import { Text, Alert, View, StyleSheet, Image, Dimensions } from "react-native";
import { Container, Item, Form, Input, Label, Button } from "native-base";
import Portfolio from "./portfolio";

const database = "https://react-dapp.firebaseio.com";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      key: "",
    };
  }

  onLogin = () => {
    this.props.navigation.navigate("After");
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.image}>
          <Image source={require("../images/foliochain.png")} />
        </View>
        <Form style={{ alignItems: "center" }}>
          <Item style={styles.inputBox}>
            <Label>Address : </Label>
            <Input
              autoCorrect={false}
              value={this.state.address}
              onChangeText={(address) => {
                this.setState({ address });
              }}
            />
          </Item>
          <Item style={styles.inputBox}>
            <Label>Private Key : </Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              value={this.state.key}
              onChangeText={(key) => {
                this.setState({ key });
              }}
            />
          </Item>
          <View style={{ alignSelf: "center" }}>
            <Button block style={styles.loginButton} onPress={this.onLogin}>
              <Text style={styles.loginText}>Log in</Text>
            </Button>
          </View>

          <Text
            style={styles.registerText}
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            <Text style={{ color: "#f1c40f", textDecorationLine: "underline" }}>
              처음
            </Text>
            이신가요?
          </Text>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#112f4c",
  },
  image: {
    paddingTop: 100,
    paddingBottom: 80,
    alignItems: "center",
  },
  inputBox: {
    marginBottom: 30,
    width: screenWidth - 50,
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    textAlignVertical: "center",
  },
  loginButton: {
    borderRadius: 5,
    width: 100,
    backgroundColor: "#f1c40f",
    marginTop: 80,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  registerText: {
    textAlign: "center",
    marginTop: 80,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
