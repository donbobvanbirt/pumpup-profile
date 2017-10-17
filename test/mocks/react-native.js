import React from 'react'
import createReactClass from 'create-react-class'
import pt from 'prop-types'

const ReactNativeMock = React

export const PropTypes = pt

export const StyleSheet = {
  create: (style) => style
}

export const Dimensions = {
  get: () => ({ width: 350 })
}

const createComponent = (type) => {

  return createReactClass({
    displayName: type,
    propTypes: {
      children: PropTypes.node
    },
    render() {
      return <div {...this.props}>{this.props.children}</div>
    }
  })
}

ReactNativeMock.View                 = createComponent('View')
ReactNativeMock.Text                 = createComponent('Text')
ReactNativeMock.ActivityIndicatorIOS = createComponent('ActivityIndicatorIOS')
ReactNativeMock.Image                = createComponent('Image')
ReactNativeMock.TouchableHighlight   = createComponent('TouchableHighlight')
ReactNativeMock.ScrollView           = createComponent('ScrollView')
ReactNativeMock.StyleSheet           = StyleSheet
ReactNativeMock.Dimensions           = Dimensions

export default ReactNativeMock
