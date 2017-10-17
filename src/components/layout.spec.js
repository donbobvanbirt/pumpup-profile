/*global shallow should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import React from 'react'
import configureMockStore from 'redux-mock-store'

import Layout from './Layout'

// const noop = () => {}

describe('Layout', () => {
  // const state = {
  //   userPhotos    : { result: { posts: [] } },
  //   popularPhotos : { result: { posts: [] } },
  //   profile       : {
  //     bio          : '',
  //     name         : '',
  //     profileImage : '',
  //     toggleBio    : noop,
  //     truncateBio  : true,
  //   }
  // }

  const store = configureMockStore()({})
  const wrapper = shallow(<Layout store={store} />)

  it('successfully renders', () => {
    should.equal(wrapper.length, 1)
  })
})
