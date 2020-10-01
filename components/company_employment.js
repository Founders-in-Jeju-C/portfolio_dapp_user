import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Company_employment extends Component {

    render() {
        return (
          <View style={styles.container}>
             <View style={styles.header}>
            <Image style={styles.bookIcon}  
            source={require('../images/book.png')}/>
            <Text style={styles.logoText}>
                Folio Chain
            </Text>
            </View>
            <View style={{backgroundColor: '#112f4c', flexDirection: "row"}} >
            <Text style={styles.item1}>
             채용 공고
            </Text>
            <Text style={styles.item2}>
             작성하기
            </Text>
            </View>
            <View style={styles.case1}>
            <Text style={styles.item3}>
             기업명
            </Text>
            <View style={styles.inputContainer1}>
            <TextInput style={styles.inputs}
              placeholder="Company Name"/>
            </View>
            <Text style={styles.item3}>
             사업주명
            </Text>
            <View style={styles.inputContainer1}>
            <TextInput style={styles.inputs}
              placeholder="Owner Name"/>
            </View>
            <Text style={styles.item3}>
             소개글
            </Text>
            <View style={styles.inputContainer2}>
            <TextInput style={styles.inputs}
              placeholder="A notice of employment"/>
            </View>
            </View>
            <View style={styles.case2}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Company_employment')}>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "#424242"}}>
              채용 공고 올리기</Text>
        </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    header: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: '#112f4c',
    },
    bookIcon: {
      marginLeft: 13,
      marginTop: 35,  
      width:50, 
      height: 50, 
      resizeMode: 'contain',
    },
    logoText: {
      textAlign: "center", 
      fontWeight: "bold", 
      fontSize: 30, 
      marginLeft: 7,
      marginTop: 42, 
      marginBottom: 10,
      color: 'white',
    },
    item1:{
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      fontSize: 25,
      fontWeight: "bold", 
      color: 'white',
    },
    item2:{
      marginTop: 12,
      marginBottom: 10,
      marginLeft: 7,
      fontSize: 25,
      fontWeight: "bold", 
      color: 'rgb(241, 196, 15)',
    },
    item3:{
        marginTop: 10,
        //marginBottom: 10,
        marginLeft: 23,
        fontSize: 20,
        fontWeight: "bold", 
        color: 'white',
      },
    case1: {
        flex: 4,
        backgroundColor: '#112f4c',
    },
    case2: {
        flex: 1,
        backgroundColor: '#112f4c',
        flexDirection: "row",
    },
    inputContainer1: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        borderBottomWidth: 1,
        width:340,
        height:50,
        marginTop:10,
        marginBottom:10,
        marginLeft:15,
        flexDirection: 'row',
        alignItems:'center',
    
        shadowColor: "#808080",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      inputContainer2: {
        paddingVertical: 70,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        borderBottomWidth: 10,
        width:340,
        height:50,
        marginTop:10,
        marginBottom:10,
        marginLeft:15,
        flexDirection: 'row',
        alignItems:'center',
    
        shadowColor: "#808080",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        fontSize: 18,
      },
      button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 25,
        marginLeft: 18,
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: "rgb(241, 196, 15)"
      },
  });
  