import React,{Component} from 'react'
import {
    Alert,
    AppRegistry,
    Button,
    StyleSheet,
    View
}from 'react-native';
export default class button extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>

                <Button onPress={()=>{
                    Alert.alert("you pressed the button!")
                }}
                title="this is button"


                >

                </Button>

            </View>
        );
    }
}