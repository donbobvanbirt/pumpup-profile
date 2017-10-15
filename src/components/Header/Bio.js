import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'
import { Text, View, TouchableHighlight } from 'react-native'

import styles from '../../styles'



class Bio extends Component {
  state = { showEntireBio: false }

  formatLinks = (str) => {

    return str
      // keep track of line-breaks
      .replace(/\n\s*\n/g, ' [lineBreak] ')
      .split(' ')
      .map((word, i) => {

        // create links out of hashtags and usernames
        if (word[0] === '#' || word[0] === '@') {
          return <Text style={styles.bioLink} key={`bioItem-${i}`}>{word} </Text>
        }

        // maintain line-breaks
        if (word === '[lineBreak]') {
          return <Text key={`bioItem-${i}`}>{' \n'}</Text>
        }

        return <Text style={styles.bioWord} key={`bioItem-${i}`}>{word} </Text>
      })
  }

  render() {
    const { bio } = this.props

    return (
      <Text style={styles.bio}>{this.formatLinks(bio)}</Text>
    )
  }
}

Bio.propTypes = {
  bio: PropTypes.string.isRequired,
}

export default Bio
