import React,{Component} from 'react';
import {
    AppRegistry,SectionList,StyleSheet,Text,
    View,Alert,Platform,Image,TouchableHighlight,TextInput,
    Dimensions,FlatList
}from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {sectionListData} from '../data/sectionListData';
 var screen=Dimensions.get('window');
export default class AddModalsong extends Component{
    constructor(props){
        super(props);
       
    }
    showAddModal=()=>{
        this.refs.myModal.open();
    }
    
    render(){

        return(
            <Modal
                ref={"myModal"}
                style={{
                justifyContent:'center',
                borderRadius:10,
                shadowRadius:10,
                width: screen.width-50,
                height:250
            }}
                position='center'
                backdrop={true}
                onClosed={()=>{
                   alert("Modal close");
                }}
            >

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    textAlign:'center',
                    marginTop:40
                }}>New Album </Text>


            </Modal>


        );
    }
}
