import { combineReducers } from 'redux'

import profile       from './profile'
import userPhotos    from './userPhotos'
import popularPhotos from './popularPhotos'
import bio           from './bio'

export default combineReducers({
  profile,
  userPhotos,
  popularPhotos,
  bio
})
