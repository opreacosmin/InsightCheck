/*import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text } from 'react-native';

function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('Please add an image');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true, //return base64 data.
      //this will allow the Vision API to read this image.
    });
    if (!result.cancelled) { //if the user submits an image,
      setImage(result.uri);
      //run the onSubmit handler and pass in the image data. 
      const googleText = await onSubmit(result.base64);
    }
  };
  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, resizeMode:"contain" }}
        />
      )}
    </View>
  );
}
export default ImagePickerComponent;*/

// ImagePickerComponent.js
import * as ImagePicker from 'expo-image-picker';
import React, { useState,useEffect } from 'react';
import { Button, Image, View } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Text } from 'react-native';

function ImagePickerComponent({ onSubmit }) {
    const [image, setImage] = useState(null);
    const [finaltext, setText] = useState("Please select an image");
    React.useEffect(() => {
        (async () => {
          if (Constants.platform?.ios) {
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
        allowsEditing: true,
        //aspect: [1,1],
        quality: 1,
    });
  
    //console.log("Image Picker Result:", result); // Log the result
    //console.log("Image Picker Result:", result.assets[0].uri); // Log the result
    //console.log("Image Picker Uri:", JSON.stringify(result)); // Log the result
  
    if (!result.canceled) {
        setImage(result.assets[0].uri);
        setText("Loading...");
        //console.log("text:", text); // Log the result
        //console.log("base64:", result.assets[0].base64); // Log the result
        const responseData = await onSubmit(result.assets[0].base64);
        //console.log("responsedata:", responseData); // Log the result
        if (responseData.text) {
            setText(responseData.text.replace(/(\r\n|\n|\r)/gm, ' '));
        } else {
            setText("Text not found in response data.");
        }
        //console.log("response:", responseData.text); // Log the result

        //console.log("text:", text); // Log the result

        //console.log("responsedataafterset:", setText); // Log the result
    }
};


return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 400, height: 300, resizeMode: "contain" }}
        />
      )}
      <View>      
        <Text>{finaltext}</Text>
      </View>
    </View>
  );

}

export default ImagePickerComponent;
