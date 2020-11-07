import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
    return (
      <Button
        title="Loguearme"
        onPress={() => {
          navigation.navigate('AnotherPage')
         
        }
        }
      />
    );
  };

export default LoginScreen