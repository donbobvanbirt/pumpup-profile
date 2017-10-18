/*global shallow should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import React from 'react'

import Header from './index'
import Bio    from './Bio'

const noop = () => {}



describe('Header', () => {
  const defaultProps = {
    bio          : '',
    name         : '',
    profileImage : '',
    toggleBio    : noop,
    truncateBio  : true,
  }

  const wrapper = shallow(<Header {...defaultProps} />)

  it('successfully renders', () => {
    should.equal(wrapper.length, 1)
  })

  it('renders Bio component', () => {
    should.equal(wrapper.find(Bio).length, 1)
  })
})
