import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Card from '../utils/Card'
import Images from '../utils/StaticResource';


class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayColor : require('../../data/clothes.json').slice(20, 26)
        }
    }

    render() {
        return(
            <View style={styles.top_product}>
                <Text style={{fontSize: 25, color: 'grey',alignSelf: 'flex-start', margin : 10}}>TOP PRODUCT</Text>
                <View style={styles.gridview}>
                    {
                        this.state.arrayColor.map((product, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.grid} onPress={() => this.props.navigate('Detail', {
                                    product: product
                                })}>
                                    <Image source={Images[product.images[0]]} style={styles.image}/>
                                    <Text style={styles.cost}>Price : {product['price']}$</Text>
                                    <Text>Color : {product['color']}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}

export default class Home extends React.Component {
    render() {
        return(
            <ScrollView style={styles.container}>
                <Card navigatePage={this.props.navigation.navigate.bind(this)} title={"SPRING COLLECTION"}/>
                <Card navigatePage={this.props.navigation.navigate.bind(this)} title={"NEW RPODUCTS"}/>
                <View>
                    <Grid navigate={this.props.navigation.navigate.bind(this)}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ebecf0',
        flex : 1
    },
    top_product : {
        padding: 10,
        margin: 10,
        borderRadius : 3,
        backgroundColor : 'white',
        elevation : 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid: {
        marginTop: 15
    },
    gridview : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-around',
    },
    image : {
        width : 150,
        height : 200,
    },
    cost : {
        color : '#ff0000',
        fontWeight : 'bold',
        fontSize: 15,
        marginTop : 10
    }
})