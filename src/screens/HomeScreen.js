import React from "react";
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

export default function HomeScreen() {
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

        <View style={{ margin: 10 }} className="mx-5 mt-14">
          <View style={styles.container4}>
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
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
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => setCategory(item.id)}
                  style={{ backgroundColor: "rgba(0,0,0,0,07)" }}
                  className="p-4 px-5 rounded-full mr-2 shadow"
                >
                  <Text className="font-semibold">{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
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
    height: "19%",
    width: "12%",
    borderRadius: 100,
    marginTop: "10%",
  },
  container2: {
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },    
  container3: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "40%",
  },
  city: {
    fontSize: 10,
    fontWeight: "bold",
  },
  container4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
