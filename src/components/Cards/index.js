import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../../../theme';
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';


export default function CoffeeCard({item}){
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image 
                    source={item.image} style={{height: 250, width: 250}}/>
            </View>
            <View style={styles.container3}>
                <Text style={styles.titleCoffee}>{item.name}</Text>
                <View style={styles.coffeeAvaliation}>
                    <StarIcon size={15} color="white"/>
                    <Text style={styles.avaliation}>{item.stars}</Text>
                </View>
                <View style={{flexDirection: 'row', }}>
                    <Text style={styles.volume}>
                        Volume
                    </Text>
                    <Text style={styles.numberVol}>
                        {item.volume}
                    </Text>
                </View>

                <View style= {styles.container4}>
                    <Text style={styles.price}>R${item.price}</Text>
                    <TouchableOpacity style={{padding: 5, backgroundColor: "#FFF", borderRadius: 100}}>
                        <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
        marginTop: 70,
        marginVertical: 20,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '-50%',
        zIndex: 10
    },
    container3: {
        paddingHorizontal: 15,
        marginTop: 5,
    },
    titleCoffee: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: '700',  
    },
    coffeeAvaliation: {
        backgroundColor: 'rgba(255,255,255,0.2)', 
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 100,
        padding: 2,
        paddingHorizontal: 13,
        width: 70,
        height: 35,
        marginTop: 5,
        gap: 2,
    },
    avaliation: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: '700',
    },
    volume: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: '300',
        opacity: 0.8
    },
    numberVol: {
        fontSize:  15,
        color: '#FFF',
        fontWeight: '700',
    },
    price: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    container4: {
        backgroundColor: themeColors.bgDark,
        shadowColor: themeColors.bgDark,
        shadowRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})