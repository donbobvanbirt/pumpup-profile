import React                from 'react'
import PropTypes            from 'prop-types'
import { ScrollView, View } from 'react-native'
import { connect }          from 'react-redux'
import _                    from 'lodash'
import GiftedSpinner        from 'react-native-gifted-spinner'

import styles from '../styles'

import Header      from './Header'
import ImageScroll from './ImageScroll'
import Grid        from './Grid'

import {
  getProfile,
  getUserFeedPhotos,
  getPopularFeedPhotos,
  toggleBio,
} from '../actions'

import {
  profileSelector,
  userPhotosSelector,
  popularPhotosSelector,
} from '../selectors'

class Layout extends React.Component {

  componentDidMount() {

    const {
      getProfile,
      getUserFeedPhotos,
      getPopularFeedPhotos
    } = this.props

    getProfile()
    getUserFeedPhotos()
    getPopularFeedPhotos()
  }



  render() {

    const {
      profile,
      userPhotos,
      popularPhotos,
      toggleBio
    } = this.props

    if (_.isEmpty(profile) || _.isEmpty(popularPhotos) || _.isEmpty(userPhotos)) {
      return (
        <View style={styles.spinnerContainer}>
          <GiftedSpinner />
        </View>
      )
    }

    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Header
          bio         ={profile.bio}
          name        ={profile.name}
          profileImage={profile.profileImage}
          toggleBio   ={toggleBio}
          truncateBio ={profile.truncateBio}
        />
        <ImageScroll images={userPhotos.result.posts} />
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
  toggleBio            : PropTypes.func.isRequired,
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
  toggleBio() {
    dispatch(toggleBio())
  },
})

const mapStateToProps = (state) => ({
  profile       : profileSelector(state),
  userPhotos    : userPhotosSelector(state),
  popularPhotos : popularPhotosSelector(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
