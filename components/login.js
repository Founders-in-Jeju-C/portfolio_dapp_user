import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Login(props){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>로그인 화면</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "black",
        fontSize: 20
    }
});