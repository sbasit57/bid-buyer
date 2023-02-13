import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { useSelector } from "react-redux";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { getProduct } from "../Store/Action/UserData";

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Bid & Buy",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    };

    const categoryData = [
        {
            id: 1,
            name: "Sunny",
            icon: images.sunny_1,
        },
        {
            id: 3,
            name: "Snow",
            icon: icons.snow_1,
        },
        {
            id: 4,
            name: "Thunderstorm",
            icon: icons.thunder_1,
        },
        {
            id: 5,
            name: "Rain",
            icon: icons.rain_1,
        },
    ];

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Broccoli Fresh Item",
            color: 'green',
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.broccoli_1,
            // duration: "30 - 45 min ",   
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Fresh Broccoli",
                    photo: images.broccoli_2,
                    description: "Come and Bid to buy Broccoli",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Fresh Broccoli",
                    photo: images.broccoli_3,
                    description: "Come and Bid to buy Broccoli",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Fresh Broccoli",
                    photo: images.broccoli_1,
                    description: "Come and Bid to buy Broccoli",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Tomato Fresh Item",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.tomato_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Tomato Fresh Item",
                    photo: images.tomato_2,
                    description: "Come and bid to buy fresh tomato",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Potato fresh item",
                    photo: images.potato_1,
                    description: "Come and bid to buy fresh Potato",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Capsicum Fresh item",
                    photo: images.capsicum_1,
                    description: "Come and bid to buy fresh Capsicum",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Beetroot Fresh item",
                    photo: images.beetroot_1,
                    description: "Come and bid to buy fresh Beetroot",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Carrot Fresh Item",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.carrort_1,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Carrorts Fresh Item",
                    photo: images.carrort_2,
                    description: "Come and bid to buy Carrorts",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Brinjal Fresh Item",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.brinjal_1,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Brinjal Fresh item",
                    photo: images.brinjal_2,
                    description: "Come and bid to buy Brinjal",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Apple Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.apple_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Apple Fresh item",
                    photo: images.apple_2,
                    description: "Come and bid to buy Apple",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 6,
            name: "Grapes Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.grapes_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Grapes Fresh item",
                    photo: images.grapes_2,
                    description: "Come and bid to buy Grapes",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 7,
            name: "Strawberry Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.strawberry_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Strawberry Fresh item",
                    photo: images.strawberry_2,
                    description: "Come and bid to buy Strawberry",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 8,
            name: "Orange Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.orange_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Orange Fresh item",
                    photo: images.orange_2,
                    description: "Come and bid to buy Orange",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 9,
            name: "Watermelon Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.watermelon_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Watermelon Fresh item",
                    photo: images.watermelon_2,
                    description: "Come and bid to buy Watermelon",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 10,
            name: "Lemon Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.lemon_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Lemon Fresh item",
                    photo: images.lemon_2,
                    description: "Come and bid to buy Lemon",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 11,
            name: "Peach Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.peach_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Peach Fresh item",
                    photo: images.peach_2,
                    description: "Come and bid to buy Peach",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 12,
            name: "Pineapple Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.pineapple_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Pineapple Fresh item",
                    photo: images.pineapple_2,
                    description: "Come and bid to buy Pineapple",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 13,
            name: "Bananas Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.banana_2,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Banana Fresh item",
                    photo: images.banana_2,
                    description: "Come and bid to buy Bananas",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 14,
            name: "Onions Fresh Item",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.onion_1,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Onions Fresh item",
                    photo: images.onion_2,
                    description: "Come and bid to buy onions",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {

            id: 15,
            name: "Fresh Mango",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.mango_1,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Mango Fresh item",
                    photo: images.mango_2,
                    description: "Come and bid to buy Mangoes",
                    calories: 100,
                    price: 2
                },
            ]

        }
    ]

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData)
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);
    const [productData, setProductData] = useState([]);
    let token = AuthState?.TokenId;

    const getAllProduct = () => {
        let data={
            categoryId:"63e5f00a413c44526e1323a6",
        }
        getProduct(data,setProductData, token);
    };

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategory(category)
    };

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)
        if (category.length > 0)
            return category[0].name
        return ""
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3, color: 'black', fontWeight: 'bold' }}>{currentLocation.streetName}</Text>
                    </View>
                </View>
                <TouchableOpacity
                onPress={() => navigation.navigate("NextHome")}
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={images.bellicon_1}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1, color: 'black', fontWeight: 'bold' }}>Main</Text>
                <Text style={{ ...FONTS.h1, color: 'black', fontWeight: 'bold' }}>Categories</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ marginBottom: SIZES.padding * 2 }}
                    onPress={() => navigation.navigate("Restaurant", {
                        item,
                        // currentLocation
                    })}
                >
                    {/* Image */}
                    <View
                        style={{
                            marginBottom: SIZES.padding,
                            color: 'black'
                        }}
                    >
                        <Image
                            source={item.imageUrl}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />
                        {/* <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 50,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.white,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                            <Text style={{ ...FONTS.h4, color: 'black', fontWeight: 'bold' }}>{"item.duration"}</Text>
                        </View> */}
                    </View>
                    {/* Restaurant Info */}
                    <Text style={{ ...FONTS.body2, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    <View
                        style={{
                            marginTop: SIZES.padding,
                            flexDirection: 'row'
                        }}
                    >
                        {/* Rating */}
                        <Image
                            source={icons.star}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text style={{ ...FONTS.body3, color: 'black', fontWeight: 'bold' }}>{item.rating}</Text>
                        {/* Categories */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: 10
                            }}
                        >
                            {
                                item?.categories?.map((categoryId) => {
                                    return (
                                        <View
                                            style={{ flexDirection: 'row' }}
                                            key={categoryId}
                                        >
                                            <Text style={{ ...FONTS.body3, color: 'black', fontWeight: 'bold' }}>{getCategoryNameById(categoryId)}</Text>
                                            <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                        </View>
                                    )
                                })
                            }
                            {/* Price */}
                            {
                                [1, 2, 3].map((priceRating) => (
                                    <Text
                                        key={priceRating}
                                        style={{
                                            ...FONTS.body3,
                                            color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray,
                                            color: 'black', fontWeight: 'bold'
                                        }}
                                    ></Text>
                                ))
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <FlatList
                data={productData}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;