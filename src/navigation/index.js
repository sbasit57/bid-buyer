import React, { useState } from "react";
import AuthNavigation from "./AuthNavigation";
import UserNavigation from "./UserNavigation";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
    const [routeName, setRouteName] = useState();

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    return (
        <NavigationContainer>
            {
                AuthState?.LoginUser ? (
                    <UserNavigation routeName={routeName} />
                ) : (
                    <AuthNavigation routeName={routeName} />
                )
            }
        </NavigationContainer>
    );
};

export default Navigation;