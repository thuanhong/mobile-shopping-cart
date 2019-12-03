import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Icon} from 'native-base'

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
            <ScrollView style={styles.container}>
            <LinearGradient style={{height : Dimensions.get('screen').height * 0.8}} colors={['#4ddadc', '#225a8e']}>
                
                    <TextInput 
                        onChangeText={(username) => {this.setState({username})}}
                        style={styles.input}
                        placeholder={'User name'}
                        placeholderTextColor={'white'}
                    />
                    <Icon name="user" type="AntDesign" style={[styles.symbol, {left : '5%', top : "2.5%"}]}/>
                    
                    <TextInput 
                        onChangeText={(username) => {this.setState({username})}}
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'white'}
                    />
                    <Icon name="email" type="MaterialCommunityIcons" style={[styles.symbol, {left : '5%', top : "15.5%"}]}/>
                    
                    <TextInput 
                        onChangeText={(password) => {this.setState({password})}}
                        style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor={'white'}
                        secureTextEntry={this.state.visiable}
                    />
                    <Icon name="lock" type="Feather" style={[styles.symbol, {left : '5%', top : '26.5%'}]}/>
                    <Icon name={this.state.iconPassword} type="Entypo" style={[{right : '5%', top : '26.5%'}, styles.symbol]} onPress={this.changeStatePassword.bind(this)}/>
                    
                    <TextInput 
                        onChangeText={(confirmPassword) => {this.setState({confirmPassword})}}
                        style={styles.input}
                        placeholder={'Confirm Password'}
                        placeholderTextColor={'white'}
                        secureTextEntry={this.state.visiableConfirmPassword}
                    />
                    <Icon name="lock" type="Feather" style={[styles.symbol, {left : '5%', top : '38.5%'}]}/>
                    <Icon name={this.state.iconConfirmPassword} type="Entypo" style={[{right : '5%', top : '38.5%'}, styles.symbol]} onPress={this.changeStateConfirmPassword.bind(this)}/>
                    
                    <TouchableOpacity style={styles.btn} onPress={this.login.bind(this)}>
                        <Text style={styles.txt}>Sign Up</Text>
                    </TouchableOpacity>
            </LinearGradient>  
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        height : Dimensions.get('screen').height
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
