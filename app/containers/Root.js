import React, { Component } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import VersionChecker from './VersionChecker'
import Icon from 'react-native-vector-icons/FontAwesome'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <VersionChecker />
      </Provider>
    )
  }
}
