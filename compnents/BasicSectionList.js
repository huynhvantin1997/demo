import React,{Component} from 'react';
import {
    AppRegistry,SectionList,StyleSheet,Text,View,
    Alert,Platform,Image,TouchableHighlight,FlatList
}from 'react-native';
import {sectionListData} from '../data/sectionListData';
import AddModal from './AddModal';
import AddModalsong from './AddModalsong';
import Swipeout from 'react-native-swipeout'

class SectionListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            activeRowKey:null
        };
    }
    render(){
        const swipeSettings = {
            autoClose:true,
            onClose:(secId, rowId, direction)=>{
                if(this.state.activeRowKey!=null){
                    this.setState({activeRowKey:null});
                }

        },
            onOpen:(secId, rowId, direction)=>{
                this.setState({activeRowKey:this.props.item.key});

        },
            right:[
                {
                    onPress:()=>{
                        const  deletingRow=this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure yon want to delete?',
                            [
                                {text:'No', onPress:()=>console.log('Cancel Presses'),style:'cancel'},
                                {text:'Yes',onPress:()=>{
                                    sectionListData.splice(this.props.index, 1);
                                    this.
                                    //refresh section!
                                        this.props.parentSectionList.refreshSectionList(deletingRow);
                                    }},
                            ],
                        {cancelable:true}
                        );

                    },
                    text:'Delete', type:'delete'
                },
                ],
            rowId:this.props.index,
            sectionId:1
        };
        return(
            /*<Swipeout {...swipeSettings}>*/
                <View style={{flex:1,flexDirection:'column'}}>

                    <View style={{ flex:1,backgroundColor:'rgb(98, 197, 184)',flexDirection:'row'}}>
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{width:45,height:45,margin:2}}
                        >
                        </Image>
                        <View style={{
                            flex:1,
                            flexDirection:'column',
                            backgroundColor:'rgb(98, 197, 184)'
                        }}>
                            <Text style={{
                                fontSize:17,
                                fontWeight:'bold',
                                color:'white',
                                marginLeft:20,
                                marginRight:10,
                            }}>{this.props.item.name}
                            </Text>
                            <Text style={{
                                fontSize:15,
                                color:'white',
                                marginLeft:20,
                                marginRight:10,
                            }}>{this.props.item.description}
                            </Text>
                            <View style={{ backgroundColor: 'rgb(95,152,143)',height:1,margin:4,marginLeft:20,marginRight:10}}>

                            </View>
                        </View>
                    </View>

                </View>
             /*</Swipeout>*/


        );
    }
}
class SectionHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            activeRowKey:null
        };
        this._onPressAdd=this._onPressAdd.bind(this);
    }
 _onPressAdd(){
            // alert("Thêm bai");
           this.refs.addModalsong.showAddModal();
 }
    
    render(){
        const swipeSettings = {
            autoClose:true,
            onClose:(secId, rowId, direction)=>{
                if(this.state.activeRowKey!=null){
                    this.setState({activeRowKey:null});
                }

            },
            onOpen:(secId, rowId, direction)=>{
                this.setState({activeRowKey:this.props.section.key});

            },
            right:[
                {
                    onPress:()=>{
                        const  deletingRow=this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure yon want to delete?',
                            [
                                {text:'No', onPress:()=>console.log('Cancel Presses'),style:'cancel'},
                                {text:'Yes',onPress:()=>{
                                        sectionListData.splice(this.props.index, 1);
                                        this.props.parentSectionList.refreshSectionList(deletingRow);
                                    }},
                            ],
                            {cancelable:true}
                        );

                    },
                    text:'Delete', type:'delete'
                },
            ],
            rowId:this.props.index,
            sectionId:1
        };
       
        return (
            <Swipeout {...swipeSettings}>
                <View style={{flex: 1, backgroundColor: 'rgb(95,152,143)',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center'}}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold',
                        color:'white',
                        margin:10
                    }}>{this.props.section.title}

                    </Text>
                    <View>
                        <TouchableHighlight style={{marginRight:5}}
                                            underlayColor='green'
                                            onPress={this._onPressAdd}
                        >
                            <Image style={{width:40,height:40}}
                                   source={require('../icon/thembai.png')}

                            />

                        </TouchableHighlight>
                    </View>
                    <AddModalsong ref={'addModalsong'} parentSectionList={this} >

                    </AddModalsong>
                </View>
            </Swipeout>


        );
    }
}
export default class BasicSectionList extends Component{
    constructor(props){
        super(props);
        this.state=({
            deleteRowKey:null,
        });
        this._onPressAdd=this._onPressAdd.bind(this);
    }
    refreshSectionList=(activeKey,deleteKey)=>{
        this.setState((prevState)=>{
            return{
                deleteRowKey:activeKey,deleteKey
            };
        });

    }
    // refreshSectionList=(deleteKey)=>{
    //     this.setState((prevState)=>{
    //         return{
    //             deleteRowKey:deleteKey
    //         };
    //     });
    //
    // }

    _onPressAdd(){
        /*alert("Thêm Album");*/
       this.refs.addModal.showAddModal();

    }

    render(){
        return(
            <View style={{flex:1,marginTop:0}}>

                <View style={{
                    backgroundColor:'rgb(77, 120, 140)',
                    height:55,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}>
                    <View>

                            <Image style={{width:45,height:45}}
                                   source={require('../icon/iconlpaylist.png')}
                            />

                    </View>
                    <View style={{marginRight:180,}}>
                        <Text style={{color:'black',fontSize:30}}>PlayList</Text>
                    </View>
                    <View style={{marginLeft:30}}>
                        <TouchableHighlight style={{marginRight:10}}
                                            underlayColor='green'
                                            onPress={this._onPressAdd}
                        >
                            <Image style={{width:40,height:40}}
                                   source={require('../icon/icons8-add-50.png')}

                            />

                        </TouchableHighlight>
                    </View>


                </View>




                <SectionList

                    renderItem={({item, index})=>{
                        return(
                            <SectionListItem item={item} index={index} parentSectionList={this}>

                            </SectionListItem>);
                    }}
                    renderSectionHeader={({section})=>{
                        return(
                            <SectionHeader section={section} parentSectionList={this} >

                            </SectionHeader>);
                    }}
                    sections={sectionListData}
                    keyExtractor={(item, index)=>item.name}
                >

                </SectionList>

                <AddModal ref={'addModal'} parentSectionList={this} >

                </AddModal> 
                

            </View>

        );
    }
}