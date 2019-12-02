import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, Text } from 'react-native'


const deviceWidth = Dimensions.get('window').width * 0.9

const images = [
  'https://place-hold.it/300x200',
  'https://place-hold.it/300x200',
  'https://place-hold.it/300x200',
  'https://place-hold.it/300x200',
  'https://place-hold.it/300x200',
]


export default class Card extends Component {
    numItems = images.length
    itemWidth = (deviceWidth / this.numItems) - ((this.numItems - 1) * 10)
    animVal = new Animated.Value(0)
  
    render() {
      let imageArray = []
      let barArray = []
      images.forEach((image, i) => {
        console.log(image, i)
        const thisImage = (
          <Image
            key={`image${i}`}
            source={{uri: image}}
            style={{ width: deviceWidth, height : 200 }}
          />
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
                    }
                >
                {imageArray}
                </ScrollView>
                <View
                style={styles.barContainer}
                >
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