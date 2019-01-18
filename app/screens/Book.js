import React, { Component } from 'react';
import { StyleSheet, ScrollView, View,Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import BookCategory from './../components/book/Category';
import Books from './../datasource/books';
import BookView from './book_view';
import Home from './Home';
class Book extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'SÁCH PHẬT GIÁO',
        headerLeft: <Icon
            name="ios-book" color="#fff"
            size={28}
            style={{ padding: 10, marginLeft: 10,fontWeight:'bold' }} />,
    })
    render() {
    
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', flex: 1, marginTop:10 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 15}}>
                      SÁCH PHẬT GIÁO
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                {
                    Books.map((item, index) => (
                        <BookCategory img={item.img} key={item.id} navigation={this.props.navigation} title={item.title} source={item.source} />
                    ))
                }
                </View>
            </ScrollView>
        );
    }
}

const BookStack = createStackNavigator({ Book: Book, BookView: BookView },
{
    defaultNavigationOptions: ({ navigation }) => ({
        headerTintColor: '#fff',
        headerTitle: navigation.getParam('title','SÁCH PHẬT GIÁO'),
        headerRight: <Icon
        name="ios-menu" color="#fff"
        size={28} onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginRight: 10 }} />,
        headerStyle: {
            backgroundColor: 'darkblue'
        }
    })
});

export default BookStack;

const styles = StyleSheet.create({
    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 5,
    }
});
