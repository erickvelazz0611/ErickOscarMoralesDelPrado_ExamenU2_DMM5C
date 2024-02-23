import React from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert, Text } from 'react-native';
import { Card } from "@rneui/themed";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Splash from './screens/splash';
import Perfil from './screens/perfil';
import Posts from './screens/posts';

import Tab from './screens/bottonTab';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash"
          component={Splash} options={{ headerShown: true }} />
        <Stack.Screen name="Login"
          component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Perfil" component={Perfil}
          options={{ headerShown: true}} />
        <Stack.Screen name="Posts" component={Posts}
          options={{ headerShown: true}} />
          <Stack.Screen name="Tab" component={Tab}
          options={{ headerShown: false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;