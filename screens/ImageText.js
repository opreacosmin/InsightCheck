/*import React from 'react';
import { View } from 'react-native';
import ImagePickerComponent from "../components/ImagePickerComponent";

function ImageText(){
  return (
    <View>
      <ImagePickerComponent onSubmit={console.log} />
    </View>
  );
};

export default ImageText;*/

// ImageText.js
import React from 'react';
import { View } from 'react-native';
import ImagePickerComponent from "../components/ImagePickerComponent";
import callGoogleVisionAsync from '../components/helperFunctions.js';


function ImageText(){

  return (
    <View>
      <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
    </View>
  );
};

export default ImageText;
