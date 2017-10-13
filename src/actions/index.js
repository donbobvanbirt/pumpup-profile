import { post } from 'axios'

const _SessionToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g`

export function getProfile() {
  return (dispatch) => {
    post('http://api.pumpup.com/1/classes/User/318381', {
      _method : 'GET',
      _version: '5.0.5',
      _SessionToken
    })
      .then((res) => {
        // console.log('res.data:', res.data)
      })
      .catch((err) => console.error('Error getting profile:', err))
  }
}

export function getUserFeedPhotos() {
  return (dispatch) => {
    post('http://api.pumpup.com/1/functions/feed/profile/load-batch', {
      isThumbnailsOnly: true,
      limit: 5,
      userId: 2707798,
      _method: 'POST',
      _version: '5.0.5',
      _SessionToken
    })
      .then((res) => {
        // console.log('res.data:', res.data)
      })
      .catch((err) => console.error('Error getting profile:', err))
  }
}

export function getPopularFeedPhotos() {
  return (dispatch) => {
    post('http://api.pumpup.com/1/functions/feed/popular/load-batch', {
      isThumbnailsOnly: true,
      limit: 18,
      _method: 'POST',
      _version: '5.0.5',
      _SessionToken
    })
      .then((res) => {
        console.log('res.data:', res.data)
      })
      .catch((err) => console.error('Error getting profile:', err))
  }
}
