import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Company from "./company_list";
import Company_employment from "./company_employment";



function CompanyMainScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.bookIcon}  
        source={require('../images/book.png')}/>
        <Text style={styles.logoText}>
            Folio Chain
        </Text>
        </View>
        <View style={styles.case1}>
        <Text style={styles.item1}>
         현재 채용 공고
        </Text>
        <View style={styles.card1}>
              <Text style={styles.information}>(채용 공고)</Text>
            </View>
        </View>
        <View style={styles.case2} >
            <View style={styles.itemHeader}>
        <Text style={styles.item1}>
        지원자 리스트(현황)
        </Text>
        <TouchableOpacity>
        <Text style={styles.item2} onPress={() => navigation.navigate('Company') } >
        더보기
        </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.card2}>
              <Text style={styles.information}>지원자1</Text>
            </View>
            <View style={styles.card2}>
              <Text style={styles.information}>지원자2</Text>
            </View>
            <View style={styles.card2}>
              <Text style={styles.information}>지원자3</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Company_employment')}>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "#424242"}}>
              채용 공고 작성하기</Text>
        </TouchableOpacity>
        </View>
    </View>
    
    
  );
}


const Stack = createStackNavigator();

class App extends Component {
 render() {
    return (
      <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={CompanyMainScreen} />
        <Stack.Screen name="Company" component={Company} />
        <Stack.Screen name="Company_employment" component={Company_employment} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
        flex: 1.5,
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
    case1: {
      flex: 3,
      backgroundColor: '#112f4c',
    },
    case2: {
      flex: 6,
      backgroundColor: '#112f4c',
    },
    itemHeader:{
        flexDirection: "row",
    },
    item1:{
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold", 
        color: 'white',
    },
    item2:{
        marginTop: 18,
        marginBottom: 5,
        marginLeft: 130,
        fontSize: 20,
        fontWeight: "bold", 
        color: 'rgb(241, 196, 15)',
    },
    card1:{
        marginVertical: 10,
        backgroundColor:"white",
        marginHorizontal: 20,
        paddingHorizontal: 16,
        paddingVertical: 50,
      },
      card2:{
        marginVertical: 10,
        backgroundColor:"white",
        marginHorizontal: 20,
        paddingHorizontal: 16,
        paddingVertical: 17,
      },
      button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 28,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: "rgb(241, 196, 15)"
      },
      information: {
        fontSize: 15,
      },
  });

export default App;