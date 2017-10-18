import { post } from 'axios'

const token = [
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
  'eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0',
  'UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g',
].join('.')



/**
 * gotProfile - sends profile data to store
 * @param  {Object} data contains profile data
 * @return {Object} redux call
 */
function gotProfile(data) {

  return {
    type    : 'GOT_PROFILE',
    payload : data
  }

}


/**
 * gotUserFeedPhotos - sends user images to store
 * @param  {Object} data contains user images data
 * @return {Object} redux call
 */
function gotUserFeedPhotos(data) {

  return {
    type    : 'GOT_USER_FEED_PHOTOS',
    payload : data
  }

}


/**
 * gotPopularFeedPhotos - sends popular photos to store
 * @param  {Object} data contains popular photos data
 * @return {Object} redux call
 */
function gotPopularFeedPhotos(data) {

  return {
    type    : 'GOT_POPULAR_FEED_PHOTOS',
    payload : data
  }

}



/**
 * togglingBio - toggles bio summary mode
 * @return {Object} redux call
 */
function togglingBio() {

  return {
    type    : 'TOGGLE_BIO',
    payload : true,
  }
}



/**
 * toggleBio - dispatches bio summary toggle
 * @return {Func} store dispatch
 */
export function toggleBio() {

  return (dispatch) => {
    dispatch(togglingBio())
  }
}



/**
 * getProfile - makes api call to get profile data
 * @return {Func} store dispatch
 */
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



/**
 * getUserFeedPhotos - makes api call to get user feed photos
 * @return {Func} store dispatch
 */
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



/**
 * getPopularFeedPhotos - makes api call to get popular feed photos
 * @return {Func} store dispatch
 */
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
