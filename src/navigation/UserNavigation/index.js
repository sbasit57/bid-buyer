import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, NextHome, NextRestaurant, Restaurant, Seller,Signup, Update } from "../../screens";
import BottomNavigation from "./BottomNavigation";


const UserNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'Home'}
        >
            
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Restaurant"
                component={Restaurant}
            />
            <Stack.Screen
                name="Seller"
                component={Seller}
            />

<Stack.Screen
                name="Update"
                component={Update}
            />

<Stack.Screen
                name="NextRestaurant"
                component={NextRestaurant}
            />

<Stack.Screen
                name="NextHome"
                component={NextHome}           
            />
            
            
        </Stack.Navigator>
    )
};

export default UserNavigation;