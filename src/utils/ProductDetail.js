import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class ProductDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexImg}>
                    <Image source={{uri : 'https://place-hold.it/150x150'}} style={styles.image}/>
                    <Image source={{uri : 'https://place-hold.it/150x150'}} style={styles.image}/>
                </View>
                <View style={{flex : 1}}>
                    <View style={styles.flexDetail}>
                        <Text style={{color : 'red', fontSize : 20, textAlign : 'center'}}>PRODUCT NAME</Text>
                        <Text style={{fontSize: 17, textAlign : 'center'}}>Cost : {this.props.navigation.getParam('cost', 'updating')}$</Text>
                        <Text style={{fontSize: 17, textAlign : 'center'}}>Color : {this.props.navigation.getParam('color', 'updating')}</Text>
                    </View>
                    <View style={styles.flexContent}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu mollis ex.Vestibulum gravida euismod viverra.
                            Sed mi leo, ullamcorper ac tellus sit amet, congue feugiat sem. Nulla turpis enim, imperdiet sed metus ullamcorper,
                            ultricies porttitor elit. Nam lacus nulla, mattis id pharetra vitae, bibendum vitae quam.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 10,
        padding : 10,
        elevation : 10,
        backgroundColor : 'white'
    },
    flexImg : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 20
    },
    flexContent : {
        marginHorizontal : 20
    },
    image : {
        width : 150,
        height : 200
    }
})