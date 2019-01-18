import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

class BLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{width:this.props.width/2-20,height:this.props.width/2-40}}> 
            <View style={{flex:1}}>
                <Image source={this.props.imageUri} style={{flex:1,width: null,height:null,resizeMode:'cover'}}/>
            </View>
            <View style={{flex:1}}> 
                <Text style={{fontSize:12,fontFamily:'Arial',lineHeight:25}} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
            </View>
        </View>
    );
  }
}

export default BLog;
