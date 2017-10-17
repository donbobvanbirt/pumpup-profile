/*global should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import { isEmpty } from 'lodash'

import profile       from './profile'
import userPhotos    from './userPhotos'
import popularPhotos from './popularPhotos'
import bio           from './bio'



describe('reducers', () => {
  describe('bio reducer', () => {
    it('return initial state', () => {
      should.equal(bio(undefined, {}).truncateBio, true)
    })

    it('handles TOGGLE_BIO', () => {
      should.equal(bio(undefined, { type: 'TOGGLE_BIO' }).truncateBio, false)
    })
  })

  describe('profile reducer', () => {
    it('return initial state', () => {
      should.equal(isEmpty(profile(undefined, {})), true)
    })

    it('handles GOT_PROFILE', () => {
      should.equal(
        profile(
          undefined,
          {
            type: 'GOT_PROFILE',
            payload: 'profile placeholder',
          }
        ),
        'profile placeholder'
      )
    })
  })

  describe('userPhotos reducer', () => {
    it('return initial state', () => {
      should.equal(isEmpty(userPhotos(undefined, {})), true)
    })

    it('handles GOT_USER_FEED_PHOTOS', () => {
      should.equal(
        userPhotos(
          undefined,
          {
            type: 'GOT_USER_FEED_PHOTOS',
            payload: 'photos placeholder',
          }
        ),
        'photos placeholder'
      )
    })
  })

  describe('popularPhotos reducer', () => {
    it('return initial state', () => {
      should.equal(isEmpty(popularPhotos(undefined, {})), true)
    })

    it('handles GOT_POPULAR_FEED_PHOTOS', () => {
      should.equal(
        popularPhotos(
          undefined,
          {
            type: 'GOT_POPULAR_FEED_PHOTOS',
            payload: 'photos placeholder',
          }
        ),
        'photos placeholder'
      )
    })
  })
})
