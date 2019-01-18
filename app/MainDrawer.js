import React from 'react';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './screens/Home';
import AboutStack from './screens/About';
import BookStack from './screens/Book';
// Drawer Navigator
const MainDrawer = createDrawerNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title:"Trang chủ",
        drawerIcon: <Icon name="ios-home" size={20} color={'#333'} />
      }
    },
    Book: {
      screen: BookStack,
      navigationOptions: {
        title:"Sách phật giáo",
        drawerIcon: <Icon name="ios-book" size={20} color={'#333'} />
      }
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        title:"Giới thiệu",
        drawerIcon: <Icon name="ios-person" size={20} color={'#333'} />
      }
    }
  },
  {
    // drawerType:'slide',
    // drawerPosition:'right',
    initialRouteName:'Home',
    activeBackgroundColor:'blue',
    drawerBackgroundColor:'#eee',
    contentOptions:{
        activeTintColor:'darkblue',
        inactiveTintColor:'#333',
        activeBackgroundColor:'#fff'
    }
  });
  
export default createAppContainer(MainDrawer);