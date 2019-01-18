import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';

class BookCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 15, marginTop: 15 }} >
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }}>
                    <Image source={this.props.img} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                </View>
                <View style={{ width: width - 55, height: 50, marginLeft: 5, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookView',{source: this.props.source,title:this.props.title})}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.title}</Text>
                    </TouchableOpacity>
                </View>
            </View>


        );
    }
}

export default BookCategory;
