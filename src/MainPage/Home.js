import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Card from '../utils/Card'


class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayColor : ['black', 'red', 'yellow', 'blue', 'grey', 'violet']
        }
    }

    render() {
        return(
            <View style={styles.top_product}>
                <Text style={{fontSize: 25, color: 'grey',alignSelf: 'flex-start', margin : 10}}>TOP PRODUCT</Text>
                <View style={styles.gridview}>
                    {
                        this.state.arrayColor.map((color, index) => {
                            const costRandom = (Math.random() * 100).toFixed(2)
                            return (
                                <TouchableOpacity key={color} style={styles.grid} onPress={() => this.props.navigate('Detail', {
                                    cost : costRandom,
                                    color : color
                                })}>
                                    <Image source={{uri : 'https://place-hold.it/150x200'}} style={styles.image}/>
                                    <Text style={styles.cost}>Cost : {costRandom}$</Text>
                                    <Text>Color : {color}</Text>
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
    changeScreen() {
        console.log('navigate')
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <Card navigatePage={this.props.navigation.navigate.bind(this)} title={"CLOTHES"}/>
                <Card navigatePage={this.props.navigation.navigate.bind(this)} title={"ELECTRIC DEVICES"}/>
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