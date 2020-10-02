import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

export default class Company extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, username: "지원자 1" },
        { id: 2, username: "지원자 2" },
        { id: 3, username: "지원자 3" },
        { id: 4, username: "지원자 4" },
        { id: 5, username: "지원자 5" },
        { id: 6, username: "지원자 6" },
        { id: 7, username: "지원자 7" },
        { id: 8, username: "지원자 8" },
        { id: 9, username: "지원자 9" },
      ],
    };
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
        </View>
        <View style={{ backgroundColor: '#112f4c', flexDirection: "row" }} >
          <Text style={styles.item1}>
            지원자
        </Text>
          <Text style={styles.item2}>
            현황
        </Text>
        </View>
        <FlatList
          style={styles.notificationList}
          enableEmptySections={true}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.icon}
                  source={require('../images/personal-information.png')} />
                <Text style={styles.username}>{item.username}</Text>
              </View>
            )
          }} />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    flexDirection: "row",
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
    fontSize: 30,
    marginLeft: "2%",
    marginTop: "11%",
    color: 'white',
  },
  notificationList: {
    flex: 10,
    paddingRight: "5%",
    paddingLeft: "5%",
    backgroundColor: '#112f4c',
  },
  notificationBox: {
    padding: "6%",
    marginTop: "3%",
    marginBottom: "2%",
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  icon: {
    width: "10%",
    height: "130%",
    resizeMode: "contain",
  },
  username: {
    color: "black",
    fontSize: 17,
    alignSelf: 'center',
    marginLeft: "5%"
  },
  item1: {
    marginTop: "1%",
    marginBottom: "5%",
    marginLeft: "6%",
    fontSize: 25,
    fontWeight: "bold",
    color: 'white',
  },
  item2: {
    marginTop: "1%",
    marginBottom: "5%",
    marginLeft: "3%",
    fontSize: 25,
    fontWeight: "bold",
    color: 'rgb(241, 196, 15)',
  },
});
