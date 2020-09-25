import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Start from "./components/start";
import Login from "./components/login";
import fire from './firebase';

export default function App() {
  const [page, setPage] = useState('Start');

  const gotoPage=(page)=>{
    setPage(page);
  }

  //화면 이동
  let content = <Start gotoPage={gotoPage} />;
  if (page === 'Login'){
    content = <Login gotoPage={gotoPage} />;
  }
  
  return(
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "flex-end",
      paddingVertical: 100
  }
  
});

