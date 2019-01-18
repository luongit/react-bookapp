import React, { Component } from 'react';
import { StyleSheet, ScrollView, WebView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class BookView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Giới thiệu',
    headerRight: <Icon name="ios-menu" style={{ padding: 10, marginRight: 10 }} color={'#fff'} size={28}
    onPress={() => navigation.navigate('DrawerOpen')} />,
  })

  render() {
    const source = this.props.navigation.getParam('source', require('./../../public/html/404.html'));
    return (
      <WebView
        style={styles.WebViewStyle}
        source={source}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }
}

const BookViewStack = createStackNavigator({ BookView: BookView },
  {
    headerMode: 'none',
    defaultNavigationOptions: ({ navigation }) => ({
      headerVisible: false,
      headerTintColor: '#fff',
      headerTitle:'Hello',
      headerStyle: {
        backgroundColor: 'darkblue'
      }
    })
  });

export default BookViewStack;

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  }
});
