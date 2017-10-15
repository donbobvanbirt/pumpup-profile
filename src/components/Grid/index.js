import React           from 'react'
import PropTypes       from 'prop-types'
import { View, Image } from 'react-native'

import styles from '../../styles'



const Grid = ({ images }) => {

  return (
    <View style={styles.grid}>
      {
        images.map((image) => (
          <Image
            source={{ uri: image.thumbnail }}
            key={image.objectId}
            style={styles.profileImage}
          />
        ))
      }
    </View>
  )
}

Grid.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Grid
