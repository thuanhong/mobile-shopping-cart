import React, { Component } from 'react'
import {Tab, Tabs} from 'native-base';
import SignIn from './SignIn'
import SignUp from './SignUp'

export default class AuthenticatePage extends Component {
    render() {
        return (
            <Tabs>
                <Tab heading="Sign In">
                    <SignIn />
                </Tab>
                <Tab heading="Sign Up">
                    <SignUp />
                </Tab>
            </Tabs>
        );
    }
}
