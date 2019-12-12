import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../static/react-native.png')} style={styles.img} />
                <View style={styles.contact}>
                    <Text></Text>
                    <Text></Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#d4d7d9',
        flex : 1,
        alignContent: 'stretch'
    },
    img: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.4
    },
    contact: {
        flex: 1
    }
})
