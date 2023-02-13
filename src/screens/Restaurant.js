import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Animated,
    ToastAndroid,
    Alert
} from "react-native";
import { isIphoneX } from 'react-native-iphone-x-helper'
import { icons, COLORS, SIZES, FONTS } from '../constants'
import CountDown from "react-native-countdown-component";
import { SelectList } from "react-native-dropdown-select-list"  
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { postBid } from "../Store/Action/UserData";

const Restaurant = ({ route }) => {

    const navigation=useNavigation();
    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;
    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = React.useState(null);
    const [bidPrice, setBidPrice] = React.useState(1);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);
    const [kg, setkg] = React.useState(1)

    useEffect(() => {
        let { item, currentLocation } = route.params;
        setRestaurant(item)
        setCurrentLocation(currentLocation)
    })

    const registerFunc = () => {
    let data = {
        productName: "vegetable post",
        description: "123456",
        askingPrice: "200",
        categoryId: "63e5f00a413c44526e1323a6",
        productId: route.params.item._id,
        askingQuantityUnit: "KG",
        askingQuantity: kg
    };
    postBid(data,token,navigation);
  };

    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    const minus=() => {
        // if (bidPrice = 0) {
        //     setBidPrice(1)

        // } else if (bidPrice > 0) {
        //     setBidPrice(bidPrice - 1)
        //     
        // }
        if(kg>1){
            setkg(kg - 1)
        }

        // setkg(kg -1)
    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }

    function renderHeader() {

        const handlePress = () => {
            Alert.alert('Bidding Time Has been Started')
        }

        const handleFinish = () => {
            Alert.alert('Bidding Time Has Been Finished')
        }



        return (
            <SafeAreaView>


                <View style={{ padding: 10, color: 'green' }}>
                    {/* <CountDown size={18}
                        until={50}
                        onPress={() => { handlePress() }}
                        onFinish={() => { handleFinish() }}
                        showSeparator
                        timeToShow={['M', 'S']}
                    >

                    </CountDown> */}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            paddingLeft: SIZES.padding * 2,
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>


                    {/* Restaurant Name Section */}
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.padding * 3,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray3
                            }}
                        >
                            <Text style={{ ...FONTS.h3, color: 'black', fontWeight: 'bold' }}>{restaurant?.name}</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: 50,
                            paddingRight: SIZES.padding * 2,
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.list}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    function renderFoodInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })}
            >
                {
                    restaurant?.menu?.map((item, index) => (
                        <View
                            key={`menu-${index}`}
                            style={{ alignItems: 'center' }}
                        >
                            <View style={{ height: SIZES.height * 0.35 }}>
                                {/* Food Image */}
                                <Image
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }}
                                />

                                {/* Quantity */}
                                {/* <View
                                    style={{
                                        position: 'absolute',
                                        bottom: - 20,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                        onPress={() => editOrder("-", item.menuId, item.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>-</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.menuId)}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                        onPress={() => editOrder("+", item.menuId, item.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>+</Text>
                                    </TouchableOpacity>
                                </View> */}
                            </View>








                            {/* Name & Description */}
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2,color:'black',fontWeight:'bold' }}>{item.name} - {item.price.toFixed(2)}</Text>
                                <Text style={{ ...FONTS.body3, color:'black',fontWeight:'bold'  }}>{item.description}</Text>
                            </View>

                            {/* Calories */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10
                                }}
                            >
                                <Image
                                    source={icons.fire}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10
                                    }}
                                />

                                <Text style={{
                                    ...FONTS.body3, color: COLORS.darygray, color:'black',fontWeight:'bold'
                                }}>{item.calories.toFixed(2)} cal</Text>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
        )
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View style={{ height: 30 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: SIZES.padding
                    }}
                >
                    {restaurant?.menu?.map((item, index) => {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                            extrapolate: "clamp"
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }

    function renderOrder(props) {



        const [selected, setSelected] = React.useState("");

        const data = [
            { key: 1, value: '1kg' },
            { key: 2, value: '2kg' },
            { key: 3, value: '3kg' },
            { key: 4, value: '4kg' }


        ];


        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [age, setAge] = useState("");
        const [password, setPassword] = useState("");
         

            const register =() =>{
                
            navigation.navigate("NextHome", {
                name: name,
                email: email,
                age: age,
                password: password
            })
        }



        return (



            <View>
                {
                    renderDots()
                }
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ ...FONTS.h3, color:'black',fontWeight:'bold' }}>Select Quantity</Text>
                        <Text style={{ ...FONTS.h3, color:'black',fontWeight:'bold' }}>Per Kg</Text>
                    </View>



                    {/* <View>
                        <TextInput style={{color: 'black', fontWeight: 'bold',borderColor: 'black' }}
                            placeholderTextColor={"green"}
                            placeholder = "Enter Quantity"
                            value={name}
                            onChangeText={(text) => setName(text)}    
  
                        >
                        </TextInput>


                        <TextInput style={{color: 'black', fontWeight: 'bold',borderColor: 'black' }}
                            placeholderTextColor={"green"}
                            placeholder = "Place Your Bid"
                            value={email}
                            onChangeText={(text) => setEmail(text)}

                        >
                        </TextInput>


                        <TextInput style={{color: 'black', fontWeight: 'bold',borderColor: 'black' }}
                            
                            placeholder = "Enter Quantity"
                            placeholderTextColor={"green"}
                            value={age}
                            onChangeText={(text) => setAge(text)}

                        >
                        </TextInput>


                        <TextInput style={{color: 'black', fontWeight: 'bold',borderColor: 'black' }}
                            placeholderTextColor={"green"}
                            placeholder = "Enter Date"
                            value={password}
                            onChangeText={(text) => setPassword(text)}

                        >
                        </TextInput>






                    </View> */}
















                    {/* <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Quantity</Text>
                        
                           

                             <SelectList  data={data}  setSelected={setSelected}  />















                    </View> */}





                    {/* <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Price</Text>
                        <Text style={{ ...FONTS.h3 }}>Rs: 10</Text>
                    </View> */}



                    {/* <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1 
                        }
                        }
                    > 
                        <Text style={{ ...FONTS.h3 }}>Price</Text>
                        <Text style={{ ...FONTS.h3 }}>Rs: 10</Text>
                    </View> */}






































                    <View
                        style={{
                            paddingVertical: SIZES.padding * 2,
                        }}
                    >

                        <View
                            style={{
                                position: 'absolute',
                                width: "100%",
                                height: 50,
                                paddingHorizontal: 20,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                borderBottomColor: COLORS.lightGray2,
                                borderBottomWidth: 1,
                                marginBottom: 20
                            }}
                        >

                            <TouchableOpacity
                                style={{
                                    width: 50,
                                    backgroundColor: COLORS.white,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderTopLeftRadius: 25,
                                    borderBottomLeftRadius: 25
                                }}
                                onPress={minus}
                            >
                                <Text style={{ ...FONTS.body1 , color:'black',fontWeight:'bold' }}>-</Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    width: 150,
                                    backgroundColor: COLORS.white,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ ...FONTS.h2 , color:'black',fontWeight:'bold' }}>{kg}</Text>
                                <Text style={{color:'black',fontWeight:'bold'}}>Kg </Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    width: 50,
                                    backgroundColor: COLORS.white,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderTopRightRadius: 25,
                                    borderBottomRightRadius: 25,
                                    color:'black',fontWeight:'bold'
                                }}
                                onPress={() => {
                                    // setBidPrice(bidPrice + 1)
                                    setkg(kg + 1)
                                }}
                            >
                                <Text style={{ ...FONTS.body1,color:'black',fontWeight:'bold' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>




















                    {/* Order Button */}
                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius,
                                
                            }}
                            onPress={registerFunc}
                            
                            
                        // ToastAndroid.show("Thanks for your bidding.",1000)
                        // alert("Your Bid Has Been Registered")
                        // navigation.navigate("OrderDelivery", {
                        //     restaurant: restaurant,
                        //     currentLocation: currentLocation
                        // })

                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2, color: 'white', fontWeight:'bold' }}>Place Your Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {isIphoneX() &&
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -34,
                            left: 0,
                            right: 0,
                            height: 34,
                            backgroundColor: COLORS.white
                        }}
                    >
                    </View>
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
            {renderOrder()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant;