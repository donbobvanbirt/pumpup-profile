import React from 'react'
import should from 'should'
import Grid from './index'
import { mount, render, shallow } from 'enzyme'

describe('Grid', () => {
  const wrapper = shallow(<Grid images={[]} />)
  console.log('in describe')
  it('successfully renders', () => {
    should.equal(wrapper.length, 1)

  })
})
