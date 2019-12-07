import React, { Component } from 'react'
import {Tab, Tabs, Container} from 'native-base';
import SignIn from './SignIn'
import SignUp from './SignUp'

export default class AuthenticatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber : 0
        }
    }

    changeTab() {
        this.setState({pageNumber : 0})
    }

    render() {
        return (
            <Tabs tabBarPosition="bottom" page={this.state.pageNumber}>
                <Tab heading="Sign In"  tabStyle={{backgroundColor: '#225a8e', borderRadius : 5}}
                     activeTabStyle={{backgroundColor : '#225a8e'}}>
                    <SignIn goBack={this.props.navigation.goBack.bind(this)}/>
                </Tab>
                <Tab heading="Sign Up"  tabStyle={{backgroundColor: '#225a8e', borderRadius : 5}}
                     activeTabStyle={{backgroundColor : '#225a8e'}}>
                    <SignUp changeTab={this.changeTab.bind(this)}/>
                </Tab>
            </Tabs>
        );
    }
}