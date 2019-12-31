import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOrder : require('../../data/history.json')
        }
    }


    render() {
        return (
            <ScrollView>
                {
                    this.state.listOrder.map((order, index) => (
                        <View key={index} style={styles.box}>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Order id:</Text>
                                <Text style={[styles.field, {color: 'black'}]}>{order.id}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Order Date:</Text>
                                <Text style={[styles.field, {color: '#007bff'}]}>{order.date}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Status:</Text>
                                <Text style={[styles.field, {color: order.status == "Pending" ? '#007bff' : '#0acf83'}]}>{order.status}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Total:</Text>
                                <Text style={[styles.field, {color: 'red'}]}>{order.total}$</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        margin: 10,
        elevation: 5,
        backgroundColor: 'white',
        padding: 10
    },
    row: {
        justifyContent : 'space-between',
        flexDirection: 'row',
        margin: 1
    },
    field: {
        fontSize: 17,
        fontWeight: 'bold'
    },

})