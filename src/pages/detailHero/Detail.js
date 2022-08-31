import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';

function Detail({ item, index }) {
  const [singleItem, setSingleItem] = useEffect(null)

  console.log(item, "dddddd");
  useEffect(() => {


  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: item }}
        style={{ width: 200, height: 200 }} />
    </View>
  );
}
export default Detail;
