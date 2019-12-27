import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native'
import Images from '../utils/StaticResource'


const deviceWidth = Dimensions.get('window').width * 0.9

export default class Card extends Component {

    arr_images = this.props.title.includes('COLLECTION') ? require('../../data/clothes.json').slice(0, 5) : require('../../data/clothes.json').slice(8, 14)
    numItems = this.arr_images.length
    itemWidth = (deviceWidth / this.numItems) - ((this.numItems - 1) * 10)
    animVal = new Animated.Value(0)
  
    render() {
      let imageArray = []
      let barArray = []
      this.arr_images.forEach((image, i) => {
        const thisImage = (
          <TouchableOpacity key={i} onPress={() => this.props.navigatePage('List', {
            title: this.props.title
          })}>
            <Image
              source={Images[image.images[0]]}
              style={{ width: deviceWidth, height : 200, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        )
        imageArray.push(thisImage)
  
        const scrollBarVal = this.animVal.interpolate({
          inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
          outputRange: [-this.itemWidth, this.itemWidth],
          extrapolate: 'clamp',
        })
  
        const thisBar = (
          <View
            key={`bar${i}`}
            style={[
              styles.track,
              {
                width: this.itemWidth,
                marginLeft: i === 0 ? 0 : 10,
              },
            ]}
          >
            <Animated.View
              style={[
                styles.bar,
                {
                  width: this.itemWidth,
                  transform: [
                    { translateX: scrollBarVal },
                  ],
                },
              ]}
            />
          </View>
        )
        barArray.push(thisBar)
      })
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25, color: 'grey',alignSelf: 'flex-start', margin : 10}}>{this.props.title}</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={10}
                  pagingEnabled
                  onScroll={
                      Animated.event(
                      [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                      )
                  }>
                  {imageArray}
                </ScrollView>
                <View style={styles.barContainer}>
                  {barArray}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container :{
    padding: 10,
    margin: 10,
    borderRadius : 3,
    backgroundColor : 'white',
    elevation : 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: "15%",
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})