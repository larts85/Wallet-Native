import React from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './client/Screen/home';
import Transferencias from './client/Screen/transferencias';
import Balance from './client/Screen/Balance';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Movimientos from './client/Screen/Movimientos';
import Tarjetas from './client/Screen/Tarjetas';
import Pagos from './client/Screen/Pagos';
import Amigos from './client/Screen/Amigos';
import Ayuda from './client/Screen/Ayuda';
import Configuracion from './client/Screen/Configuracion';


const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

//con este stack, guardamos todas las pantallas que vamos a mostrar. Con stack.navigation las guardamos y cada stack.screen va a ser una pantalla
//Se muestran en orden. La que primero esta, es la que va a aparecer.


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyDrowner} options={{ title: "Home" }} />
      <Stack.Screen name="Transferencias" component={Transferencias} options={{ title: "Transferencias" }} />
      <Stack.Screen name="Balance" component={Balance} options={{ title: "Balance" }} />
    </Stack.Navigator>
  )
}

function MyDrowner() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Drawer.Screen name="Transferencias" component={Transferencias} options={{ title: "Transferencias" }} />
      <Drawer.Screen name="Tarjetas" component={Tarjetas} options={{ title: "Tarjetas" }} />
      <Drawer.Screen name="Pagos" component={Pagos} options={{ title: "Pagos" }} />
      <Drawer.Screen name="Balance" component={Balance} options={{ title: "Balance" }} />
      <Drawer.Screen name="Movimientos" component={Movimientos} options={{ title: "Mis Movimientos" }} />
      <Drawer.Screen name="InvitarAmigos" component={Amigos} options={{ title: "Invitar Amigos" }} />
      <Drawer.Screen name="Ayuda" component={Ayuda} options={{ title: "Ayuda" }} />
      <Drawer.Screen name="Configuracion" component={Configuracion} options={{ title: "Configuración" }} />
    </Drawer.Navigator>
  )
}



export default function App() {
  return (
    /* para agregar mas pantallas */
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
