import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DeviceHeight, DeviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';

const Details = props => {
  const [data, setData] = useState('');
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{color: 'grey', fontSize: 20}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 20}}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('../Whether/assets/images/india.jpg')}
        style={{height: DeviceHeight, width: DeviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}></ImageBackground>
      <View style={{position: 'absolute'}}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: DeviceWidth - 10,
          }}>
          <Icon name="menu" size={45} color="white"></Icon>
          <Image
            source={require('../Whether/assets/images/user.jpg')}
            style={{
              height: 40,
              width: 45,
              borderRadius: 50,
              marginLeft: 30,
            }}></Image>
        </View>
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: DeviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                {data['whether'][0]['main']}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 40}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{color: 'white', fontSize: 20, marginBottom: 15}}>
                Whether Details
              </Text>

              <View style={{width: DeviceWidth - 60}}>
                <Data value={data['wind']['speed']} title="Wind"></Data>
                <Data value={data['main']['pressure']} title="Pressure"></Data>
                <Data
                  value={`${data['main']['humidity']}%`}
                  title="Humidity"></Data>
                <Data value={data['visibility']} title="Visibility"></Data>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Details;
