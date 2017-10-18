/*global shallow should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import React from 'react'

import Bio from './Bio'

const noop = () => {}



describe('Bio', () => {

  const defaultProps = {
    bio          : '',
    toggleBio    : noop,
    truncateBio  : true,
  }

  const wrapper = shallow(<Bio {...defaultProps} />)

  it('successfully renders', () => {
    should.equal(wrapper.length, 1)
  })

})
