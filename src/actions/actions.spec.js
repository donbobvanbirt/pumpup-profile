/*global should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import configureMockStore from 'redux-mock-store'
import thunk              from 'redux-thunk'

const mockStore = configureMockStore([thunk])

import {
  getProfile,
  getUserFeedPhotos,
  getPopularFeedPhotos,
  toggleBio,
} from './index'



// returns promise of action from the store
// allows asyncronous functions to be handled
function getActionFromStore(store, interval = 1800) {
  return new Promise((res, rej) => {
    const newActions = store.getActions()
    // delays response, workaround for
    // promises not working in mock store
    setTimeout(function () {
      if (newActions && newActions[0]) {
        res(newActions[0])
      } else {
        rej('error fetching actions')
      }
    }, interval)
  })
}



describe('actions', () => {
  it('gets profile', () => {
    const store = mockStore({})
    store.dispatch(getProfile())
    return getActionFromStore(store)
      .then((action) => {
        should.equal(action.type, 'GOT_PROFILE')
        should.exist(action.payload.bio)
        should.exist(action.payload.name)
        should.exist(action.payload.profileImage)
      })
  })

  it('gets user feed images', () => {
    const store = mockStore({})
    store.dispatch(getUserFeedPhotos())
    return getActionFromStore(store)
      .then((action) => {
        should.equal(action.type, 'GOT_USER_FEED_PHOTOS')
        should.exist(action.payload.result.posts)
      })
  })

  it('gets popular feed images', () => {
    const store = mockStore({})
    store.dispatch(getPopularFeedPhotos())
    return getActionFromStore(store)
      .then((action) => {
        should.equal(action.type, 'GOT_POPULAR_FEED_PHOTOS')
        should.exist(action.payload.result.posts)
      })
  })

  it('toggles bio', () => {
    const store = mockStore({})
    store.dispatch(toggleBio())
    return getActionFromStore(store, 5)
      .then((action) => {
        should.equal(action.type, 'TOGGLE_BIO')
      })
  })
})
