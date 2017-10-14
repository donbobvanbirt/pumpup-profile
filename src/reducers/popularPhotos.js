export default function popularPhotos(state = {}, action) {

  switch (action.type) {
  case 'GOT_POPULAR_FEED_PHOTOS':
    return action.payload
  default:
    return state
  }

}
