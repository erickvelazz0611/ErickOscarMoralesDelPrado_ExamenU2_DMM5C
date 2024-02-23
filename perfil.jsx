import { useRoute } from "@react-navigation/native";
import { Card, Image } from "@rneui/themed";
import React, { useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Modal } from "react-native";

const Perfil = () => {
  const route = useRoute();
  const navigation = useNavigation();

  //const { item } = route.params;

  const { item } = route.params ? route.params : "No hay usuarios";

  // if ternario para evitar errores al entrar a la pantalla perfil sin datos
  const Alert = () => {
    alert("No hay usuarios");
  };

  if (!item) {
    return Alert();
  }

  const [modal, setModalVisible] = useState(false);
  const [texto, setTexto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const abrirModal = (item) => {
    setSelectedImage(item.historia);
    setModalVisible(true);
    setTexto(`${item.username}`);
  };


  // card de perfil
  return (
    <View style={styles.cont}>

<View style={styles.rowAfuera}>
        <View style={styles.izquierda}>
                  <Image
                  style={styles.circulito}
                  source={item.userimage}
                />
                <Text style={styles.nombre2}>{item.username}</Text>
        </View>

        <View style={styles.derecha}>
          <View>
              <View style={styles.row}>

                <View style={styles.cuadritoRojo}>
                  <Text style={styles.nombre}>{item.publicaciones}</Text>
                  <Text style={styles.nombre}>publiciones</Text>
                </View>

                <View style={styles.cuadritoRojo}>
                <Text style={styles.nombre}>{item.seguidores}</Text>
                  <Text style={styles.nombre}>seguidores</Text>
                </View>

                <View style={styles.cuadritoRojo}>
                <Text style={styles.nombre}>{item.seguidos}</Text>
                  <Text style={styles.nombre}>seguidos</Text>
                </View>
              </View>
          </View>
          


        </View>
        </View>

      <View style={styles.cardHistoria}>
        <View>
          <Image
            style={styles.historia}
            source={item.historia}
            onPress={() => abrirModal(item)}
          />
        </View>
        <View>
          <Image
            style={styles.historia}
            source={item.historia}
            onPress={() => abrirModal(item)}
          />
        </View>
        <View>
          <Image
            style={styles.historia}
            source={item.historia}
            onPress={() => abrirModal(item)}
          />
        </View>
        <View>
          <Image
            style={styles.historia}
            source={item.historia}
            onPress={() => abrirModal(item)}
          />
        </View>
      </View>
      <Modal
            animationType="fade"
             transparent= {true}
             visible={modal}>
                <View style={styles.modalFondo}>
                    <View style={styles.modalView}>
                        <View style={styles.x}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Image source={require('../assets/equis.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.texto}>{texto}</Text>
                        <Image source={selectedImage} style={{ width: 300, height: 300 }} />
                    </View>
                </View>
                            
            </Modal>

      <View style={styles.cardHistoria2}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 70,
        }}
      >
        <Image
          style={styles.image2}
          source={require("../assets/MercaditoUtez.png")}
        />
        <Image style={styles.image2} source={require("../assets/erick.jpeg")} />
        <Image style={styles.image2} source={require("../assets/julian.jpeg")} />
      </View>
      </View>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginTop: 30,
    paddingTop: 30,
    alignItems: "start",
    justifyContent: "flex-start",
    alignSelf: "center",
    width: 360,
    flexDirection: "row",
    backgroundColor: "cyan",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 200,
    alignSelf: "center",
  },
  nombre2: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 2,
    textAlign: "center",
  },
  postImage: {
    width: "auto",
    height: 500,
    alignSelf: "center",
  },
  info: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  destacadas: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    width: 70,
    height: 70,
    borderRadius: 70,
    margin: 5,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
    height: 100,
    padding: 10,
    height: 100,
    backgroundColor: "cyan",
  },
  cuadritoRojo: {
    backgroundColor: "red",
    flex: 1,
  },
  historia: {
    width: 70,
    height: 70,
    borderRadius: 70,
    margin: 5,
    borderColor: "lightgreen",
    borderWidth: 2,
  },
  cardHistoria: {
    flex: 1,
    width: 100,
    height: 150,
    marginBottom: 10,
    paddingTop: 70,
    flexDirection: "row",
    marginLeft: 30,
  },
  image2:
  {
    width: 110,
    height: 110,
    margin: 3,
    alignSelf: "center",
    borderRadius: 7,
  },
  cardHistoria2: {
    flex: 6,
    width: 100,
    height: 150,
    marginBottom: 10,
    flexDirection: "row",
    marginLeft: 30,
    
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "#EBEBEB",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  x: {
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 50,
    margin: 6,
  },
  modalFondo: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  row: {
    flexDirection: 'row',
    height: 100,
    width: 250,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAfuera:{
    flexDirection: 'row',
    height: 100,
    padding: 20,
    marginTop: 40,
    width: '100%'
  },
  izquierda:{
    flex: 0.2,
    marginRight: 10,
    alignItems: 'center',
    paddingBottom: 'auto',
    paddingStart: 'auto'
  },
  derecha:{
    flex: 0.8
  },
  cuadritoRojo:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    marginHorizontal: 1,
  },
  circulito:{
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  nombre:{
    color: 'black',
    fontSize: 12,
  },
  
});

<View
  style={{
    flexDirection: "row",
    justifyContent: "start",
    backgroundColor: "cyan",
  }}
></View>;
