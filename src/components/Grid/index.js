import React           from 'react'
import PropTypes       from 'prop-types'
import { View, Image } from 'react-native'
import ResponsiveImage from 'react-native-responsive-image';

import styles from '../../styles'



const Grid = ({ images }) => {

  return (
    <View style={styles.grid}>
      {
        images.map((image) => (
          <View key={image.objectId} style={styles.gridImageContainer}>
            <ResponsiveImage
              source={{ uri: image.thumbnail }}
              initWidth='135'
              initHeight='135'
            />
          </View>
        ))
      }
    </View>
  )
}

Grid.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Grid
