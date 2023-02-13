import React from 'react';
import { View, Text, Touchable, TouchableOpacity, TextInput } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import CheckBox from 'react-native-check-box';
import { useState } from "react";
import { Register } from '../Store/Action/AuthData';

const Signup = props => {

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const registerFunc = () => {
    let data = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: pass,
      user_type: "buyer"
    };
    Register(data);
  };

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <View style={{ marginTop: "10%", width: "80%" }}>
            <TextInput value={fname} onChangeText={setFname} placeholderTextColor={"#000"} placeholder={"First name"} style={{
              color: "green",
              width: "75%",
              borderRadius: 50,
            }} />
            <TextInput value={lname} onChangeText={setLname} placeholderTextColor={"#000"} placeholder={"Last name"} style={{
              color: "green",
              width: "75%",
              borderRadius: 50,
            }} />
            <TextInput value={email} onChangeText={setEmail} placeholderTextColor={"#000"} placeholder={"Email"} style={{
              color: "green",
              width: "75%",
              borderRadius: 50,
            }} />
            <TextInput value={pass} onChangeText={setPass} placeholderTextColor={"#000"} placeholder={"Password"} style={{
              color: "green",
              width: "75%",
              borderRadius: 50,
            }} />
          </View>
          <View style={{
            marginTop: "35%",
            width: "70%",
            marginLeft: "-10%"
          }}>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Signup"
              Press={registerFunc}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#000" }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;