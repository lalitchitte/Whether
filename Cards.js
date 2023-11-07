import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {DeviceHeight, DeviceWidth} from './Dimensions';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 10}}
      onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={{
          height: DeviceHeight / 5,
          width: DeviceWidth / 2 - 50,
        }}
        imageStyle={{borderRadius: 15}}></ImageBackground>

      <View style={{position: 'absolute', height: 100, width: 100}}>
        <Text
          style={{
            fontSize: 18,
            width: 100,
            height: 100,
            textAlign: 'center',
            fontWeight: 'bold',
            marginLeft: 25,
            color: 'black',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
