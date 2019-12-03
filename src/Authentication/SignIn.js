import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Icon} from 'native-base'

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '',
            visiable : true,
            iconPassword : 'eye'
        }
    }

    login() {
        console.log('navigate')
    }

    changeStatePassword() {
        if (this.state.visiable) {
            this.setState({
                visiable : false,
                iconPassword : 'eye-with-line'
            })
        } else {
            this.setState({
                visiable : true,
                iconPassword : 'eye'
            })
        }
    }

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#4ddadc', '#225a8e']}>
                <KeyboardAvoidingView style={styles.container} behavior="height">
                    <TextInput 
                        onChangeText={(username) => {this.setState({username})}}
                        style={styles.input}
                        placeholder={'User name'}
                        placeholderTextColor={'white'}
                    />
                    <Icon name="user" type="AntDesign" style={[styles.symbol, {marginTop : '40%', left : '5%'}]}/>
                    <TextInput 
                        onChangeText={(password) => {this.setState({password})}}
                        style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor={'white'}
                        secureTextEntry={this.state.visiable}
                    />
                    <Icon name="lock" type="Feather" style={[styles.symbol, {left : '5%'}]}/>
                    <Icon name={this.state.iconPassword} type="Entypo" style={[{right : '5%'}, styles.symbol]} onPress={this.changeStatePassword.bind(this)}/>
                    <TouchableOpacity style={styles.btn} onPress={this.login.bind(this)}>
                        <Text style={styles.txt}>Sign in</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </LinearGradient>  
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        padding : 5
    },
    input : {
        paddingLeft : '10%',
        margin : 10,
        borderBottomColor : 'white',
        borderBottomWidth : 1,
        color : 'white'
    },
    btn : {
        margin: 10,
        padding : 13,
        borderRadius : 10,
        backgroundColor : '#8ac3cd'
    },
    txt : {
        textAlign : 'center',
        fontWeight : 'bold',
        color : 'white',
        fontSize : 15
    },
    symbol : {
        position : 'absolute',
        color : 'white',
    }
})
