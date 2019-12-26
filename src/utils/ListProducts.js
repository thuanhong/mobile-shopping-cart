import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { Header, Left, Body, Icon, Title } from 'native-base';
import Images from '../utils/StaticResource';


class Item extends Component {
    render() {
        return(
            <TouchableOpacity onPress={() => this.props.navigate('Detail', {
                product: this.props.product
            })}>
                <View style={styles.listItem}>
                    <View style={{flex : 1}}>
                        <Image source={Images[this.props.product.images[1]]} style={{width : 120, height : 150}}/>
                    </View>
                    <View style={{flex : 2, paddingLeft : 40}}>
                        <Text style={{fontWeight : 'bold', fontSize : 20, flex : 1}}>{this.props.product.name}</Text>
                        <Text style={{flex : 1, fontSize : 17}}>Cost : {this.props.product.price}$</Text>
                        <Text style={{flex : 1, fontSize : 17}}>Color : {this.props.product.color}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


export default class ListProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter : this.props.navigation.getParam('title', 'unknown').includes('NEW') ? 'new' : 'inCollection'
        }
    }

    render() {
        return (
            <View style={{backgroundColor : '#d4d7d9'}}>
                <Header style={{backgroundColor : 'white'}}>
                    <Left>
                        <Icon name="md-arrow-back" type="Ionicons" onPress={() => this.props.navigation.goBack()}/>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>{this.props.navigation.getParam('title', 'unknown')}</Title>
                    </Body>
                </Header>
                <FlatList
                    data={require('../../data/clothes.json').filter(product => product[this.state.filter])}
                    renderItem={({item}) => <Item key={item.id} product={item} navigate={this.props.navigation.navigate}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
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