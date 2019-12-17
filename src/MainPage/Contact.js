import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import {Icon, } from  'native-base';


export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contact}>
                    <Image source={require('../../static/react-native.png')} style={styles.img} />
                </View>
                <View style={styles.contact}>
                    <View style={styles.field}>
                        <Icon style={{fontSize : 25}} name="user" type="AntDesign"/>
                        <Text style={styles.textContent}>Hong Thanh Thuan</Text>
                    </View>
                    <View style={styles.field}>
                        <Icon style={{fontSize : 25}} name="location-on" type="MaterialIcons"/>
                        <Text style={styles.textContent}>Ho Chi Minh City</Text>
                    </View>
                    <View style={[styles.field, {borderBottomWidth: 0}]}>
                        <Icon style={{fontSize : 25}} name="email" type="MaterialCommunityIcons"/>
                        <Text style={styles.textContent}>thuanhong357@gmail.com</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignContent: 'stretch'
    },
    img: {
        // width: Dimensions.get('screen').width * 0.9,
        // height: Dimensions.get('screen').height * 0.4,
        width : '100%',
        height: '100%'
    },
    contact : {
        flex : 1,
        backgroundColor : 'white',
        elevation : 10,
        margin : 10
    },
    field: {
        flex : 1,
        flexDirection: 'row',
        borderBottomColor: 'black',
        alignItems: 'center',
        borderBottomWidth : 1,
        justifyContent : 'space-between'
    },
    textContent: {
        padding : 5,
        fontSize: 20,
    }
})
