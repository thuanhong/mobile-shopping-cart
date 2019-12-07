import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Icon, Title } from 'native-base';

export default class ListProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayColor : ['black', 'red', 'yellow', 'blue', 'grey', 'violet', 'green', 'brown', 'white', 'pink']
        }
    }

    render() {
        return (
            <ScrollView style={{backgroundColor : '#d4d7d9'}}>
                <Header style={{backgroundColor : 'white'}}>
                    <Left>
                        <Icon name="md-arrow-back" type="Ionicons" onPress={() => this.props.navigation.goBack()}/>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>{this.props.navigation.getParam('title', 'unknown')}</Title>
                    </Body>
                </Header>
                {this.state.arrayColor.map((color, index) => {
                    const costRandom = (Math.random() * 100).toFixed(2)
                    return (
                        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('Detail', {
                            cost : costRandom,
                            color : color
                        })}>
                            <View style={styles.listItem}>
                                <View style={{flex : 1}}>
                                    <Image source={{uri : 'https://place-hold.it/120x150'}} style={{width : 120, height : 150}}/>
                                </View>
                                <View style={{flex : 2, paddingLeft : 40}}>
                                    <Text style={{fontWeight : 'bold', fontSize : 20, flex : 1}}>PRODUCT NAME</Text>
                                    <Text style={{flex : 1, fontSize : 17}}>Cost : {costRandom} $</Text>
                                    <Text style={{flex : 1, fontSize : 17}}>Color : {color}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    listItem : {
        height : 170,
        flexDirection : 'row',
        margin : 10,
        padding : 10,
        elevation : 10,
        backgroundColor : 'white'
    }
})