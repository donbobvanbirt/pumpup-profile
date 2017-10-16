import React                 from 'react'
import PropTypes             from 'prop-types'
import { Text, View, Image } from 'react-native'

import styles from '../../styles'

import Bio from './Bio'



const Header = ({
  bio,
  name,
  profileImage,
  toggleBio,
  truncateBio
}) => {

  return (
    <View style={styles.header}>
      <Image
        source={{ uri: profileImage }}
        style={styles.profileImage}
      />
      <View style={styles.headerContent}>
        <Text style={styles.name}>{name}</Text>
        <Bio
          bio={bio}
          toggleBio={toggleBio}
          truncateBio={truncateBio}
        />
      </View>
    </View>
  )
}

Header.propTypes = {
  bio          : PropTypes.string.isRequired,
  name         : PropTypes.string.isRequired,
  profileImage : PropTypes.string.isRequired,
  toggleBio    : PropTypes.func.isRequired,
  truncateBio  : PropTypes.bool.isRequired,
}

export default Header
