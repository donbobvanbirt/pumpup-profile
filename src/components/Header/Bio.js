import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from '../../styles'



class Bio extends Component {

/**
 * make links out of '#' and '@'.
 * @param  {String[]} str Bio to be formatted.
 * @return {Array[]} formatted into react-native components.
 */
  formatLinks = (str) => {
    return str
      // keep track of line-breaks
      .replace(/\n\s*\n/g, ' [lineBreak] ')
      .split(' ')
      .map((word, i) => {
        // create links out of hashtags and usernames
        if (word[0] === '#' || word[0] === '@') {
          return (
            <TouchableHighlight
              key={`bioItem-${i}`}
              onPress={() => {}}
            >
              <Text style={styles.bioLink}>{word} </Text>
            </TouchableHighlight>
          )
        }

        // maintain line-breaks
        if (word === '[lineBreak]') {
          return <View style={styles.lineBreak} key={`bioItem-${i}`} />
        }

        return <Text style={styles.bioWord} key={`bioItem-${i}`}>{word} </Text>
      })
  }



  render() {
    const { bio, toggleBio, truncateBio } = this.props
    const formattedBio = this.formatLinks(bio)

    return (
      <View style={styles.bio}>
        {formattedBio}
        <TouchableHighlight
          onPress={toggleBio}
        >
          <Text style={styles.bioLink}>
            {
              truncateBio ?
                '...read more' :
                '...show less'
            }
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}



Bio.propTypes = {
  bio         : PropTypes.string.isRequired,
  toggleBio   : PropTypes.func.isRequired,
  truncateBio : PropTypes.bool.isRequired,
}

export default Bio
