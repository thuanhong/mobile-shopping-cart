import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Category</Text>
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