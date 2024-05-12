import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const TabBarComponent = (props: BottomTabBarProps) => {
    const [pressedIcon, setPressedIcon] = useState<string | null>(null);

    const handleIconPress = (iconName: string) => {
        setPressedIcon(iconName);
        props.navigation.navigate(iconName);
    };

    return (
        <View style={{
            position: 'absolute',
            bottom: 30, backgroundColor: '#000000',
            width: 350,
            alignSelf: 'center',
            height: 70,
            borderRadius: 50,
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Pressable
                onPress={() => handleIconPress("Home")}
                onPressIn={() => setPressedIcon("Home")}
            >
                <Icon name='home' size={30} color={(pressedIcon === 'Home' ? '#6d0cdd' : '#fff')} />
            </Pressable>
            <Pressable
                onPress={() => handleIconPress("Search")}
                onPressIn={() => setPressedIcon("Search")}
            >
                <Icon name='search' size={30} color={(pressedIcon === 'Search' ? '#6d0cdd' : '#fff')} />
            </Pressable>
            <Pressable
                onPress={() => handleIconPress("Favorite")}
                onPressIn={() => setPressedIcon("Favorite")}
            >
                <Icon name='heart' size={30} color={(pressedIcon === 'Favorite' ? '#6d0cdd' : '#fff')} />
            </Pressable>
        </View>
    )
}
