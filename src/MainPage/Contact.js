import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import {Icon, } from  'native-base';


export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex : 1}}>
                    <Image source={require('../../static/react-native.png')} style={styles.img} />
                </View>
                <View style={styles.contact}>
                    <View style={styles.field}>
                        <Icon name="user" type="AntDesign"/>
                        <Text style={styles.textContent}>Hong Thanh Thuan</Text>
                    </View>
                    <View style={styles.field}>
                        <Icon name="location-on" type="MaterialIcons"/>
                        <Text style={styles.textContent}>Ho Chi Minh City</Text>
                    </View>
                    <View style={styles.field}>
                        <Icon name="email" type="MaterialCommunityIcons"/>
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
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.3,
    },
    contact : {
        flex : 1
    },
    field: {
        flex : 1,
        flexDirection: 'row',
        borderBottomColor: 'black',
        alignItems: 'flex-end',
        backgroundColor : 'white',
        elevation :5,
        justifyContent : 'space-around'
    },
    textContent: {
        // padding : 5
    }
})
