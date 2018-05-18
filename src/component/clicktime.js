import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    AppRegistry


} from 'react-native';
import styles from '../component/style/styles';
export default class clicktime extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/*header*/}
                <View style={styles.header}>
                    <Text style={styles.TextHeader}> UNG DUNG CLICK TIME</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.textcontent}> 96</Text>
                </View>
                <View style={styles.Button}>
                    <View style={styles.button}>
                    <Text style={styles.textbutton}>cong</Text>
                    </View>
                    <View style={styles.button}>
                    <Text style={styles.textbutton}>tru</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.textfooter}>reset</Text>
                </View>
            </View>

        );
    }
}
