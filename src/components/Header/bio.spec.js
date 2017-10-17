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

  const getProps = (additionalProps = {}) => ({
    ...defaultProps,
    ...additionalProps
  })

  const wrapper = shallow(<Bio {...getProps()} />)

  describe('when with default props', () => {
    it('successfully renders', () => {
      should.equal(wrapper.length, 1)
    })
  })

})
