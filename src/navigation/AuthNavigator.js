import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/Auth/SignIn'

const AuthStack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerTitleAlign: 'center' }}
            initialRouteName="Login"
        >
            <AuthStack.Screen name="Login" component={SignIn} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
