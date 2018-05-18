import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    AppRegistry,
    StyleSheet,
    TextInput


} from 'react-native';
export default class App extends Component{
    constructor(){
        super();

    }
  render(){

    return(
        <View>
            <TextInput style={styles.username}
                       KeyboardType='email-address'
                       placeholder='Enter your email'
            >

            </TextInput>
            
        </View>


    );

  }
}
const styles=StyleSheet.create({
    username:{
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'black',
        boderwidth:2

    }
});