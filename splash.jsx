import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LottieView from 'lottie-react-native';




const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeoutId = setTimeout(() =>{
      navigation.replace('Tab');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  const utez = './assets/MercaditoUtez.svg';

  return (
    <View style={style.container}>
      
      <LottieView
        style={{ width: 500, height: 500 }}
        source={require('../assets/Animation IG.json')} // Reemplaza 'animation.json' con el nombre de tu archivo JSON
        autoPlay
      />
      
      {/*<Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>BUSCADOR DE CRUISING UTEZ</Text>*/}  
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Splash;