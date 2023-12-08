import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../../../theme'

export default function CoffeeCard({item}){
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text>Coffee</Text>
                <Image source={item.image} style={{height: 30, width: 30}}/>            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
    },
    container2: {
        shadowColor: '#000',
        shadowRadius: 30,
        shadowOffset: {width: 0, height: 40},
        shadowOpacity: 0.8
    }
})