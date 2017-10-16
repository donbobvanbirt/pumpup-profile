import React from 'react'
import should from 'should'
import Grid from './index'
import enzyme, { mount, render, shallow } from 'enzyme'

// enzyme.configure({ adapter: new Adapter() })

describe('Grid', () => {
  const wrapper = shallow(<Grid images={[]} />)
  console.log('in describe')
  it('successfully renders', () => {
    should.equal(wrapper.length, 1)

  })
})
