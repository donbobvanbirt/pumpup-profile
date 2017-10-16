import { createSelector } from 'reselect'
import _                  from 'lodash'

const profile  = state => state.profile
const truncate = state => state.bio

export const profileSelector = createSelector(
  profile,
  truncate,
  (profile, truncate) => {
    if (_.isEmpty(profile)) {
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
