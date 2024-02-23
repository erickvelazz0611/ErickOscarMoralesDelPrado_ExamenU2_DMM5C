import { View, TextInput, Button, StyleSheet, Image, Alert, Text } from 'react-native';
import { Card } from "@rneui/themed";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Perfil from './perfil';



const Login = () => {
    const imagen = "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png";
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');


    const validUser = {
        userName: 'Erick',
        password: 'admin'
    }

    const login = () => {
        if(userName === validUser.userName && password === validUser.password){
            Alert.alert('Bienvenido');
            // enviar a la siguiente pantalla

        } else {
            Alert.alert('Usuario o contraseña incorrectos');
            // bloquear los campos
            console.log(userName, password);
            navigation.navigate('Perfil');
        }
    }


    return (
        <View style={styles.container}>
            <Card containerStyle={{marginTop: 150}}>
                <Card.Title style={{color: 'black', fontSize: 20}}></Card.Title>
                <Image style={styles.image} source={{ uri: imagen }} />
                <Card.Divider />
                <TextInput 
                    placeholder="Usuario"
                    style={styles.input}
                    onChangeText={setUserName}
                />
                <TextInput 
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={setPassword}
                />
                <Button title="Iniciar sesión"  onPress={login} />
            </Card>
        </View>
    
    );
}


export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 100,
        alignSelf: 'center'
      },
      input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        width: 200,
        textAlign: 'center',
        color: 'black',
        height: 35,
        marginBottom: 10
      },

});