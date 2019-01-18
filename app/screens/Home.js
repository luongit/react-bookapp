import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './../components/home/Category';
import Blog from './../components/home/Blog';
class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Trang chủ',
    headerLeft: <Icon
      name="ios-home" color="#fff"
      size={28} 
      style={{ padding: 10, marginLeft: 5,fontWeight:'bold' }} />
  })
  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 15 }}>
            Videos moi nhat
          </Text>
        </View>
        <View style={{ height: width / 3, marginTop: 15, paddingHorizontal: 15 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category uri={require('./../../public/images/img-1.jpg')} title="This is the title" />
            <Category uri={require('./../../public/images/img-1.jpg')} title="This is the title" />
            <Category uri={require('./../../public/images/img-1.jpg')} title="This is the title" />
            <Category uri={require('./../../public/images/img-1.jpg')} title="This is the title" />
            <Category uri={require('./../../public/images/img-1.jpg')} title="This is the title" />
          </ScrollView>
        </View>
        <View style={{ marginTop: 0, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }} >
            Lorem ipsum dolor sit amet
            </Text>
          <Text style={{ fontSize: 12, fontFamily: 'Arial', lineHeight: 25 }} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorum quod debitis voluptas possimus ut non molestiae consequuntur quas reiciendis voluptatum eos sequi vitae sapiente nihil, commodi cumque. Culpa, dolorem.
            </Text>
          <View style={{ width: width - 30, height: 200, marginTop: 10 }}>
            <Image source={require('./../../public/images/img-1.jpg')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 15 }}>Blog news</Text>
          <View style={{ marginTop: 10, paddingHorizontal: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Blog width={width} imageUri={require('./../../public/images/img-1.jpg')} />
            <Blog width={width} imageUri={require('./../../public/images/img-1.jpg')} />
            <Blog width={width} imageUri={require('./../../public/images/img-1.jpg')} />
            <Blog width={width} imageUri={require('./../../public/images/img-1.jpg')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const HomeStack = createStackNavigator({ Home: Home },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTintColor: '#fff',
      headerTitle: 'TRANG CHỦ',
      headerRight: <Icon
      name="ios-menu" color="#fff"
      size={28} onPress={() => navigation.openDrawer()}
      style={{ padding: 10, marginRight: 10 }} />,
      headerStyle: {
        backgroundColor: 'darkblue'
      }
    })
  });

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
