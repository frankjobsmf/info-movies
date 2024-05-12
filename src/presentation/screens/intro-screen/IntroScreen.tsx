import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { globalStyles } from '../../../config/theme/globalStyles';

export const IntroScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Tab')
        }, 2500)
    }, [])

    return (
        <View style={[{
            ...globalStyles.container,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
        }]}>
            <Image
                
                style={{
                    height: 200,
                    width: 200,
                    resizeMode: 'contain',
                    
                }}
                source={require('./logo-no-background.png')}
            />
        </View>
    )
}
