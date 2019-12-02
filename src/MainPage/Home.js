import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Card from '../utils/Card'


class Grid extends React.Component {
    render() {
        return(
            <View style={styles.gridview}>
                <View style={styles.grid}>
                    <Image source={{uri : 'https://place-hold.it/150x200'}} style={styles.image}/>
                    <Text style={styles.cost}>Cost : 12.09 $</Text>
                </View>
                <View style={styles.grid}>
                    <Image source={{uri : 'https://place-hold.it/150x200'}} style={styles.image}/>
                    <Text style={styles.cost}>Cost : 43.09 $</Text>
                </View>
                <View style={styles.grid}>
                    <Image source={{uri : 'https://place-hold.it/150x200'}} style={styles.image}/>
                    <Text style={styles.cost}>Cost : 43.09 $</Text>
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
                {/* <Card title={"CLOTHES"}/>
                <Card title={"ELECTRIC DEVICES"}/> */}
                <View>
                    <Text style={{fontSize: 25, color: 'grey',alignSelf: 'flex-start', margin : 10}}>TOP PRODUCT</Text>
                    <Grid/>
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
    gridview : {
        padding: 10,
        margin: 10,
        borderRadius : 3,
        backgroundColor : 'white',
        elevation : 5,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-around',
    },
    image : {
        width : 150,
        height : 200,
    },
    // grid : {
    //     marginRight : 'auto',
    //     marginLeft: 'auto'
    // },
    cost : {
        color : '#ff0000',
        fontWeight : 'bold',
        fontSize: 15,
        marginTop : 10
    }
})