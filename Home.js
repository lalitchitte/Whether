import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {DeviceHeight, DeviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

const Home = props => {
  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'LosAngeles',
      image: require('../Whether/assets/images/mumbai.jpg'),
    },
    {
      name: 'NewYork',
      image: require('../Whether/assets/images/delhi.jpg'),
    },
    {
      name: 'Banglore',
      image: require('../Whether/assets/images/banglore.jpg'),
    },
    {
      name: 'Jaipur',
      image: require('../Whether/assets/images/jaipur.jpg'),
    },
    {
      name: 'Agra',
      image: require('../Whether/assets/images/india.jpg'),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require('../Whether/assets/images/india1.jpg')}
        style={{height: DeviceHeight, width: DeviceWidth}}
        imageStyle={{backgroundColor: 'black'}}></ImageBackground>
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
        <View style={{paddingHorizontal: 20, marginVertical: 110}}>
          <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
            Welcome
          </Text>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Search the City by Name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 15,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={data => setCity(data)}
              placeholder="Search City"
              placeholderTextColor={'white'}
              style={{
                paddingHorizontal: 10,
                fontSize: 15,
                color: 'white',
              }}></TextInput>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {
                  name: city,
                })
              }>
              <Icon name="search" size={20} color="white"></Icon>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingHorizontal: 10,
              marginTop: 160,
              marginBottom: 20,
            }}>
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}></FlatList>
        </View>
      </View>
    </View>
  );
};

export default Home;
