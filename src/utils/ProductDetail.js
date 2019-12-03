import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class ProductDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>detail</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row'
    }
})