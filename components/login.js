import React, { Component } from "react";
import { Text, Alert, View, StyleSheet } from "react-native";
import { Container, Item, Form, Input, Label, Button } from "native-base";
import Portfolio from "./portfolio";

const database = "https://react-dapp.firebaseio.com";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      key: "",
    };
  }

  onLogin = () => {
    this.props.gotoPage("Portfolio");
  };

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Address</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.address}
              onChangeText={(address) => {
                this.setState({ address });
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Private Key</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.key}
              onChangeText={(key) => {
                this.setState({ key });
              }}
            />
          </Item>
          <Button
            block
            style={{ marginTop: 20, backgroundColor: "white" }}
            onPress={this.onLogin}
          >
            <Text>Login</Text>
          </Button>

          <Text
            style={styles.text}
            onPress={() => {
              this.props.gotoPage("Register");
            }}
          >
            처음 방문 하셨나요?
          </Text>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 40,
  },
});
