import React                 from 'react'
import PropTypes             from 'prop-types'
import { Text, View, Image } from 'react-native'

import styles from '../../styles'



const Header = ({ bio, name, profileImage }) => {
  const formattedBio = bio ? bio.replace(/\n\s*\n/g, '\n') : ''
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: profileImage }}
        style={styles.profileImage}
      />
      <View style={styles.headerContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{formattedBio}</Text>
      </View>
    </View>
  )
}

Header.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
}

export default Header
