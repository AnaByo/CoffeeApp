import React from 'react'
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { FlagIcon, MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline';
import {categories} from '../constants/index';

export default function HomeScreen() {
    return (
        <View className="flex-1 relative bg-white">
            <StatusBar />
            <Image source={require('../assets/img/coffe.jpg')}
                className="w-full absolute -top-5 opacity-10"
                style={{ height: 220 }}
            />
            <SafeAreaView className="flex-1">
                <View className="">
                    <Image source={require('../assets/img/avatar.png')}
                        className="h-9 w-9 rounded-full" />
                    <View className="flex-row items-center space-x-2">
                        <MapPinIcon size="25" color={themeColors.bgLight} />
                        <Text className="text-base font-semibold">São Paulo, SP</Text>
                    </View>
                    <BellIcon size="27" color="black" />
                </View>

                <View className="mx-5 mt-14">
                    <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
                        <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700" />
                        <TouchableOpacity className="rounded-full p-2"
                            style={{backgroundColor: themeColors.bgLight}}
                        >
                            <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="px-5 mt-6">
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item=> item.id}
                        className="overflow-visible"
                        renderItem={({item})=>{
                            return(
                                <TouchableOpacity
                                    onPress={()=> setCategory(item.id)}
                                    style={{backgroundColor: 'rgba(0,0,0,0,07)'}}
                                    className="p-4 px-5 rounded-full mr-2 shadow"
                                >
                                    <Text className="font-semibold">
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                        />
                </View>
            </SafeAreaView>
        </View>
    )
}
