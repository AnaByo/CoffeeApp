import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  FlagIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
import { categories } from "../constants/index";
import { themeColors } from "../../theme";
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from "../components/Cards/index.js";

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState(1)

  return (
    <View style={styles.container}>
      <StatusBar />
      <Image
        source={require("../../assets/img/beansBackground1.png")}
        style={styles.beansBack}
      />
      <SafeAreaView style={{ flex: 1 }}>


        <View style={styles.container2}>
          <Image
            source={require("../../assets/img/avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.container3}>
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text style={styles.city}>São Paulo, SP</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>

        <View style={{ marginHorizontal: 15, marginTop: 60,  }}>
          <View style={styles.container4}>
            <TextInput
              placeholder="Search"
              style={styles.search}
            />
            <TouchableOpacity
              style={styles.touchableOpacity}
            >
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{paddingHorizontal: 15, marginTop: 10, }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id==activeCategory;
              let activeTextClass = isActive ? styles.activeText : styles.inactiveText;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)', 
                  padding: 17, paddingHorizontal: 20, borderRadius: 80, marginRight: 5}}
                >
                  <Text style={{fontWeight: 'bold'} + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View >

        <View style={{marginTop: 10, paddingVertical: 10,}}>
            {/* <Carousel 
              containerCustomStyle={{overflow: 'visible'}}
              // data={coffeeItems}
              renderItem={({item})=> <CoffeeCard item={item}/>}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={400}
              itemWidth={260}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            /> */}
            <CoffeeCard/>
          </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#FFF",
  },
  beansBack: {
    height: 220,
    width: "100%",
    opacity: 0.1,
    position: "absolute",
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
  container2: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
  },    
    container3: {
      flexDirection: "row",
      alignItems: "center",
    },
    city: {
      fontSize: 15,
      fontWeight: "bold",
    },
    container4: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 40,
      backgroundColor: '#E6E6E6',
      marginTop: 10,
      padding: 5,
      
    },
    search: {
      padding: 15,
      flex: 1,
      fontWeight: 'bold',
    },
    touchableOpacity: {
      backgroundColor: themeColors.bgLight, 
      borderRadius: 100, 
      width: 50, 
      height: 50, 
      padding: 12,
    },
    touchableItem:{
      backgroundColor: '#E6E6E6',
      padding: 15,
      paddingHorizontal: 15,
      borderRadius: 100,
      marginRight: 5,
      marginTop: 10,
    },
    activeText: {
      color: '#FFFFFF',
    },
    inactiveText: {
      color: '#A9A9A9', 
    }

    // className="p-4 px-5 rounded-full mr-2 shadow"

});
