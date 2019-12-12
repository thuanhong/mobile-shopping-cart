import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {View, Image, Button, Dimensions, SafeAreaView, Text} from 'react-native';
import Home from './MainPage/Home'
import SettingPage from './Setting/SettingPage'
import AuthenticatePage from './Authentication/AuthenticatePage';
import {Icon} from 'native-base'
import Contact from './MainPage/Contact';
import Cart from './MainPage/Cart';
import History from './MainPage/History';
import ListProducts from './utils/ListProducts';
import ProductDetail from './utils/ProductDetail';


const CustomDrawerNavigation = (props) => (
    <SafeAreaView style={{padding : 7}}>
        <View style={{height: 150, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{height : Dimensions.get('screen').width * 0.5, width: Dimensions.get('screen').width * 0.5}} source={{uri: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'}}/>
        </View>
        <View>
            <DrawerItems {...props}/>
            <Button
                title={'Log out'}
                onPress={() => {props.navigation.navigate('Authen')}}
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

const homePageStackNavigation = createStackNavigator(
    {
        Home : {
            screen : Home,
            navigationOptions : {
                headerShown : false
            }
        },
        List : ListProducts,
        Detail : {
            screen : ProductDetail,
            navigationOptions : {
                headerShown : true,
                title : 'Detail'
            }
        }
    },
    {
        initialRouteName : 'Home',
        defaultNavigationOptions : {
            headerShown : false
        }
    }
)

const MainPageBottomTabsNavigation = createBottomTabNavigator(
    {
        Home : {
            screen: homePageStackNavigation,
            navigationOptions : {
                tabBarIcon: (
                    <Icon name='home' type="Entypo"/>
                )
            },
        },
        Cart : {
            screen: Cart,
            navigationOptions : {
                tabBarIcon: (
                    <View>
                        <Icon name='shoppingcart' type="AntDesign"/>
                        <View style={{position:'absolute',
                              top:0,
                              right:0,
                              minWidth:15,
                              height:15,
                              borderRadius:15,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#FF0000',
                              zIndex : 0}}>
                            <Text style={{color:'white', fontSize: 10}}>5</Text>
                        </View>
                    </View>
                )
            }
        },
        History : {
            screen: History,
            navigationOptions : {
                tabBarIcon: (
                    <Icon name='history' type="MaterialIcons"/>
                )
            }
        },
        Contact : {
            screen: Contact,
            navigationOptions : {
                tabBarIcon: (
                    <Icon name='user' type="EvilIcons"/>
                )
            },
        },
    },
    {
        defaultNavigationOptions : {
            tabBarOptions: {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
        }
    }
)

const MainPageStackNavigation = createStackNavigator(
    {
        Main : MainPageBottomTabsNavigation,
    },
    {
        defaultNavigationOptions : ({navigation}) => ({
            title : 'Main Page',
            headerLeft : (
                <Icon name='menu' style={{paddingLeft: 10, color: 'white'}} onPress={() => navigation.openDrawer()}/>
            ),
            headerRight : (
                <Icon name="shopping-bag" type="FontAwesome" style={{paddingRight: 10, color: 'white'}}/>
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
                drawerIcon : (
                    <Icon name="home" style={{padding: 0}}/>
                )
            }

        },
        Setting: {
            screen : SettingPageStackNavigation,
            navigationOptions : {
                title : 'Setting page',
                drawerIcon : (
                    <Icon name="settings" style={{padding: 0}}/>
                )
            }
        },
    },
    {
        hideStatusBar: true,
        drawerWidth : Dimensions.get('screen').width * 0.8,
        drawerPosition: 'left',
        contentComponent : CustomDrawerNavigation
    }
);

const mainSwitchNavigation = createSwitchNavigator(
    {
        Drawer : DrawerNavigation,
        Authen :  AuthenticatePage
    },
    {
        initialRouteName : 'Drawer',
        defaultNavigationOptions : {
            headerShown : false
        }
    }
)

export default createAppContainer(mainSwitchNavigation);
