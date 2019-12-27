import React from 'react'
import { Text, View, FlatList, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {connect} from 'react-redux'
import {Icon} from 'native-base'
import Images from '../utils/StaticResource';
import { throwStatement } from '@babel/types';

class Count extends React.Component {
    render() {
        return <Text style={{color:'white', fontSize: 10}}>{this.props.value}</Text>;
    }
}

let CountCart = connect(state => ({value: state.totalProduct}))(Count);


class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 1
        }
    }

    changeAmout(type, condition, amount) {
        if (condition) {
            this.props.dispatch({
                type: type,
                price: this.props.product.price
            })
            this.setState({
                amount: this.state.amount + amount
            })
        }
    }

    deleteProduct() {
        this.props.dispatch({
            type: 'DELETE',
            id: this.props.product.idProduct,
            price: this.state.amount * this.props.product.price,
            amount : this.state.amount
        })
    }


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
                        <View style={{fontWeight : 'bold', fontSize : 20, flex : 1, flexDirection: 'row'}}>
                            <Text style={{fontWeight : 'bold', fontSize : 20, flex : 1}}>{this.props.product.name}</Text>
                            <TouchableOpacity onPress={this.deleteProduct.bind(this)}>
                                <Icon  style={{color: 'red'}} name="delete" type="AntDesign"/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{flex : 1, fontSize : 17}}>Cost : {this.props.product.price}$</Text>
                        <Text style={{flex : 1, fontSize : 17}}>Color : {this.props.product.color}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={() => this.changeAmout('SUB', this.state.amount > 1, -1)} style={{paddingHorizontal: 7, borderColor: 'black', borderWidth: 1, borderRadius: 5}}>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text>{this.state.amount}</Text>
                            <TouchableOpacity onPress={() => this.changeAmout('ADD', this.state.amount < 11, 1)} style={{paddingHorizontal: 7, borderColor: 'black', borderWidth: 1, borderRadius: 5}}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


class Cart extends React.Component {
    static navigationOptions = {
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
                    <CountCart />
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={Object.values(this.props.listCart)}
                    renderItem={(item, index) => (
                        <Item product={item.item} dispatch={this.props.dispatch} navigate={this.props.navigation.navigate}/>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    style={{marginBottom: "15%"}}
                    extraData={Object.values(this.props.listCart)}
                    ListEmptyComponent={<Text>Empty</Text>}
                />
                <View style={{position: 'absolute', bottom:10, left:'2%', width: '96%'}}>
                    <Button
                        title={`Check out ${this.props.totalMoney}$`}
                        onPress={() => console.log(1)}
                    />
                </View>
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

export default connect(state => ({listCart: state.listCart, totalMoney: state.totalMoney}))(Cart);