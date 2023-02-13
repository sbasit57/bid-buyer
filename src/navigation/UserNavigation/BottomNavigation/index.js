import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import { Home, Login } from '../../../screens';
import Signup from '../../../screens/Signup';

const BottomNavigation = () => {

    const Tab = createBottomTabNavigator();

    const screenOptions = route => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        // tabBarActiveTintColor: COLORS.black,
        // tabBarInactiveTintColor: COLORS.white,
        tabBarShowLabel: false,
        tabBarIconStyle: {
            paddingBottom: 0
        },
        tabBarStyle: {
            position: 'absolute',
            height: 60,
            elevation: 24,
            borderTopWidth: 0,
            // backgroundColor: COLORS.grey
        },
    });

    const ActiveIcon = ({ img }) => (
        <Image style={[styles.ActiveImage]} source={img} resizeMode={'contain'} />
    );

    const UnActiveIcon = ({ img }) => (
        <Image style={styles.UnActiveImage} source={img} resizeMode={'contain'} />
    );

    return (
        <Tab.Navigator screenOptions={screenOptions} initialRouteName={'Signup'}>
            <Tab.Screen
                name={'Signup'}
                component={Signup}
            // options={{
            //     tabBarIcon: ({ focused }) => {
            //         return (
            //             <>
            //                 {
            //                     !focused ?
            //                         <View style={styles.View}>
            //                             <ActiveIcon img={square} />
            //                         </View>
            //                         :
            //                         <UnActiveIcon img={square} />
            //                 }
            //             </>
            //         );
            //     },
            // }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;