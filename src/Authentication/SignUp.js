import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Icon} from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            email : '',
            password : '',
            confirmPassword : '',
            visiable : true,
            visiableConfirmPassword : true,
            iconPassword : 'eye',
            iconConfirmPassword : 'eye'
        }
    }

    async createNewAccount() {
        if (this.state.password === this.state.confirmPassword) {
            await AsyncStorage.setItem(this.state.username, this.state.password);
            Alert.alert('Register successfully')
            this.props.changeTab()
        } else {
            Alert.alert('Password and password confirm not match')
        }
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

    changeStateConfirmPassword() {
        if (this.state.visiableConfirmPassword) {
            this.setState({
                visiableConfirmPassword : false,
                iconConfirmPassword : 'eye-with-line'
            })
        } else {
            this.setState({
                visiableConfirmPassword : true,
                iconConfirmPassword : 'eye'
            })
        }
    }

    render() {
        return (
            <ScrollView>
                <LinearGradient style={{height : Dimensions.get('screen').height * 0.85}} colors={['#4ddadc', '#225a8e']}>
                    <TextInput 
                        onChangeText={(username) => {this.setState({username})}}
                        style={styles.input}
                        placeholder={'User name'}
                        placeholderTextColor={'white'}
                    />
                    <Icon name="user" type="AntDesign" style={[styles.symbol, {left : '5%', top : "2.5%"}]}/>
                    
                    <TextInput 
                        onChangeText={(email) => {this.setState({email})}}
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'white'}
                    />
                    <Icon name="email" type="MaterialCommunityIcons" style={[styles.symbol, {left : '5%', top : "16.5%"}]}/>
                    
                    <TextInput 
                        onChangeText={(password) => {this.setState({password})}}
                        style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor={'white'}
                        secureTextEntry={this.state.visiable}
                    />
                    <Icon name="lock" type="Feather" style={[styles.symbol, {left : '5%', top : '28.5%'}]}/>
                    <Icon name={this.state.iconPassword} type="Entypo" style={[{right : '5%', top : '28.5%'}, styles.symbol]} onPress={this.changeStatePassword.bind(this)}/>
                    
                    <TextInput 
                        onChangeText={(confirmPassword) => {this.setState({confirmPassword})}}
                        style={styles.input}
                        placeholder={'Confirm Password'}
                        placeholderTextColor={'white'}
                        secureTextEntry={this.state.visiableConfirmPassword}
                    />
                    <Icon name="lock" type="Feather" style={[styles.symbol, {left : '5%', top : '40.5%'}]}/>
                    <Icon name={this.state.iconConfirmPassword} type="Entypo" style={[{right : '5%', top : '40.5%'}, styles.symbol]} onPress={this.changeStateConfirmPassword.bind(this)}/>
                    
                    <TouchableOpacity style={styles.btn} onPress={this.createNewAccount.bind(this)}>
                        <Text style={styles.txt}>Sign Up</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
