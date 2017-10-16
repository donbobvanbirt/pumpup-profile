export default function profile(state = { truncateBio: true }, action) {

  switch (action.type) {
  case 'TOGGLE_BIO':
    return { truncateBio: !state.truncateBio }
  default:
    return state
  }

}
