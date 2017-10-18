/*global should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import {
  profileSelector,
  userPhotosSelector,
  popularPhotosSelector,
} from './index'

const sampleStr      = '012345678901234567890123456789'
const bioPlaceholder = `${sampleStr}${sampleStr}${sampleStr}${sampleStr}`

const state = {
  profile       : {
    profileImage : 'imagePlaceholder',
    name         : 'namePlacehold',
    bio          : bioPlaceholder,
  },
  userPhotos    : [],
  popularPhotos : [],
  bio           : { truncateBio: false }
}


/**
 * getState - provides sample state with default and/or custom data
 *
 * @param  {Object} additionalValues
 * optional values to override default values
 *
 * @return {Object} sample Redux state for testing
 */
function getState(additionalValues = {}) {
  return {
    ...state,
    ...additionalValues,
  }
}



describe('selectors', () => {
  it('returns userPhotos', () => {
    should.deepEqual(userPhotosSelector(getState()), state.userPhotos)
  })

  it('returns popularPhotos', () => {
    should.deepEqual(popularPhotosSelector(getState()), state.popularPhotos)
  })

  it('returns profile', () => {
    const profile = profileSelector(getState())

    Object.keys(state.profile).forEach((key) => {
      should.equal(state.profile[key], profile[key])
    })
  })

  it('truncates bio', () => {
    let profile = profileSelector(getState())
    should.equal(profile.bio.length, 120)

    profile = profileSelector(getState({ bio: { truncateBio: true }}))
    should.equal(profile.bio.length, 100)
  })
})
