/*global shallow should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import React              from 'react'
import configureMockStore from 'redux-mock-store'

import Layout from './Layout'



describe('Layout', () => {

  const store   = configureMockStore()({})
  const wrapper = shallow(<Layout store={store} />)

  it('successfully renders', () => {
    should.equal(wrapper.length, 1)
  })
})
