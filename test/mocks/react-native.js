import React            from 'react'
import createReactClass from 'create-react-class'
import pt               from 'prop-types'



export const PropTypes = pt

export const StyleSheet = {
  create: (style) => style
}

export const PanResponder = {
  create: (obj) => obj
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



const ReactNativeMock = React

export const View                 = createComponent('View')
export const Text                 = createComponent('Text')
export const ActivityIndicatorIOS = createComponent('ActivityIndicatorIOS')
export const Image                = createComponent('Image')
export const TouchableHighlight   = createComponent('TouchableHighlight')
export const ScrollView           = createComponent('ScrollView')

ReactNativeMock.View                 = View
ReactNativeMock.Text                 = Text
ReactNativeMock.ActivityIndicatorIOS = ActivityIndicatorIOS
ReactNativeMock.Image                = Image
ReactNativeMock.TouchableHighlight   = TouchableHighlight
ReactNativeMock.ScrollView           = ScrollView
ReactNativeMock.StyleSheet           = StyleSheet
ReactNativeMock.Dimensions           = Dimensions
ReactNativeMock.PanResponder         = PanResponder

export default ReactNativeMock
