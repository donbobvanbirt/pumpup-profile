export default function profile(state = {}, action) {
  switch (action.type) {
  case 'GOT_PROFILE':
    return action.payload
  default:
    return state
  }
}
