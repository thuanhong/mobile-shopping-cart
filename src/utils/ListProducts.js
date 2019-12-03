import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'

export default class ListProducts extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.listItem}>
                    <View style={{flex : 1}}>
                        <Image source={{uri : 'https://place-hold.it/120x150'}}/>
                    </View>
                    <View style={{flex : 2}}>
                        <Text>PRODUCT NAME</Text>
                        <Text>{this.props.cost}</Text>
                        <Text>Color : {this.props.color}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    listItem : {
        height : 200
    }
})