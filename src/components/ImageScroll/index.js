import React           from 'react'
import PropTypes       from 'prop-types'
import { ScrollView, View } from 'react-native'
import ResponsiveImage from 'react-native-responsive-image'

import styles from '../../styles'



const ImageScroll = ({ images }) => {

  return (
    <ScrollView
      style={styles.imageScroll}
      horizontal={true}
      showsHorizontalScrollIndicator={false}

    >
      {
        images.map((image) => (
          <View
            style={styles.scrollImageContainer}
            key={image.objectId}
          >
            <ResponsiveImage
              source={{ uri: image.thumbnail }}
              initWidth='300'
              initHeight='300'
            />
          </View>
        ))
      }
    </ScrollView>
  )
}

ImageScroll.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ImageScroll
