// app/_layout.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './IndexScreen';
import HallPassScreen from './HallPassScreen';

const Stack = createStackNavigator();

export default function Layout() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "Assignment 1",
                headerStyle: {backgroundColor: 'purple'},
                headerTitleStyle: {fontWeight: 'bold',},
                headerTintColor: 'white',
                headerBackVisible: false
            }}
        >
            <Stack.Screen
                name="IndexScreen"
                component={IndexScreen}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="HallPassScreen"
                component={HallPassScreen}
                options={{
                    headerShown: false,
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    );
}
