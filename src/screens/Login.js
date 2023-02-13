import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { LoginApi } from '../Store/Action/AuthData';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';

const Login = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation();

  const LoginFunc = () => {
    let data = {
      email: email,
      password: pass
    };
    LoginApi(data, dispatch);
  };

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold', marginLeft: "-10%" }}>
            Bid & Buy
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
              marginLeft: "-10%"
            }}>
            Login to your account
          </Text>
          <View style={{ marginBottom: "40%", marginLeft: "-50%" }}>
            <TextInput value={email} onChangeText={setEmail} placeholderTextColor={"#000"} placeholder={"Email Address"} style={{
              color: "green",
              width: "75%",
              borderRadius: 50,
            }} />
            <TextInput value={pass} secureTextEntry={secure} onChangeText={setPass} placeholderTextColor={"#000"} placeholder={"Password"} style={{
              color: "green",
              width: "75%",
              borderRadius: 50,
            }} />
          </View>
          {/* <View
            style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View> */}
          <View style={{ width: "70%", marginLeft: "-10%" }}>
            <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={LoginFunc} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
