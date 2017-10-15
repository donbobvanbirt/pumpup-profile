import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'
import { Text, View, TouchableHighlight } from 'react-native'

import styles from '../../styles'



class Bio extends Component {
  state = { showEntireBio: false }

  // truncate = (bio) => {
  //   if (!bio) {
  //     return ''
  //   }
  //
  //   const bioArr = bio.split(/\n\s*\n/)
  //   console.log('bioArr:', bioArr)
  //   // return bio.replace(/\n\s*\n/g, '\n')
  //   return this.truncateText(`${bioArr[0]}\n${bioArr[1]}\n${bioArr[2]}`)
  //   // return bio.replace(/\n/g, ' ')
  // }

  formatLinks = (str) => {
    const lineSplit = str.split(/\n\s*\n/).join(' [newLine] ')
    console.log('lineSplit:', lineSplit)
    return lineSplit.split(' ').map((word, i) => {
      if (word[0] === '#' || word[0] === '@') {
        console.log('work:', word)
        // return <TouchableHighlight key={`bioItem-${i}`}>{word} </TouchableHighlight>
        return <Text style={{ color: 'blue' }} key={`bioItem-${i}`}>{word} </Text>
      }
      if (word === '[newLine]') {
        return <br />
      }
      return <Text key={`bioItem-${i}`}>{word} </Text>
    })
  }

  render() {
    const { bio } = this.props

    // const formattedBio = bio ? bio.replace(/\n\s*\n/g, '\n') : ''

    // <Text style={styles.bio}>{this.truncate(bio)}</Text>
    console.log('this.formatLinks(bio)', this.formatLinks(bio))
    return (
      <Text style={styles.bio}>{this.formatLinks(bio)}</Text>
    )
  }
}

Bio.propTypes = {
  bio: PropTypes.string.isRequired,
}

export default Bio
