import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { SectionList, Touchable, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Post = () => {
  const posts = [
    {
      image: require("../assets/julian.jpeg"),
      description: "hola, ",
      likes: 0,
      username: "juliancitaPasiva",
      userimage: require("../assets/julian.jpeg"),
      historia: require("../assets/julian.jpeg"),
      publicaciones: 10,
      seguidores: 100,
      seguidos: 100,
    },
    {
      image: require("../assets/erick.jpeg"),
      description: "Hola",
      likes: 0,
      username: "erickvelazz",
      userimage: require("../assets/erick.jpeg"),
      historia: require("../assets/erick.jpeg"),
      publicaciones: 10,
      seguidores: 100,
      seguidos: 100,
    },
    {
      image: require("../assets/MercaditoUtez.png"),
      description: "Mercadito",
      likes: 0,
      username: "Mercado Utez",
      userimage: require("../assets/MercaditoUtez.png"),
      historia: require("../assets/MercaditoUtez.png"),
      publicaciones: 10,
      seguidores: 100,
      seguidos: 100,
    },
  ];

  const navigation = useNavigation();

  const goToUSer = (item) => {
    navigation.navigate("Perfil", { item });
  };

  const [likes, setLikes] = useState(0);

  // Función que aumenta la cantidad de likes al hacer clic
  const handleLikeClick = () => {
    setLikes(likes + 1); // Aumenta la cantidad de likes en 1
  };

  const [modal, setModalVisible] = useState(false);
  const [texto, setTexto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const abrirModal = (item) => {
    setSelectedImage(item.historia);
    setModalVisible(true);
    setTexto(`${item.username}`);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.container}>
      <SectionList
        horizontal={true}
        sections={[{ title: "Posts", data: posts }]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.cardHistoria}>
            <View>
              <Image
                style={styles.historia}
                source={item.historia}
                onPress={() => abrirModal(item)}
              />
            </View>
          </View>
        )}
      />
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
        <SectionList
          sections={[{ title: "Posts", data: posts }]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.cardPost}>
              <TouchableOpacity onPress={() => goToUSer(item)}>
                <View style={styles.userInfo}>
                  <Image source={item.userimage} style={styles.profilePhoto} />
                  <Text style={styles.username}>{item.username}</Text>
                </View>
              </TouchableOpacity>
              <Image source={item.image} style={styles.postImage} />

              <View style={styles.like}>
                <Text style={styles.description}>likes: {likes}</Text>
                <TouchableOpacity onPress={handleLikeClick}>
                  <FontAwesome5 name="heart" size={24} color="red" />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <StatusBar basStyle={"light-content"} backgroundColor="#089779" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardPost: {
    flex: 1,
    width: 370,
    height: "auto",
    margin: 10,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "white",
  },
  username: {
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  postImage: {
    width: "auto",
    height: 500,
    alignSelf: "center",
  },
  description: {
    color: "black",
    padding: 10,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  like: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  historias: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 50,
  },
  imgHistoria: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 10,
    borderColor: "gold",
    borderWidth: 3,
  },
  historia: {
    width: 70,
    height: 70,
    borderRadius: 70,
    margin: 5,
    borderColor: "lightgreen",
    borderWidth: 2,
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
  cardHistoria: {
    flex: 1,
    width: 100,
    height: 150,
    marginBottom: 10,
    paddingTop: 45,
  },
});

export default Post;
