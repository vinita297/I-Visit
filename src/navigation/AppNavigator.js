/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/App/Home'
import PersonDetails from '../screens/App/PersonDetails'

const AppStack = createStackNavigator()


const AppNavigator = () => {
    return (
        <AppStack.Navigator
            initialRouteName="Home"
        >
            <AppStack.Screen
                options={{
                    headerShown: false
                }}
                name="Home"
                component={Home} />

            <AppStack.Screen
                options={{
                    headerShown: false
                }}
                name="PersonDetails"
                component={PersonDetails} />

        </AppStack.Navigator>
    )
}

export default AppNavigator
