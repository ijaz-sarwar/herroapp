import * as React from 'react';
import { View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Hero() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Image source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Images-superhero-hd-wallpapers.jpg'}}
       style={{width: 200, height: 200}} />
    </View>
  );
}
export default Hero;
