import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './splash';
import Login from './login';
import Post from './posts';
import Buscar from './busqueda';

import Perfil from './perfil';
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";





const Tab = createBottomTabNavigator();

const BottNav = () => {
    return (
        <Tab.Navigator initialRouteName="Posts">
            <Tab.Screen name="Posts"
                component={Post}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    )
                }} />
                <Tab.Screen name="Buscar"
                component={Buscar}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="search" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Perfil"
                component={Perfil}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="supervised-user-circle" size={size} color={color} />
                    )
                }} />
            
        </Tab.Navigator>
    )
}

export default BottNav;