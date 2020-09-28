import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, } from 'react-native';
import { Container, Item, Form, Input, Label, Button, CheckBox } from "native-base";
import Portfolio from './portfolio';
// import firebase from '../firebase';

const database = 'https://react-dapp.firebaseio.com';

export default class App extends Component {

  constructor(props) {
    super();

    this.state = {
      user: {},
      name: '',
      address: '',
      key: '',
      checked: true
    }

  }

  _post(user) {
    if (!this.state.checked) {
      return fetch(`${database}/address.json`, {
        method: 'POST',
        body: JSON.stringify(user)
      }).then(res => {
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      }).then(data => {
        <Portfolio address={this.state.address} />
        this.props.gotoPage('Portfolio');
      });
    } else {
      return fetch(`${database}/company.json`, {
        method: 'POST',
        body: JSON.stringify(user)
      }).then(res => {
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      }).then(data => {
        alert('기업용뷰로 이동')
      });
    }
  }


  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleAddressChange = (e) => {

    this.setState({ address: e.target.value });
  }

  handleKeyChange = (e) => {
    this.setState({ key: e.target.value });
  }


  handleSubmit() {
    const user = {
      address: this.state.address,
      key: this.state.key,
      name: this.state.name
    }
    if (!user.name || !user.address || !user.key) {
      alert('모두 입력해주세요');
      return;
    }
    this._post(user);
  }

  render() {
    return (
      <Container key={this.state.id}>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input autoCapitalize="none" value={this.state.name} autoCorrect={false} onChangeText={(name) => {
              this.setState({ name })
            }
            } />

          </Item>
          <Item floatingLabel>
            <Label>Address</Label>
            <Input
              autoCapitalize="none"
              value={this.state.address}
              autoCorrect={false}
              onChangeText={(address) => {
                this.setState({ address })
              }
              } />
          </Item>
          <Item floatingLabel>
            <Label>Private Key</Label>
            <Input
              autoCapitalize="none"
              secureTextEntry={true}
              value={this.state.key}
              onChangeText={(key) => {
                this.setState({ key })
              }
              } />

          </Item>
          <Text>기업 회원가입 체크 </Text>
          <CheckBox
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />

          <Button block style={{ marginTop: 20, backgroundColor: "white" }} onPress={this.handleSubmit.bind(this)}>
            <Text>Register</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}