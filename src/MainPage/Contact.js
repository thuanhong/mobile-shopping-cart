import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Icon } from  'native-base';


export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contact}>
                    <Image source={require('../../static/react-native.png')} style={styles.img} />
                </View>
                <View style={styles.contact}>
                    <View style={styles.field}>
                        <Icon style={styles.iconStyle} name="user" type="AntDesign"/>
                        <Text style={styles.textContent}>Hong Thanh Thuan</Text>
                    </View>
                    <View style={styles.field}>
                        <Icon style={styles.iconStyle} name="location-on" type="MaterialIcons"/>
                        <Text style={styles.textContent}>Ho Chi Minh City</Text>
                    </View>
                    <View style={[styles.field, {borderBottomWidth: 0}]}>
                        <Icon style={styles.iconStyle} name="email" type="MaterialCommunityIcons"/>
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
        width : '100%',
        height: '100%',
        resizeMode: "stretch"
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
    iconStyle: {
        fontSize : 25,
        paddingLeft: 15
    },
    textContent: {
        padding : 5,
        fontSize: 20,
        paddingRight: 15
    }
})
