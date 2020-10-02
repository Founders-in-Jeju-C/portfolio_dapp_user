import React, { Component } from "react";
import { Text, Alert, View, StyleSheet, AsyncStorage } from "react-native";
import { Container, Item, Form, Input, Label, Button } from "native-base";
import Portfolio from "./portfolio";


const database = 'https://react-dapp.firebaseio.com';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      company: {},
      address: "",
      key: "",
      ids: '',
      result: 'dddddd'
    };
  }


  onLogin = async () => {


    Object.keys(this.state.users).map(id => {
      const user = this.state.users[id];
      if (user.address == this.state.address) {
        if (user.key == this.state.key) {
          this.setState({ ids: id });
          //let user = this.state.ids;
          //AsyncStorage.setItem('id', user);
          //if (user != '')
          if (this.state.ids != '' && this.state.ids != null) {
            alert(this.state.ids);
            //<Portfolio ids={this.state.ids} test="asdfasdfsd" />
            this.props.gotoPage("Portfolio", { ids: this.state.users[this.state.ids] });
          }
        }
      }
    });



    Object.keys(this.state.company).map(id => {
      const cp = this.state.company[id];
      if (cp.address == this.state.address) {
        if (cp.key == this.state.key) {
          alert('기업뷰 이동');
        }
      }
    });


  }

  _get() {
    fetch(`${database}/address.json`).then(res => {
      if (res.status != 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(users => this.setState({ users: users }));

    fetch(`${database}/company.json`).then(res => {
      if (res.status != 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(company => this.setState({ company: company }));
  }

  componentDidMount() {
    this._get();
  }


  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Address</Label>
            <Input autoCapitalize="none" autoCorrect={false}
              value={this.state.address}
              onChangeText={(address) => {
                this.setState({ address })
              }
              } />
          </Item>
          <Item floatingLabel>
            <Label>Private Key</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.key}
              onChangeText={(key) => {
                this.setState({ key })
              }
              }
            />
          </Item>
          <Button block style={{ marginTop: 20, backgroundColor: "white" }} onPress={this.onLogin}>
            <Text>Login</Text>
          </Button>

          <Text style={styles.text} onPress={() => {
            this.props.gotoPage("Register");
          }}>처음 방문 하셨나요?</Text>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 40
  }
});