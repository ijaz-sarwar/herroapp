import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actionsheet'
function AddHero({ navigation }) {
  let actionsheet = useRef();
  let optionArray = [
    "choose from Gallery", "Take Photo", "cancel"
  ]



  const [data, setData] = useState({
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Images-superhero-hd-wallpapers.jpg",
    title: "",
    description: ""
  })
  const optionSheet = () => {
    actionsheet.current.show();
  }
  const ImagePickerHandler = (index) => {

    const options = {
      storageOptions: {
        path: "image",
        mediaType: "photo",
      },
      includeBase64: true,
    }
    if (index === "Take Photo") {
      ImagePicker.openCamera({

        cropping: true,
      }).then(image => {
        handleChange("url", image.path)
      });
    }
    if (index === "choose from Gallery") {
      ImagePicker.openPicker({

        cropping: true
      }).then(image => {
        console.log(image, "images");
        handleChange("url", image.path)
      });
    }
  }
  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, margin: 20 }}>
          <View style={{ margin: 12 }}>
            <Text style={{ fontWeight: 'bold' }}>Image Upload</Text>
            <TouchableOpacity style={{ width: 100, height: 100, }} onPress={optionSheet}>
              <Image source={{ uri: data.url }}
                style={{ width: 100, height: 100, borderRadius: 50 }} />
            </TouchableOpacity>
          </View>
          <View style={{ margin: 12 }}>
            <Text style={{ fontWeight: 'bold' }}>Title</Text>
            <TextInput
              style={{ height: 40, marginTop: 10, borderWidth: 1, padding: 10, borderRadius: 10 }}
              onChangeText={(text) => handleChange("title", text)}
              placeholder="Title"
            />
          </View>
          <View style={{ margin: 12, }}>
            <Text style={{ fontWeight: 'bold' }}>Description</Text>
            <TextInput
              multiline
              style={{ height: 100, marginTop: 10, borderWidth: 1, padding: 10, borderRadius: 10 }}
              onChangeText={(text) => handleChange("description", text)}
              placeholder="Description"
            />
          </View>
          <TouchableOpacity style={{
            width: "auto", borderRadius: 10, padding: 10,
            backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', margin: 20
          }}

            onPress={() => navigation.navigate('Heros', { data })}>
            <Text style={{ fontSize: 30 }}>
              Add Hero
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <ActionSheet
        ref={actionsheet}
        title={"Choose photo"}
        options={optionArray}
        cancelButtonIndex={2}
        destructiveButtonIndex={0}
        onPress={(index) => { ImagePickerHandler(optionArray[index]) }}
      />
    </SafeAreaView>
  );
}
export default AddHero;
