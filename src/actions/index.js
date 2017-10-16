// max-len exeption for token
/*eslint max-len: ["error", { "ignoreStrings": true }]*/

import { post } from 'axios'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'

function gotProfile(data) {

  return {
    type    : 'GOT_PROFILE',
    payload : data
  }

}



function gotUserFeedPhotos(data) {

  return {
    type    : 'GOT_USER_FEED_PHOTOS',
    payload : data
  }

}



function gotPopularFeedPhotos(data) {

  return {
    type    : 'GOT_POPULAR_FEED_PHOTOS',
    payload : data
  }

}



function togglingBio() {

  return {
    type: 'TOGGLE_BIO',
    payload: true,
  }
}

export function toggleBio() {

  return (dispatch) => {
    dispatch(togglingBio())
  }
}



export function getProfile() {
  return (dispatch) => {

    post('http://api.pumpup.com/1/classes/User/318381', {
      _method       : 'GET',
      _version      : '5.0.5',
      _SessionToken : token,
    })
      .then((res) => dispatch(gotProfile(res.data)))
      .catch((err) => console.error('Error getting profile:', err))

  }
}



export function getUserFeedPhotos() {

  return (dispatch) => {

    post('http://api.pumpup.com/1/functions/feed/profile/load-batch', {
      isThumbnailsOnly : true,
      limit            : 5,
      userId           : 2707798,
      _method          : 'POST',
      _version         : '5.0.5',
      _SessionToken    : token,
    })
      .then((res) => dispatch(gotUserFeedPhotos(res.data)))
      .catch((err) => console.error('Error getting user photos:', err))

  }
}



export function getPopularFeedPhotos() {

  return (dispatch) => {

    post('http://api.pumpup.com/1/functions/feed/popular/load-batch', {
      isThumbnailsOnly : true,
      limit            : 18,
      _method          : 'POST',
      _version         : '5.0.5',
      _SessionToken    : token,
    })
      .then((res) => dispatch(gotPopularFeedPhotos(res.data)))
      .catch((err) => console.error('Error getting popular photos:', err))

  }
}
