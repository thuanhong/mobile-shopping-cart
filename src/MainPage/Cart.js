import React from 'react'
import { Text, View, FlatList, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {connect} from 'react-redux'
import {Icon} from 'native-base'
import Images from '../utils/StaticResource';
import { NavigationEvents } from 'react-navigation'
import {removeByKey} from '../utils/SubFunction'


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
                            <TouchableOpacity onPress={() => this.props.deleteItemById(this.props.product.idProduct, this.state.amount, this.props.product.price)}>
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

    constructor(props) {
        super(props)
        this.state ={ 
            listCart : Object.values(this.props.listCart)
        }
    }

    deleteProduct(id, amount, price) {
        this.props.dispatch({
            type: 'DELETE',
            id: id,
            price: amount * price,
            amount : amount
        })
        this.setState({listCart : Object.values(removeByKey(this.props.listCart, id))})
    }

    checkOut() {
        const dateNow = new Date()
        this.props.dispatch({
            type: 'CHECKOUT',
            date: `${dateNow.getDate()}/${dateNow.getMonth()}/${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`,
            total: this.props.totalMoney
        })
        this.setState({listCart : []})
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <NavigationEvents
                    onWillFocus={() => this.setState({listCart : Object.values(this.props.listCart)})}
                />
                <FlatList
                    data={this.state.listCart}
                    renderItem={({item}) => (
                        <Item key={item.idProduct} product={item} dispatch={this.props.dispatch} navigate={this.props.navigation.navigate} deleteItemById={(id, amount, price) => this.deleteProduct(id, amount, price)}/>
                    )}
                    keyExtractor={(item, index) => item.idProduct.toString()}
                    style={{marginBottom: "15%"}}
                    extraData={this.state}
                    ListEmptyComponent={<Text style={{textAlign: "center", marginTop: '50%', fontSize: 20, color: '#a696b3'}}>Empty</Text>}
                />
                <View style={{position: 'absolute', bottom:10, left:'2%', width: '96%'}}>
                    <Button
                        title={`Check out ${this.props.totalMoney}$`}
                        onPress={this.checkOut.bind(this)}
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