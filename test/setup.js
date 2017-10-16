import should from 'should'
import { configure, mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon, { spy, stub } from 'sinon'
import sinonPromise from 'sinon-promise'
import configureMockStore from 'redux-mock-store'

sinonPromise(sinon)
configure({ adapter: new Adapter() })

global.should    = should
global.spy       = spy
global.stub      = stub
global.sinon     = sinon
global.mount     = mount
global.render    = render
global.shallow   = shallow
global.mockStore = configureMockStore()
