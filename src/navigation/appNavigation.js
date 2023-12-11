import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { LogBox, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid} from 'react-native-heroicons/solid';
import { themeColors } from '../../theme';
import ProductScreen from '../screens/ProductScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([

]);

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
                    contentStyle: {backgroundColor: 'white'}
                }}>
                <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeTabs}/>
                <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function HomeTabs(){
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon:  ({focused, color, size}) => menuIcons(route, focused),
                tabBarStyle: {
                    backgroundColor: themeColors.bgLight,
                    height: 75,
                },
                tabBarItemStyle: {
                }
            })}>
                <Tab.Screen name="home" component={HomeScreen}/>
                <Tab.Screen name="favourite" component={HomeScreen}/>
                <Tab.Screen name="cart" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

const menuIcons = (route, focused)=> {
    let icon;
    if(route.name=='home'){
        icon = focused ? <HomeSolid size={30} color='white' />: <HomeOutline size={30} strokeWidth={2} color='white'/>
    }else if (route.name=='favourite'){
        icon = focused ? <HeartSolid size={30} color='white' />: <HeartOutline size={30} strokeWidth={2} color='white'/>
    }else if (route.name=='cart'){
        icon = focused ? <BagSolid size={30} color='white' />: <BagOutline size={30} strokeWidth={2} color='white'/>
    }
    let buttonClass = focused? styles.focusedButton : '';
    return(
        <View style={styles.menuIcons}>
            {icon}
        </View>
    )
}

const styles = StyleSheet.create({
    menuIcons:  {
        flex: 1,
        alignItems: 'center',
        borderRadius: 100,
        padding: 20,
    },
})