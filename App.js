import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import { BuyerSeller, Login, NextHome, NextRestaurant, OrderDelivery, Restaurant, Seller } from './src/screens';
import Signup from './src/screens/Signup';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from "react-redux";
import { store, persistor } from "./src/Store/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from './src/navigation';
// import { SafeAreaView } from 'react-native/types';

const App = () => {

  const [show, Setshow] = useState(true);

  useEffect(() => {
    Setshow(true)
    setTimeout(() => {
      Setshow(false)
    }, 1500);
  }, []);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false
    //     }}
    //     initialRouteName={'Login'}
    //   >
    //     <Stack.Screen name="Home" component={Tabs} />
    //     <Stack.Screen name="Restaurant" component={Restaurant} />
    //     <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
    //     <Stack.Screen name="Login" component={Login} ></Stack.Screen>
    //     <Stack.Screen name="Signup" component={Signup} ></Stack.Screen>
    //     <Stack.Screen name="Seller" component={Seller} ></Stack.Screen>
    //     <Stack.Screen name="BuyerSeller" component={BuyerSeller}    ></Stack.Screen>
    //     <Stack.Screen name="NextHome" component={NextHome}    ></Stack.Screen>
    //     <Stack.Screen name="NextRestaurant" component={NextRestaurant}    ></Stack.Screen>



    //   </Stack.Navigator>
    // </NavigationContainer>


    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* {
            show == true ?
              <Splash />
              : */}
          <Navigation />
          {/* } */}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

export default App;