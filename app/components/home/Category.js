import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    Dimensions
  } from 'react-native';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {width, height} = Dimensions.get('window');
    return (
        <View style={{width:width/3,height:130,marginLeft:15,borderColor:'#ddd',borderWidth:0.5}}>
            <View style={{flex:2}}>
                <Image source={this.props.uri} style={{flex:1,width:null,height:null,resizeMode:'cover'}}/>
            </View>
            <View style={{flex:1,paddingLeft:10, paddingTop:10}}>
                <Text>{this.props.title}</Text>
            </View>
        </View>
        
    );
  }
}

export default Category;
