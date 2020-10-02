import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function Start(props) {

  setTimeout(function () {
    props.gotoPage('Login');
  }, 5500);



  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../images/book.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100,
    backgroundColor: '#112f4c'
  },
  Image: {
    width: 70,
    height: 70,
    marginTop: '50%'
  }
});
