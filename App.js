import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView
} from 'react-native';


import AppContainer from './app/MainDrawer' 
class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}



export default App;
