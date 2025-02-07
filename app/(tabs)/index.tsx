import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import React from "react";
import { Image } from "expo-image";

import Button from '@/components/Button'; 
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { PaginationDots } from '@/components/PaginationDots';

import { Button as ButtonGlue, ButtonText } from "@/components/ui/button"

const PlaceholderImage = require("@/assets/images/background-image.png");
const FrontBody = require('@/assets/images/FrontBody.jpg');
const BackBody = require('@/assets/images/BackBody.jpg');
const asymmetric = require('@/assets/images/asymmetric.png');
const irregularBorder = require('@/assets/images/irregular.png');
const melenomaGuidelines = require('@/assets/images/a-e_guidelines.png');

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

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
        <Text style={{ color: '#7F92A0'}} className="text-[12px] font-semibold">Take regular photos to monitor changes in your skin</Text>
      </View>
      <View className="w-full bg-slate-600/80 rounded-xl mt-[30] mb-[1] p-4">
        <Text className="mb-[10]">
          <Text className="text-slate-400 text-md">Welcome!</Text>
        </Text>
        <Text>
          <Text className="text-white font-extrabold text-lg mb-1">Nash Ivan Ramos</Text>
        </Text>
        <Text>
          <Text className="text-slate-400 text-md">Your last check-up was X days ago</Text>
        </Text>
        <Text>
          <Text className="text-slate-400 text-md">Result: Benign | Malignant</Text>
        </Text>
      </View>
    <View className="flex flex-row w-full mt-2 mb-4 gap-4">
      <View className="flex-1 max-w-180 bg-slate-600/80 rounded-xl p-4">
        <FontAwesome5 
          name="sun" 
          size={24} 
          color="#60A5FA"  // Using blue color to match design
          className="mb-2"
        />
        <Text className="text-white font-semibold text-lg mb-1">
          Check Monthly
        </Text>
        <Text className="text-slate-400 text-sm">
          Regular monitoring helps early detection
        </Text>
      </View>

      <View className="flex-1 max-w-180 bg-slate-600/80 rounded-xl p-4">
        <FontAwesome6 
          name="clock" 
          size={24} 
          color="#60A5FA"  // Keeping consistent blue for icons
          className="mb-2"
        />
        <Text className="text-white font-semibold text-lg mb-1">
          Track Changes
        </Text>
        <Text className="text-slate-400 text-sm">
          Documents the evolution of marks
        </Text>
      </View>
    </View>
    <View className="w-full" style={styles.footerContainer}>
      <ButtonGlue className="w-full h-[64] mb-[5] bg-orange-500 rounded-lg" onPress={takePhotoAsync} >
        <ButtonText>
          Take Photo
        </ButtonText>
      </ButtonGlue>
      <ButtonGlue className="w-full h-[64] rounded-lg" variant="outline" onPress={pickImageAsync}>
        <ButtonText className="text-white">
          Choose Photo
        </ButtonText> 
      </ButtonGlue>
    </View>

    <View className="w-full bg-[#1A2211] rounded-xl p-4 mt-20">
      <View className="flex-row items-center gap-2 mb-3">
        <Feather name="shield" size={24} color="#D4A72C" />
        <Text className="text-white font-semibold text-lg">ABCDE Guidelines</Text>
      </View>

      <View className="space-y-2">
        <Text className="text-sky-400/80 flex-row items-center">
          • <Text>Asymmetry: </Text>
          <Text className="text-sky-400/60">Two halves don't match</Text>
        </Text>

        <Text className="text-sky-400/80 flex-row items-center">
          • <Text>Border: </Text>
          <Text className="text-sky-400/60">Irregular or jagged edges</Text>
        </Text>

        <Text className="text-sky-400/80 flex-row items-center">
          • <Text>Color: </Text>
          <Text className="text-sky-400/60">Multiple colors or changes</Text>
        </Text>

        <Text className="text-sky-400/80 flex-row items-center">
          • <Text>Diameter: </Text>
          <Text className="text-sky-400/60">Larger than 6mm</Text>
        </Text>

        <Text className="text-sky-400/80 flex-row items-center">
          • <Text>Evolution: </Text>
          <Text className="text-sky-400/60">Changes over time</Text>
        </Text>
      </View> 
    </View> 
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
