import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    AppRegistry,
    StyleSheet,
    TextInput


} from 'react-native';
export default class textinput extends Component{
    constructor(props){
        super(props);
        this.state={
          typedText:''
        };
    }
    render(){

        return(
            <View>
                <TextInput style={styles.username}
                           KeyboardType='email-address'
                           placeholder='Enter your email'
                           onChangText={
                               (text)=>{
                                   this.setState(
                                       (previousState)=>{
                                           return{
                                               typedText: text
                                           }
                                       }
                                   )
                               }
                           }
                >
                </TextInput>
                <Text style={{marginLeft:20,}} >{this.state.typedText}</Text>
                <TextInput style={styles.username}
                           KeyboardType='default'
                           placeholder='Enter your password'
                           secureTextEntry={true}
                >
                </TextInput>
                <TextInput style={styles.username}
                           multiline={true}
                           boderBottomColor='green'
                           boderBottomWidth={3}
                           boderLeftColor='green'
                           boderLeftColor={3}
                           boderRightColor='green'
                           boderRightColor={3}
                           editable={true}
                           autoFocus={true}


                />

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
        borderWidth:2,

    }
});