import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from '../../styles'



class Bio extends Component {
  state = { truncateBio: true }



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
          return <View style={styles.lineBreak} key={`bioItem-${i}`}><Text>{' '}</Text></View>
        }

        return <Text style={styles.bioWord} key={`bioItem-${i}`}>{word} </Text>
      })
  }



  render() {
    const { bio } = this.props
    const { truncateBio } = this.state
    const formattedBio = this.formatLinks(bio)

    return truncateBio ?
      (
        <View style={styles.bio}>
          {formattedBio.slice(0, 21)}
          <TouchableHighlight
            onPress={() => this.setState({ truncateBio: false })}
          >
            <Text style={styles.bioLink}>...read more</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View style={styles.bio}>
          {formattedBio}
          <TouchableHighlight
            onPress={() => this.setState({ truncateBio: true })}
          >
            <Text style={styles.bioLink}>...show less</Text>
          </TouchableHighlight>
        </View>
      )
  }
}



Bio.propTypes = {
  bio: PropTypes.string.isRequired,
}

export default Bio
