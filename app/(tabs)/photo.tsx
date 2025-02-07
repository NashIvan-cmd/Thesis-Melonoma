import { View, Text, Animated } from 'react-native'
import React, { useState } from 'react'
import { Image } from "expo-image";

const FrontBody = require('@/assets/images/FrontBody.jpg');
const BackBody = require('@/assets/images/BackBody.jpg');

import { Button as ButtonGlue, ButtonText } from "@/components/ui/button"


const Photo = () => {
    const [bodyPosition, setBodyPosition] = useState<'Front Body' | 'Back Body'>('Front Body');
    
    const toggleBodyPostion = (): void => {
    if (bodyPosition === 'Front Body') {
        setBodyPosition('Back Body');
    } else {
        setBodyPosition('Front Body');
    }
    }

  return (
    <View className='flex-1 bg-[#fff] p-[20] items-center'>
      <View className='items-center'>
        <Text>0 spots</Text>
        <Image 
            source={
                bodyPosition === "Front Body" ? 
                FrontBody : BackBody
            } 
            style={{ width: 320, height: 620 }}
        />
      </View>
      <View>
        <ButtonGlue onPress={toggleBodyPostion}>
            <ButtonText>{bodyPosition}</ButtonText>
        </ButtonGlue>
      </View>
    </View>
  )
}

export default Photo