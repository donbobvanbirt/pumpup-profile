import { createSelector } from 'reselect'
import { isEmpty }        from 'lodash'

import { summarizeString } from '../utils'

/**
 * profile - selects profile from state
 * @param  {Object} state Redux state
 * @return {Object} profile from state
 */
const profile  = state => state.profile

/**
 * truncate - selects bio object from state
 * @param  {Object} state Redux state
 * @return {Object} informs whether or not bio should be summarized
 */
const truncate = state => state.bio




/**
 * profileSelector - selects profile from state
 * determines whether bio should be summarized or not
 * @return {Object} objects from state
 */
export const profileSelector = createSelector(
  profile,
  truncate,
  (profile, truncate) => {
    if (isEmpty(profile)) {
      return {}
    }

    const { profileImage, name, bio } = profile
    const { truncateBio } = truncate

    return {
      profileImage: profileImage,
      name: name,
      bio: truncateBio ? summarizeString(bio) : bio,
      truncateBio,
    }
  }
)



/**
 * userPhotosSelector - selects user photos from state
 * @param  {Object} state Redux state
 * @return {Object} userPhotos from state
 */
export const userPhotosSelector = state => state.userPhotos

/**
 * popularPhotosSelector - selects popular photos from state
 * @param  {Object} state Redux state
 * @return {Object} userPhotos from state
 */
export const popularPhotosSelector = state => state.popularPhotos
