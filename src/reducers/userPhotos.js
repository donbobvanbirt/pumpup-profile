export default function userPhotos(state = {}, action) {
  switch (action.type) {
  case 'GOT_USER_FEED_PHOTOS':
    return action.payload
  default:
    return state
  }
}
