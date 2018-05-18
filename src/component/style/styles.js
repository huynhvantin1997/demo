import React, {Component} from 'react';
import {
    StyleSheet


} from 'react-native';
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    header:{
        flex: 1,
        backgroundColor: 'blue',
        alignItems:'center',
        justifyContent:'center',

    },
    content:{
        flex:4,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    },
    Button:{
        flex: 2,
        backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    footer:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
    },
    TextHeader:{
        padding: 5,
        fontSize: 25,
        color: 'white',

    },
    textcontent:{
        padding: 10,
        color:'white',
        fontSize: 100,
    },
    textbutton:{
        padding:5,
        color:'white',
        fontSize:50,
    },
    textfooter:{
        padding:5,
        fontSize: 25,
        color:'white',
    },
});
export default styles;