import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Button from '@/components/Button'; 
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image');
    }
  };

  const takePhotoAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('No photo was taken.');
    }
  };

  return (
    <View style={styles.container}>
      <View className="pt-[15] pb-[5]">
        <Text className="text-custom-xlg font-extrabold text-white">Track Your Skin Health</Text>
      </View>
      <View>
        <Text style={{ color: '#7F92A0'}} className="text-[14px] font-semibold">Take regular photos to monitor changes in your skin</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Take photo" onPress={takePhotoAsync} />
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
