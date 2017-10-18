/*global shallow should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import React from 'react'

import ImageScroll from './index'



describe('ImageScroll', () => {
  const defaultProps = {
    images: []
  }

  const wrapper = shallow(<ImageScroll {...defaultProps} />)

  it('successfully renders', () => {
    should.equal(wrapper.length, 1)
  })

})
