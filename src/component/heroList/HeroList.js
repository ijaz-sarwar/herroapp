import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
function HeroList(props) {
  const route = useRoute();
  const [state, setState] = useState(true)
  const [listData, setListData] = useState([])
  useEffect(() => {
    if (props.route.params && state) {
      setListData([...listData, props.route.params.data])
      setState(false)
    }

  }, [route])
  const renderItem = ({ item, index }) => (
    <TouchableOpacity onLongPress={() => hanleDelete(item, index)}>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('DetailHero', ({ listData, index }))}> */}
      <View style={{ flex: 0.5, flexDirection: 'row', margin: 10 }}>

        <Image source={{ uri: item.url }}
          style={{ width: 80, height: 80, borderRadius: 50 }} />
        <View style={{ margin: 10, width: "70%" }}>
          <Text style={{ fontSize: 20 }}>
            {item.title}
          </Text>
          <Text>{item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    // </TouchableOpacity>

  );
  const hanleDelete = (item, index) => {
    Alert.alert(
      'Delete This',
      'Are you sure want to delete this  ?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => deleteAddressDetail(item, index) },
      ],
      { cancelable: false }
    )
  }
  const deleteAddressDetail = (item, index) => {

    let a = listData.filter((item, i) => index !== i)
    setListData(a)

  }
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', margin: 20 }}

        onPress={() => props.navigation.navigate('AddHero', setState(true))}>
        <Text style={{ fontSize: 30 }}>
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default HeroList;
