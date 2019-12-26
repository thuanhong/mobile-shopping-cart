import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Images from '../utils/StaticResource'

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product : this.props.navigation.getParam('product', null)
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexImg}>
                    <Image source={Images[this.state.product.images[0]]} style={styles.image}/>
                    <Image source={Images[this.state.product.images[1]]} style={styles.image}/>
                </View>
                <View style={{flex : 1}}>
                    <View style={styles.flexDetail}>
                        <Text style={{color : 'red', fontSize : 20, textAlign : 'center'}}>{this.state.product.name}</Text>
                        <Text style={{fontSize: 17, textAlign : 'center'}}>Cost : {this.state.product.price}$</Text>
                        <Text style={{fontSize: 17, textAlign : 'center'}}>Color : {this.state.product.color}</Text>
                    </View>
                    <View style={styles.flexContent}>
                        <Text>{this.state.product.description}</Text>
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