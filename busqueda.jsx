import { Image, Input } from "@rneui/themed";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Buscar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 70,
        }}
      >
        <MaterialIcons name="search" size={24} color="black" style={{marginTop: 40}} />

<Input
        style={styles.search}
        containerStyle={{
          backgroundColor: "lightgray",
          marginTop: 30,
          width: 340,
          
          borderRadius: 5,
          height: 50,
        }}
        inputContainerStyle={{ borderColor: "transparent", marginTop: 6 }}
      />
      </View>

      

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 70,
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/MercaditoUtez.png")}
        />
        <Image style={styles.image} source={require("../assets/erick.jpeg")} />
        <Image style={styles.image} source={require("../assets/julian.jpeg")} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 5,
          marginLeft: 70,
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/MercaditoUtez.png")}
        />
        <Image style={styles.image} source={require("../assets/erick.jpeg")} />
        <Image style={styles.image} source={require("../assets/julian.jpeg")} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 5,
          marginLeft: 70,
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/MercaditoUtez.png")}
        />
        <Image style={styles.image} source={require("../assets/erick.jpeg")} />
        <Image style={styles.image} source={require("../assets/julian.jpeg")} />
      </View>
    </View>
  );
};

export default Buscar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "start",
    alignSelf: "center",
    width: 300,
  },
  image: {
    width: 110,
    height: 110,
    margin: 3,
    alignSelf: "center",
    borderRadius: 7,
  },
  barra: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
