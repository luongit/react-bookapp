import React, { Component } from 'react';
import { StyleSheet, ScrollView, WebView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class About extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'GIỚI THIỆU',
    headerLeft: <Icon
      name="ios-happy" color="#fff"
      size={28}
      style={{ padding: 10, marginLeft: 5 }} />
  })
  render() {
    return (
      <WebView
        style={styles.WebViewStyle}
        source={require('./../../public/html/chapter-1.html')}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

    );
  }
}

const AboutStack = createStackNavigator({ About: About },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTintColor: '#fff',
      headerRight: <Icon
      name="ios-menu" color="#fff"
      size={28} onPress={() => navigation.openDrawer()} style={{ padding: 10, marginRight: 10}} />,
      headerStyle: {
        backgroundColor: 'darkblue'
      }
    })
  });

export default AboutStack;

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  }
});
