import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import {  ArrowLeftCircleIcon, HeartIcon, StarIcon, MinusIcon, PlusIcon, ShoppingBagIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../../theme'
import HomeScreen from './HomeScreen'


export default function ProductScreen(props) {
    const item= props.route.params;
    const navigation = useNavigation();
    const [size, setSize] = useState('small');

    const [volume, setVolume] = useState(1); 
    const less = () => {
    setVolume(prevQuantidade => Math.max(prevQuantidade - 1, 0));
  };
    const plus = () => {
    setVolume(prevQuantidade => prevQuantidade + 1);
  };

  return (
    <View style={{flex: 1}}>
        <StatusBar style='light'/>
        <Image source= {require('../../assets/img/beansBackground2.png')}
        style={styles.imageBeans}/>
        <SafeAreaView style={{marginVertical: 50, marginHorizontal: 10,}}>
            <View style={styles.containerDesc}>
                <TouchableOpacity onPress={()=> navigation.navigate()}>
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
                    R${getPriceForSelectedSize()}
                </Text>
            </View>
            <View style={{marginHorizontal: 10, marginVertical: 10, gap: 10,}}>
                <Text style={styles.sizeCoffee}>
                    Tamanho
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}
                >
                    <TouchableOpacity 
                    onPress={()=> setSize('small')}
                    style={{backgroundColor: size=='small'? themeColors.bgLight: 'rgba(0,0,0,0.07)',
                    paddingHorizontal: 23,
                    borderRadius: 100,
                    padding: 10,
                    }}>
                        <Text style={{color: size === 'small' ? styles.textActive.color : styles.textInactive.color}}>Médio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=> setSize('medium')}
                    style={{backgroundColor: size=='medium'? themeColors.bgLight: 'rgba(0,0,0,0.07)',
                    paddingHorizontal: 23,
                    borderRadius: 100,
                    padding: 10,
                    }}>
                        <Text style={{color: size === 'medium' ? styles.textActive.color : styles.textInactive.color}}>Pequeno</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    key={item.priceG}
                    onPress={()=> setSize('large')}
                    style={{backgroundColor: size=='large'? themeColors.bgLight: 'rgba(0,0,0,0.07)', 
                    paddingHorizontal: 23,
                    borderRadius: 100,
                    padding: 10,
                    }}>
                        <Text style={{color: size === 'large' ? styles.textActive.color : styles.textInactive.color}}>Grande</Text>
                    </TouchableOpacity>
                ))}
               </View>

            </View>
            <View style={{marginHorizontal: 10, marginVertical: 10, height: 120}}>
                <Text style={styles.sizeCoffee}>
                    Sobre
                </Text>
                <Text style={{color: '#707B7C', marginVertical: 10,}}>
                    {item.desc}
                </Text>
            </View>
            <View style={styles.volume}>
                <View style={styles.subVolume}>
                    <Text style={styles.textVolume}>Volume</Text>
                    <Text style={{fontSize: 20, color: 'black', fontWeight: '500', marginLeft: 10,}}>
                        {item.volume}
                    </Text>
            </View>
            <View style={styles.iconsVolume}>
                <TouchableOpacity onPress={less}>
                    <MinusIcon size="20" strokeWidth={3} color={themeColors.text}/>
                </TouchableOpacity>
                <Text style={styles.numberVolum}>{volume}</Text>
                <TouchableOpacity onPress={plus}>
                    <PlusIcon size="20" strokeWidth={3} color={themeColors.text}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.buttonBuy}>
                    <TouchableOpacity style={styles.buttonBag}>
                        <ShoppingBagIcon size="30" color="gray"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buyText}>
                            Comprar
                        </Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    imageBeans: {
        height: 290, 
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
        marginTop: '-23%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 6,
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
    textActive: {
        color: '#FFFFFF',
    },
    textInactive: {
        color: '#707B7C'
    },
    volume: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginHorizontal: 5,
    },
    subVolume: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    textVolume: {
        fontSize: 20,
        color: '#515A5A',
        fontWeight: '400',
        opacity: 0.9
    },
    iconsVolume: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        borderColor: '#707B7C',
        borderRadius: 100,
        padding: 10,
        width: '25%',
        borderWidth: 1,
    },
    numberVolum: {
        color: themeColors.text,
        fontWeight: '900',
        fontSize: 15,
    },
    buttonBuy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginVertical: 10,
    },
    buttonBag: {
        padding: 10,
        borderRadius: 100,
        borderColor: '#707B7C',
        borderWidth: 1,
    },
    buyText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
    },
    button: {
        backgroundColor: themeColors.bgLight,
        borderRadius: 100,
        flex: 1,
        padding: 12,
        marginLeft: 15,
        marginTop: 5,
    }
})