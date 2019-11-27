import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default class AuthenticatePage extends Component {
    render() {
        return (
            <View>
                <SignIn/>
                <SignUp/>
            </View>
        )
    }
}
