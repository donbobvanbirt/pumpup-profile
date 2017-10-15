import React          from 'react'
import PropTypes      from 'prop-types'
import { Text, View } from 'react-native'
import { connect }    from 'react-redux'
import _              from 'lodash'

import styles from '../styles'

import Header from './Header'

import {
  getProfile,
  getUserFeedPhotos,
  getPopularFeedPhotos
} from '../actions'

class Layout extends React.Component {

  componentDidMount() {

    const {
      getProfile,
      getUserFeedPhotos,
      getPopularFeedPhotos
    } = this.props

    getProfile()
    // getUserFeedPhotos()
    // getPopularFeedPhotos()

  }



  render() {

    const { profile, userPhotos, popularPhotos } = this.props
    console.log('profile.bio:', profile.bio)
    // console.log('userPhotos:', userPhotos)
    // console.log('popularPhotos:', popularPhotos)
    if (_.isEmpty(profile)) {
      return (
        <Text>loading...</Text>
      )
    }

    return (
      <View style={styles.container}>
        <Header bio={profile.bio} name={profile.name} profileImage={profile.profileImage} />
        {/* <Text>Open up App.js to start working on your app!</Text> */}
      </View>
    )
  }
}



Layout.propTypes = {
  getProfile           : PropTypes.func.isRequired,
  getUserFeedPhotos    : PropTypes.func.isRequired,
  getPopularFeedPhotos : PropTypes.func.isRequired,
  profile              : PropTypes.object.isRequired,
  userPhotos           : PropTypes.object.isRequired,
  popularPhotos        : PropTypes.object.isRequired,
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

const mapStateToProps = ({
  profile,
  userPhotos,
  popularPhotos
}) => ({
  profile,
  userPhotos,
  popularPhotos
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
