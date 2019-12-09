import React, { Component } from 'react'
import { Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Icon} from 'native-base'
import * as Config from '../utils/Config'
// import AsyncStorage from '@react-native-community/async-storage';

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
        if (!this.state.username || !this.state.password) {
            Alert.alert('Please Input')
            return
        }

        fetch(`${Config.END_POINT}/api-server-store/authenticate`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username : this.state.username,
                password : this.state.password
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status_code == 200) {
                Alert.alert('Login successful')
                this.props.navigate('Drawer')
            }
        })

        // try {
        //     const value = await AsyncStorage.getItem(this.state.username)
        //     if(value !== null) {
        //         if (value === this.state.password) {
        //             await AsyncStorage.setItem('login', 'true')
        //             this.props.goBack()
        //         } else {
        //             Alert.alert('Wrong password')
        //         }
        //     } else {
        //         Alert.alert('User not exist')
        //     }
        // } catch(e) {
        //     console.log(e)
        // }
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
