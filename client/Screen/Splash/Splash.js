import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from "react-native-elements";
import style from './SplashStyle'
import { ActivityIndicator } from 'react-native-paper';

const Splash = ({ navigation, route }) => {

  const [usuario, setUsuario] = useState(false)
  const [huella, setHuella] = useState(false)
  const user = useSelector(store => store.user.user)


  const storageAsync = async () => {
    const clave = await AsyncStorage.getItem('Metodo')
    if (clave !== null) {
      setUsuario(true)
      if (clave === "huella") {
        setHuella(true)
      }
    }
    else if (route.params.usuario2 === false) {
      setUsuario(false)
    }
    else {
      setUsuario(false)

    }
  }

  console.log(route.params.usuario2, "USUARIO");


  useEffect(() => {
    storageAsync();
    if (!usuario || route.params.usuario2 === false) {
      setTimeout(() => {
        navigation.navigate('Login')
      }, 2000)
    }
    else if (usuario) {
      if (huella) {
        setTimeout(() => {
          navigation.navigate('Huella')
        }, 2000)
      } else {
        setTimeout(() => {
          navigation.navigate('Pin')
        }, 2000)
      }
    }
  }, [usuario, huella, route.params.usuario2])




  return (

    <View style={style.container}>
      <View style={style.logo}>
        <Image source={require("../../src/logo.png")} />
      </View>
      {/* <Icon
        name="spinner"
        type="fontisto"
        size={50}
        
      /> */}
      <ActivityIndicator color='#02072F' size="large" />
    </View>

  )
}

export default Splash