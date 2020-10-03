import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Container, Item, Form, Input, Label, Button } from "native-base";
import { AntDesign } from '@expo/vector-icons';

const database = "https://react-dapp.firebaseio.com";

export default class Agnecy_approve extends Component {

  constructor() {
    super()
    this.state = {
      from: '',
      to: '',
      value: '',
      certificate: '',
      users: {}
    }
  }

  _get = () => {
    fetch(`${database}/address.json`)
      .then((res) => {
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((users) => this.setState({ users: users }));
  }

  _post = () => {
    if (this.state.from != '' && this.state.to != '' && this.state.certificate != '' && this.state.value != '') {
      Object.keys(this.state.users).map((id) => {
        const user = this.state.users[id];
        if (user.address == this.state.to) {
          const data = {
            from: this.state.from,
            to: this.state.to,
            value: this.state.value,
            certificate: this.state.certificate
          }
          return fetch(`${database}/address/${id}/${user.address}.json`, {
            method: "POST",
            body: JSON.stringify(data),
          })
            .then((res) => {
              if (res.status != 200) {
                throw new Error(res.statusText);
              }
              return res.json();
            })
            .then((data) => {
              alert('승인하였습니다!');
            });
        }
      });
    } else {
      alert('모두 적어주세요!');
    }
  }


  componentDidMount() {
    this._get();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.bookIcon}
            source={require('../images/book.png')} />
          <Text style={styles.logoText}>
            Folio Chain
        </Text>
          <AntDesign name="back" size={35} color="#f1c40f" style={{ marginTop: '14%', marginLeft: '37%' }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: '5%', color: '#f1c40f', fontWeight: 'bold', fontSize: 25 }}>승인</Text>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>하기</Text>
        </View>
        <Form style={{ height: 400, marginBottom: '35%' }}>
          <Input placeholder=' 자격증'
            style={styles.input}
            value={this.state.certificate}
            autoCorrect={false}
            onChangeText={(certificate) => {
              this.setState({ certificate });
            }} />

          <Input placeholder=' 상대 주소'
            value={this.state.to}
            autoCorrect={false}
            style={styles.input}
            onChangeText={(to) => {
              this.setState({ to });
            }} />
          <Input placeholder=' 내 주소'
            value={this.state.from}
            autoCorrect={false}
            style={styles.input}
            onChangeText={(from) => {
              this.setState({ from });
            }} />
          <Input placeholder=' 값'
            value={this.state.value}
            autoCorrect={false}
            style={styles.input}
            onChangeText={(value) => {
              this.setState({ value });
            }} />
        </Form>

        <Button
          onPress={this._post}
          style={{ paddingRight: 20, marginBottom: '19%', paddingLeft: 20, borderRadius: 8, backgroundColor: '#f1c40f', alignSelf: 'center' }}>
          <Text style={{ color: '#112f4c', fontWeight: 'bold', fontSize: 20 }}>Approve</Text>
        </Button>

      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112f4c'
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    backgroundColor: '#112f4c',
  },
  bookIcon: {
    marginLeft: "4%",
    marginTop: "10%",
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
  input: {
    width: '80%',
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    textAlignVertical: "center",
    marginTop: '10%',
    alignSelf: 'center'
  }
});