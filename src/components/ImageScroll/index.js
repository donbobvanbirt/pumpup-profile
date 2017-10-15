import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  PanResponder,
  TouchableHighlight,
  Dimensions
} from 'react-native'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    height        : width,
  },
  imageContainer: {
    width,
    height         : width,
    flex           : 1,
    justifyContent : 'center',
    alignItems     : 'center',
  },
  image: {
    width  : width * 0.9,
    height : width * 0.9
  },
  buttons: {
    height         : 15,
    marginTop      : -15,
    flex           : 1,
    justifyContent : 'center',
    alignItems     : 'center',
    flexDirection  : 'row'
  },
  button: {
    margin          : 3,
    width           : 8,
    height          : 8,
    borderRadius    : 8 / 2,
    backgroundColor : '#ccc',
    opacity         : 0.9
  },
  buttonSelected: {
    opacity: 1,
    backgroundColor: '#888',
  }
})



export default class ImageScroll extends Component {
  state = {
    position  : 0,
    scrolling : false,
  }

  componentWillMount() {
    // set function to trigger after scroll release
    this.panResponder = PanResponder.create({
      // onPanResponderTerminate : this.handleRelease.bind(this),
      onPanResponderRelease   : this.handleRelease.bind(this),
    })
  }



  // insures that the scroll view bounces to next image
  handleRelease(e, gestureState) {
    const { dx, vx }       = gestureState
    const { position }     = this.state
    const { images }       = this.props
    const relativeDistance = dx / width

    let change = 0
    console.log('gestureState:', gestureState)
    // check if distance scrolled is more or less that half of screen
    if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
      change = 1
    } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
      change = -1
    }

    // ensure there are more images to scroll to
    if (change + position >= images.length) {
      change = 0
    }

    this.handleScroll(position + change)
    return true
  }

  handleEnd(e) {
    console.log('in handleEnd')
  }



  // handle scrolling to specified image
  handleScroll(index) {
    // do nothing is index is negative
    if (index < 0) { return }

    this.scrollRef.scrollTo({
      x        : width * index,
      y        : 0,
      animated : true,
    })

    this.setState({ position: index })
  }



  handleRef(ref) {
    this.scrollRef = ref
  }



  render() {
    const { position } = this.state
    const { images }   = this.props

    return (
      <View>
        <ScrollView
          decelerationRate={0.99}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          {...this.panResponder.panHandlers}
          ref={ref => this.handleRef(ref)}
          style={styles.container}>
          {images.map((image) => (
            <View
              style={styles.imageContainer}
              key={`scroll-image-${image.objectId}`}
              {...this.panResponder.panHandlers}
              onScroll={console.log('in onScroll')}
            >
              <Image
                source={{ uri: image.thumbnail }}
                style={styles.image}
                onTouchEnd={this.handleEnd}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttons}>
          {images.map((image, i) => {
            return (
              <TouchableHighlight
                key={`scroll-button-${image.objectId}`}
                underlayColor="#ccc"
                onPress={() => this.handleScroll(i)}
                style={[styles.button, position === i && styles.buttonSelected]}
              >
                <View />
              </TouchableHighlight>
            )
          })}
        </View>
      </View>
    )
  }
}

ImageScroll.propTypes = {
  images: PropTypes.array.isRequired,
}
