import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, Dimensions } from 'react-native'

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput 
                        onChangeText={(username) => {this.setState({username})}}
                        style={styles.input}
                        placeholder={'User name'}
                    />
                    <TextInput 
                        onChangeText={(password) => {this.setState({password})}}
                        style={styles.input}
                        placeholder={'Password'}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        height: Dimensions.get('window').height,
        backgroundColor : '#55ddff'
    },
    input : {
        backgroundColor : 'white',
        borderRadius : 10,
        paddingLeft : 10,
        margin : 10
    }
})
