import React, { Component } from "react";
import { Text, Alert, View, StyleSheet, Image } from "react-native";
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
      <Container style={{ backgroundColor: "#112f4c" }}>
        <View style={{ paddingTop: 200, alignItems: "center" }}>
          <Image source={require("../images/foliochain.png")} />
        </View>
        <Form>
          <Item floatingLabel>
            <Label style={{ color: "white" }}>Address</Label>
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
            <Label style={{ color: "white" }}>Private Key</Label>
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
          <View style={{ alignSelf: "center" }}>
            <Button
              block
              style={{ width: 200, marginTop: 20, backgroundColor: "white" }}
              onPress={this.onLogin}
            >
              <Text>Login</Text>
            </Button>
          </View>

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
    color: "white",
  },
});
