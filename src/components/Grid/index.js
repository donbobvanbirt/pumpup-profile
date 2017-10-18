import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Dimensions } from 'react-native'

import styles from '../../styles'

const width    = Dimensions.get('window').width
const oneThird = width * 0.32



const Grid = ({ images }) => (
  <View style={styles.grid}>
    {
      images.map((image) => (
        <View key={image.objectId} style={styles.gridImageContainer}>
          <Image
            source={{ uri: image.thumbnail }}
            style={{ width: oneThird, height: oneThird }}
          />
        </View>
      ))
    }
  </View>
)



Grid.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Grid
