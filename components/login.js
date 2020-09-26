import React, { Component } from "react";
import { Text, Alert, View, StyleSheet } from "react-native";
import { Container, Item, Form, Input, Label, Button } from "native-base";
import Portfolio from "./portfolio";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert("Credentials", `${username} + ${password}`);
  }

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Address</Label>
            <Input autoCapitalize="none" autoCorrect={false} />
          </Item>
          <Item floatingLabel>
            <Label>Private Key</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Item>
          <Button block style={{ marginTop: 20, backgroundColor: "white" }}>
            <Text>Login</Text>
          </Button>
          <Button block style={{ marginTop: 20, backgroundColor: "white" }}>
            <Text>Register</Text>
          </Button>
          <Button
            block
            style={{ marginTop: 20, backgroundColor: "white" }}
            onPress={() => {
              this.props.gotoPage("Portfolio");
            }}
          >
            <Text>go to portfolio page(test)</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
