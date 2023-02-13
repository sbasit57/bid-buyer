import React from "react";
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "../../screens/Signup";
import { Home, Login } from "../../screens";

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.first;
    });

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Login"}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
            />
            
        </Stack.Navigator>
    );
};

export default AuthNavigation;