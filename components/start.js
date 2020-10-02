<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function Start(props) {

    setTimeout(function () {
        props.gotoPage('Login');
    }, 3500);



    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={require('../images/book.png')} />
        </View>
    );
=======
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="시작하기"
      />
    </View>
  );
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
}

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 100,
  },
});
>>>>>>> 18bc96e217f804af9c3834cebf7539cdb4833ab6
