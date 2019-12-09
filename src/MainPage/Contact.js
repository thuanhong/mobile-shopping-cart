import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Email : thuanhong@gmail.com</Text>
                <Text>Name : Hong Thanh Thuan</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#d4d7d9',
        flex : 1
    }
})
