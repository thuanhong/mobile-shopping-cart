import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default class SettingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            telephone: '',
            address: ''
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    onChangeText={(username) => this.setState({username})}
                    style={styles.input}
                    placeholder={'Username'}
                    defaultValue={'Thuanhong'}
                />
                <TextInput
                    onChangeText={(username) => this.setState({username})}
                    style={styles.input}
                    placeholder={'Address'}
                    defaultValue={'Address'}
                />
                <TextInput
                    onChangeText={(username) => this.setState({username})}
                    style={styles.input}
                    placeholder={'Telephone'}
                    defaultValue={'Telephone'}
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color : 'white', textAlign: 'center', fontWeight: 'bold'}}>UPDATE INFORMATION</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        backgroundColor: '#d4d7d9'
    },
    input : {
        borderColor : '#8cc9f0',
        borderStyle: 'solid',
        borderWidth : 2,
        margin : 10,
        borderRadius: 10,
        paddingLeft : 20,
        backgroundColor : 'white'
    },
    btn: {
        backgroundColor : '#3d99ce',
        margin : 10,
        padding: 14,
        borderRadius: 10,
    }
})