import React,{Component} from 'react'
import {
    AppRegistry,
    FlatList,
    Button,
    StyleSheet,
    Text,
    View, Alert,
    Image,TouchableHighlight
} from 'react-native';
import flatListData from '../data/flatListData';
import AddModal from './AddModal';
class FlatlistItem extends Component{
    render(){
        return(
                <View style={{flex:1,flexDirection:'column'}}>
                    <View
                        style={{ flex:1,backgroundColor:'green',flexDirection:'row'}}
                    >
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{width:100,height:100,margin:5}}
                        >
                        </Image>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{
                                color:'white',
                                fontSize:20}}>{this.props.item.tenbaihat}</Text>
                            <Text style={{
                                color:'white',
                                fontSize:14}}>{this.props.item.loibaihat}</Text>

                        </View>
                    </View>
                    <View style={{height:1,backgroundColor:"white"}}></View>
                </View>




        );
    }

}


export default class BasicFlatList extends Component{
    _onPressAdd(){
        /*alert("Thêm Album");*/

    }
    render(){
        return(
            <View style={{flex:1, marginTop:0,}}>
                <View style={{
                    backgroundColor:'tomato',
                    height:50,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}>
                    <View style={{marginRight:255,}}>
                        <Text style={{color:'green',fontSize:30}}>PlayList</Text>
                            </View>
                    <View>
                        <TouchableHighlight style={{marginRight:10}}
                                            underlayColor='green'
                                            onPress={this._onPressAdd}
                        >
                            <Image style={{width:35,height:35}}
                                   source={require('../icon/icons8-add-50.png')}
                            />

                        </TouchableHighlight>
                    </View>


                </View>
                <FlatList
                data={flatListData}
                renderItem={({item,index})=>{
                    //console.log('Item=${JSON.stringify(item)},index=${index}');
                    return (
                        <FlatlistItem item={item} index={index}>

                        </FlatlistItem>);
                }}
                >

                </FlatList>
                <AddModal ref={'addModal'} parentSectionList={this}>

                </AddModal>

            </View>
        );
    }
}





