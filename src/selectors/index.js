import { createSelector } from 'reselect'
import { isEmpty }        from 'lodash'

const profile  = state => state.profile
const truncate = state => state.bio

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
      bio: truncateBio ? bio.slice(0, 100) : bio,
      truncateBio,
    }
  }
)

export const userPhotosSelector = state => state.userPhotos

export const popularPhotosSelector = state => state.popularPhotos
