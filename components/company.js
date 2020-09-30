import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

export default class NotificationsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [
            {id:1, username:"지원자 1"},
            {id:2, username:"지원자 2"},
            {id:3, username:"지원자 3"},
            {id:4, username:"지원자 4"},
            {id:5, username:"지원자 5"},
            {id:6, username:"지원자 6"},
            {id:7, username:"지원자 7"},
            {id:8, username:"지원자 8"},
            {id:9, username:"지원자 9"},
         ],
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 25 }}>
        지원자 관리 </Text>
        </View>
        <FlatList 
          style={styles.notificationList} 
          enableEmptySections={true}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.icon}
                  source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
                <Text style={styles.username}>{item.username}</Text>
              </View>
            )}}/>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:100,
    backgroundColor:'#F2F2F2'
  },
  body: {
    //padding:20,
    backgroundColor :"white",
  },
  notificationList:{
    padding:20,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  icon:{
    width:45,
    height:45,
  },
  username:{
    color: "black",
    fontSize:20,
    alignSelf:'center',
    marginLeft:10
  }
});
