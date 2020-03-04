import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render () {
    return (
      <View>
        <View style={{width: 300, height: 200, backgroundColor: 'powderblue'}} />
        <View style={{width: 300, height: 200, backgroundColor: 'skyblue'}} />
        <View style={{width: 300, height: 200, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}
