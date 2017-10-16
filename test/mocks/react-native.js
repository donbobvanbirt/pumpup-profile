import React from "react";
import createReactClass from 'create-react-class'
import PT from 'prop-types'

const RN = React;

export const PropTypes = PT;

export const StyleSheet = {
  create: (style) => style
}

export const Dimensions = {
  get: () => ({ width: 350 })
}

const createComponent = (type) => {
  console.log('type:', type)
  return createReactClass({
    displayName: type,
    propTypes: {
      children: PropTypes.node
    },
    render() {
      return <div {...this.props}>{this.props.children}</div>;
    }
  });
};

RN.View = createComponent("View");
RN.Text = createComponent("Text");
RN.ActivityIndicatorIOS = createComponent("ActivityIndicatorIOS");
RN.Image = createComponent("Image");
RN.TouchableHighlight = createComponent("TouchableHighlight");
RN.ScrollView = createComponent("ScrollView");
RN.StyleSheet = StyleSheet
RN.Dimensions = Dimensions

export default RN;
