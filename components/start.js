import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Start(props) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          props.gotoPage("Login");
        }}
        title="시작하기"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 100,
  },
});
