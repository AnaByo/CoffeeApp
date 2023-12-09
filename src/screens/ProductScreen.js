import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import {  ArrowLeftCircleIcon, HeartIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../../theme'


export default function ProductScreen(props) {
    const item= props.route.params;
    const navigation = useNavigation();
    const [size, setSize] = useState('small');
  return (
    <View style={{flex: 1}}>
        <StatusBar style='light'/>
        <Image source= {require('../../assets/img/beansBackground2.png')}
        style={styles.imageBeans}/>
        <SafeAreaView style={{marginVertical: 50, marginHorizontal: 10,}}>
            <View style={styles.containerDesc}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <ArrowLeftCircleIcon size={40} strokeWidth={1.2} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity style={{borderRadius: 100, borderColor: "white", borderWidth: 2, padding: 5}}>
                    <HeartIcon size={20} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.coffeeDesc}>
                <Image source={item.image} style={{height: 400, width: 200,}}/>
            </View>
            <View style={styles.coffeeAvaliation}>
                    <StarIcon size={15} color="white"/>
                    <Text style={styles.avaliation}>{item.stars}</Text>
            </View>
            <View style={styles.namePrice}>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.price}>
                    R${item.price}
                </Text>
            </View>
            <View style={{marginHorizontal: 10, marginVertical: 10, gap: 10,}}>
                <Text style={styles.sizeCoffee}>
                    Tamanho
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={styles.touchableSize}
                    onPress={()=> setSize('small')}
                    style={{backgroundColor: size=='small'? themeColors.bgLight: 'rgba(0,0,0,0.07)',
                    }}>
                        <Text style={{color: '#FFF'}}>Small</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    imageBeans: {
        height: 320, 
        borderBottomLeftRadius:60, 
        borderBottomRightRadius:60, 
        width: '100%',
        position: 'absolute',
    },
    containerDesc: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    coffeeDesc: {
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: 10,
        marginTop: '-15%',
    },
    coffeeAvaliation: {
        backgroundColor: themeColors.bgDark, 
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 100,
        paddingHorizontal: 13,
        marginHorizontal: 10,
        width: 70,
        height: 35,
        gap: 2,
        opacity: 0.9,
        marginTop: '-10%',
    },
    avaliation: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: '700',
    },
    namePrice: {
        marginHorizontal: 10, 
        marginVertical: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
    },
    price: {
        fontSize: 20,
        fontWeight: '400',
    },
    sizeCoffee: {
        fontSize: 18,
        fontWeight: '500',
    },
    touchableSize: {
        paddingHorizontal: 23,
        borderRadius: 100,
        backgroundColor: themeColors.bgLight,
        padding: 10,
    }
})