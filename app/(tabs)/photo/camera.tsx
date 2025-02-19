import { View, Text } from 'react-native'
import React, { useState, useRef } from 'react'

import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import { Pressable } from '@/components/ui/pressable';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const RenderCamera = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [uri, setUri] = useState<string | null>();;
    const ref = useRef<CameraView>(null);

    const takePicture = async () => {
        const photo = await ref.current?.takePictureAsync();
        setUri(photo?.uri);
        // console.log('Photo Uri', photo?.uri);
    }
        // console.log('Uri State', uri);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    return(
        <CameraView 
            style={{ height: 600 }}
            facing={facing}
            enableTorch={true}
            autofocus='on'
            ref={ref}
        >
            <View>
                <Pressable onPress={takePicture}>
                    {({ pressed }) => (
                        <View>
                            {pressed ? 
                                <MaterialIcons name="radio-button-on" size={84} color="black" />
                                :
                                <Ionicons name="radio-button-on" size={94} color="black" />
                            }
                      </View>
                    )}
                </Pressable>
            </View>
        </CameraView>
    )
}

export default RenderCamera