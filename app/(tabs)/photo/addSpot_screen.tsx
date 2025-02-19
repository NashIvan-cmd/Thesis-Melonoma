import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { Image } from 'expo-image';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import { Input, InputField } from '@/components/ui/input';
import { Textarea, TextareaInput } from "@/components/ui/textarea"
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Primary_Pressable, Secondary_Pressable } from '@/components/Pressable';

const melanoma_logo_2 = require('@/assets/images/melanoma_logo_2.png');

import RenderCamera from '@/app/(tabs)/photo/camera'

const AddSpot_screen = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      {showCamera ? (
        <RenderCamera />
      ) : (
        <View className='flex-1 bg-custom-dark items-center justify-center pl-10 pr-10'>
          <View className='flex flex-row'>
            <Image source={melanoma_logo_2} contentFit='contain' style={styles.image} />
            <Text className='text-custom-xlg font-extrabold text-white mt-[40] mr-[40]'>MOLE Spot</Text>
          </View>
          <View className='w-full'>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText 
                  className='text-custom-lg font-extrabold text-white'
                >Mole Location</FormControlLabelText>
              </FormControlLabel>
              <Input
                variant='outline'
                size='xl'
                isDisabled={false}
                isReadOnly={false}
                isInvalid={false}
                isFullWidth={true}
                isFocused={false}
                className='text-black bg-white border-black-600 rounded-lg'
              >
                <InputField placeholder='e.g Outside Left Leg'/>
              </Input>
            <FormControlLabel>
              <FormControlLabelText 
                className='text-custom-lg font-extrabold text-white'
              >Define Location</FormControlLabelText>
            </FormControlLabel>
            <Textarea
              size="xl"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              className="text-black bg-white border-black rounded-lg"
            >
              <TextareaInput 
                placeholder={`e.g The one closest to my thumb`} 
                className='text-black placeholder-gray' 
              />
            </Textarea>
            </FormControl>
          </View>
          <View className='w-full mt-10'>
            <View className='mb-3'>
              <Primary_Pressable label='Take Picture' onPressOut={() => setShowCamera(true)} />
            </View>
            <View className='mb-5'>
              <Secondary_Pressable label='Cancel' />
            </View>
            
          </View>
      </View>
      )
      }
    </>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 100,
  },
});

export default AddSpot_screen