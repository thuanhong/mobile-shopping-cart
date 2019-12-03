import React, { Component } from 'react'
import {Tab, Tabs, Container} from 'native-base';
import {StyleSheet} from 'react-native';
import SignIn from './SignIn'
import SignUp from './SignUp'

export default class AuthenticatePage extends Component {
    render() {
        return (
            <Tabs tabBarPosition="bottom">
                <Tab heading="Sign In"  tabStyle={{backgroundColor: '#225a8e', borderRadius : 5}} activeTabStyle={{backgroundColor : '#225a8e'}}>
                    <SignIn />
                </Tab>
                <Tab heading="Sign Up"  tabStyle={{backgroundColor: '#225a8e', borderRadius : 5}} activeTabStyle={{backgroundColor : '#225a8e'}}>
                    <SignUp />
                </Tab>
            </Tabs>
        );
    }
}