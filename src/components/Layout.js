import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'

import { getProfile, getUserFeedPhotos, getPopularFeedPhotos } from '../actions'

class Layout extends React.Component {
  componentDidMount() {
    const { getProfile, getUserFeedPhotos, getPopularFeedPhotos } = this.props
    getProfile()
    getUserFeedPhotos()
    getPopularFeedPhotos()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    )
  }
}

Layout.propTypes = {
  getProfile: PropTypes.func.isRequired,
  getUserFeedPhotos: PropTypes.func.isRequired,
  getPopularFeedPhotos: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  getProfile() {
    dispatch(getProfile())
  },
  getUserFeedPhotos() {
    dispatch(getUserFeedPhotos())
  },
  getPopularFeedPhotos() {
    dispatch(getPopularFeedPhotos())
  },
})
// const mapStateToProps = state => ({
//
// });

export default connect(null, mapDispatchToProps)(Layout)
