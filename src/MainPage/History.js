import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOrder : [1,2,3,4,5]
        }
    }

    render() {
        return (
            <ScrollView>
                {
                    this.state.listOrder.map((ele, index) => (
                        <View key={index} style={styles.box}>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Order id:</Text>
                                <Text style={[styles.field, {color: 'black'}]}>{ele}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Order Date:</Text>
                                <Text style={[styles.field, {color: '#007bff'}]}>10/10/2019 12:12:00</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Status:</Text>
                                <Text style={[styles.field, {color: '#007bff'}]}>Pending</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.field, {color: 'grey'}]}>Total:</Text>
                                <Text style={[styles.field, {color: 'red'}]}>230$</Text>
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
        flexDirection: 'row'
    },
    field: {
        fontSize: 17,
        fontWeight: 'bold'
    },

})