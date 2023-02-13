import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from './Btn';
import {darkGreen} from './Constants';

const BuyerSeller = (props) => {
  return (
    <View style={{alignItems: 'center', paddingTop: 300}} >
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'green', textAlign: 'center'}}>Are You a Buyer Or a Seller?</Text>

      <Btn   
            textColor="white"
            bgColor={darkGreen}
            btnLabel="BUYER"
            Press={() => {
            //   alert('Accoutn created');
              props.navigation.navigate('Home');
            }}
          />


<Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="SELLER"
            Press={() => {
            //   alert('Accoutn created');
              props.navigation.navigate('NextHome');
            }}
          />
















    </View>
  )
}

export default BuyerSeller

const styles = StyleSheet.create({})