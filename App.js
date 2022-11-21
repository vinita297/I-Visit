import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {

  useEffect(() => {
    SplashScreen.hide();
    GetToken()

  }, [])

  const [loginToken, SetLoginToken] = useState('')

  const GetToken = async () => {
    const token = await AsyncStorage.getItem('loginToken')
    SetLoginToken(token)
  }

  const mainStack = createStackNavigator();

  const CreateMainStack = () => (
    <mainStack.Navigator initialRouteName="AuthStack">
      <mainStack.Screen
        name={'AuthStack'}
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name={'AppStack'}
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </mainStack.Navigator>
  );

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='#fff'
        barStyle={'dark-content'}
      />
      {loginToken ?
        <AppNavigator />
        :
        CreateMainStack()
      }
    </NavigationContainer>
  );
};

export default App;
