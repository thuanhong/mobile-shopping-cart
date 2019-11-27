import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack'
import {View, Image, Button, Dimensions, SafeAreaView} from 'react-native';
import MainPage from './MainPage/MainPage'
import SettingPage from './Setting/SettingPage'
import AuthenticatePage from './Authentication/AuthenticatePage';
import {Icon} from 'native-base'

const CustomDrawerNavigation = (props) => (
    <SafeAreaView style={{padding : 15}}>
        <View style={{height: 150, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{height : Dimensions.get('screen').width * 0.5, width: Dimensions.get('screen').width * 0.5}} source={{uri: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'}}/>
        </View>
        <View>
            <DrawerItems {...props}/>
            <Button
                title={'Log out'}
                onPress={() => {console.log('LOG OUT')}}
            />
        </View>
    </SafeAreaView>
)

const SettingPageStackNavigation = createStackNavigator(
    {
        Setting : SettingPage,
    },
    {
        defaultNavigationOptions : ({navigation}) => ({
            title : 'Setting Page',
            headerLeft : (
                <Icon name='menu' style={{paddingLeft: 10, color: 'white'}} onPress={() => navigation.openDrawer()}/>
            ),
            headerStyle: {
                backgroundColor : '#007bff',
            },
            headerTitleStyle : {
                color : 'white',
                fontWeight : 'bold'
            },
        })
    }
)

const MainPageStackNavigation = createStackNavigator(
    {
        Main : MainPage,
    },
    {
        defaultNavigationOptions : ({navigation}) => ({
            title : 'Main Page',
            headerLeft : (
                <Icon name='menu' style={{paddingLeft: 10, color: 'white'}} onPress={() => navigation.openDrawer()}/>
            ),
            headerStyle: {
                backgroundColor : '#007bff',
            },
            headerTitleStyle : {
                color : 'white',
                fontWeight : 'bold'
            },
        })
    }
);

const DrawerNavigation = createDrawerNavigator(
    {
        Main: {
            screen : MainPageStackNavigation,
            navigationOptions : {
                title : 'Main page',
            }
            
        },
        Setting: {
            screen : SettingPageStackNavigation,
            navigationOptions : {
                title : 'Setting page',
            }
        },
        Authen : {
            screen : AuthenticatePage,
            navigationOptions : {
                title : 'Login'
            }
        }
    },
    {
        hideStatusBar: true,
        drawerWidth : Dimensions.get('screen').width * 0.8,
        drawerPosition: 'left',
        contentComponent : CustomDrawerNavigation
    }
);

export default createAppContainer(DrawerNavigation);