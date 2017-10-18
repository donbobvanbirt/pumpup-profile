/*global shallow should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import React from 'react'
import Grid  from './index'

describe('Grid', () => {

  const wrapper = shallow(<Grid images={[]} />)

  it('successfully renders', () => {
    should.equal(wrapper.length, 1)
  })
})
