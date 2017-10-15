import React                from 'react'
import PropTypes            from 'prop-types'
import { Text, ScrollView } from 'react-native'
import { connect }          from 'react-redux'
import _                    from 'lodash'

import styles from '../styles'

import Header from './Header'
import Grid   from './Grid'

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
    getPopularFeedPhotos()

  }



  render() {

    const { profile, userPhotos, popularPhotos } = this.props
    // console.log('profile.bio:', profile.bio)
    // console.log('userPhotos:', userPhotos)
    if (_.isEmpty(profile) || _.isEmpty(popularPhotos)) {
      return (
        <Text>loading...</Text>
      )
    }
    console.log('popularPhotos.result.posts:', popularPhotos.result.posts)

    return (
      <ScrollView style={styles.container}>
        <Header bio={profile.bio} name={profile.name} profileImage={profile.profileImage} />
        <Grid images={popularPhotos.result.posts} />
      </ScrollView>
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
