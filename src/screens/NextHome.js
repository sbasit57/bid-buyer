import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const NextHome = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Bid & Buy",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        // {
        //     id: 1,
        //     name: "Tomato",
        //     icon: icons.icon_beet,
        // },
        // {
        //     id: 2,
        //     name: "Potato",
        //     icon: icons.icon_brocolli,
        // },
        // {
        //     id: 3,
        //     name: "Cabbage",
        //     icon: icons.icon_cabbage,
        // },
        // {
        //     id: 4,
        //     name: "Salads",
        //     icon: icons.icon_carrot,
        // },
        // {
        //     id: 5,
        //     name: "Carrot",
        //     icon: icons.icon_eggplant,
        // },
        // {
        //     id: 6,
        //     name: "Onion",
        //     icon: icons.icon_pepper,
        // },
        // {
        //     id: 7,
        //     name: "Snacks",
        //     icon: icons.icon_apple,
        // },
        // {
        //     id: 8,
        //     name: "Broccoli",
        //     icon: icons.icon_banana,
        // },
        // {
        //     id: 9,
        //     name: "Brinjal",
        //     icon: icons.icon_cherries,
        // },
        // {
        //     id: 10,
        //     name: "Corn",
        //     icon: icons.icon_mango,
        // },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Seller 1",
            rating: 5,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.usericon_1,
            duration: "Rs 20",
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
                    name: "Seller 1",
                    photo: images.usericon_1,
                    description: "",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Seller 1",
                    photo: images.usericon_1,
                    description: "",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Seller 1",
                    photo: images.usericon_1,
                    description: "",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Seller 2",
            rating: 4.9,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.usericon_1,
            duration: "Rs 15",
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
                    name: "Seller 2",
                    photo: images.usericon_1,
                    description: "",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Seller 2",
                    photo: images.usericon_1,
                    description: "",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Seller 2",
                    photo: images.usericon_1,
                    description: "",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Seller 2",
                    photo: images.usericon_1,
                    description: "",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Seller 3",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.usericon_1,
            duration: "Rs 40",
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
                    name: "Seller 3",
                    photo: images.usericon_1,
                    description: "",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Seller 4",
            rating: 4,
            categories: [8],
            priceRating: expensive,
            photo: images.usericon_1,
            duration: "Rs 10",
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
                    name: "Seller 4",
                    photo: images.usericon_1,
                    description: "",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Seller 5",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.usericon_1,
            duration: "Rs 20",
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
                    name: "Seller 5",
                    photo: images.usericon_1,
                    description: "",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 6,
            name: "Seller 6",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.usericon_1,
            duration: "Rs 20",
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
                    name: "Seller",
                    photo: images.usericon_1,
                    description: "",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 7,
            name: "Seller 7",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.usericon_1,
            duration: "Rs 20",
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
                    name: "Seller",
                    photo: images.usericon_1,
                    description: "",
                    calories: 200,
                    price: 5
                },
            ]
        },
        {
            id: 8,
            name: "Seller 8",
            rating: 3.2,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.usericon_1,
            duration: "Rs 20",
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
                    name: "Seller",
                    photo: images.usericon_1,
                    description: "",
                    calories: 200,
                    price: 5
                },
            ]
        },

        // {
        //     id: 9,
        //     name: "Watermelon Fresh Item",
        //     rating: 4.8,
        //     categories: [1, 2],
        //     priceRating: affordable,
        //     photo: images.usericon_1,
        //     duration: "Rs 20 kg",
        //     location: {
        //         latitude: 1.558050496260768,
        //         longitude: 110.34743759630511,
        //     },
        //     courier: {
        //         avatar: images.avatar_4,
        //         name: "Muthu"
        //     },
        //     menu: [
        //         {
        //             menuId: 10,
        //             name: "Watermelon Fresh item",
        //             photo: images.usericon_1,
        //             description: "Come and bid to buy Watermelon",
        //             calories: 200,
        //             price: 5
        //         },
                
                

        //     ]
        // },
        // {
        //     id: 10,
        //     name: "Lemon Fresh Item",
        //     rating: 4.8,
        //     categories: [1, 2],
        //     priceRating: affordable,
        //     photo: images.usericon_1,
        //     duration: "Rs 20 kg",
        //     location: {
        //         latitude: 1.558050496260768,
        //         longitude: 110.34743759630511,
        //     },
        //     courier: {
        //         avatar: images.avatar_4,
        //         name: "Muthu"
        //     },
        //     menu: [
        //         {
        //             menuId: 10,
        //             name: "Lemon Fresh item",
        //             photo: images.usericon_1,
        //             description: "Come and bid to buy Lemon",
        //             calories: 200,
        //             price: 5
        //         },
                
                

        //     ]
        // },
        // {
        //     id: 11,
        //     name: "Peach Fresh Item",
        //     rating: 4.8,
        //     categories: [1, 2],
        //     priceRating: affordable,
        //     photo: images.usericon_1,
        //     duration: "Rs 20 kg",
        //     location: {
        //         latitude: 1.558050496260768,
        //         longitude: 110.34743759630511,
        //     },
        //     courier: {
        //         avatar: images.avatar_4,
        //         name: "Muthu"
        //     },
        //     menu: [
        //         {
        //             menuId: 10,
        //             name: "Peach Fresh item",
        //             photo: images.usericon_1,
        //             description: "Come and bid to buy Peach",
        //             calories: 200,
        //             price: 5
        //         },
                
                

        //     ]
        // },
        // {
        //     id: 12,
        //     name: "PineSeller 5",
        //     rating: 4.8,
        //     categories: [1, 2],
        //     priceRating: affordable,
        //     photo: images.usericon_1,
        //     duration: "Rs 20 kg",
        //     location: {
        //         latitude: 1.558050496260768,
        //         longitude: 110.34743759630511,
        //     },
        //     courier: {
        //         avatar: images.avatar_4,
        //         name: "Muthu"
        //     },
        //     menu: [
        //         {
        //             menuId: 10,
        //             name: "PineSeller 5",
        //             photo: images.usericon_1,
        //             description: "Come and bid to buy Pineapple",
        //             calories: 200,
        //             price: 5
        //         },
                
                

        //     ]
        // },
        // {
        //     id: 13,
        //     name: "Bananas Fresh Item",
        //     rating: 4.8,
        //     categories: [1, 2],
        //     priceRating: affordable,
        //     photo: images.usericon_1,
        //     duration: "Rs 20 kg",
        //     location: {
        //         latitude: 1.558050496260768,
        //         longitude: 110.34743759630511,
        //     },
        //     courier: {
        //         avatar: images.avatar_4,
        //         name: "Muthu"
        //     },
        //     menu: [
        //         {
        //             menuId: 10,
        //             name: "Banana Fresh item",
        //             photo: images.usericon_1,
        //             description: "Come and bid to buy Bananas",
        //             calories: 200,
        //             price: 5
        //         },
                
                

        //     ]
        // },
        // {
        //     id: 14,
        //     name: "Onions Fresh Item",
        //     rating: 4.8,
        //     categories: [1, 2],
        //     priceRating: affordable,
        //     photo: images.usericon_1,
        //     duration: "Rs 20 kg",
        //     location: {
        //         latitude: 1.558050496260768,
        //         longitude: 110.34743759630511,
        //     },
        //     courier: {
        //         avatar: images.avatar_4,
        //         name: "Muthu"
        //     },
        //     menu: [
        //         {
        //             menuId: 10,
        //             name: "Onions Fresh item",
        //             photo: images.onion_2,
        //             description: "Come and bid to buy onions",
        //             calories: 200,
        //             price: 5
        //         },
                
                

        //     ]
        // },







        // {

        //     id: 15,
        //     name: "Seller",
        //     rating: 4.9,
        //     categories: [9, 10],
        //     priceRating: affordable,
        //     photo: images.mango_1,
        //     duration: "35 - 40 min",
        //     location: {
        //         latitude: 1.5573478487252896,
        //         longitude: 110.35568783282145,
        //     },
        //     courier: {
        //         avatar: images.avatar_1,
        //         name: "Jessie"
        //     },
        //     menu: [
        //         {
        //             menuId: 12,
        //             name: "Seller",
        //             photo: images.usericon_1,
        //             description: "Come and bid to buy Mangoes",
        //             calories: 100,
        //             price: 2
        //         },
                
                
        //     ]

        // }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

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
                        <Text style={{ ...FONTS.h3,color: 'black', fontWeight: 'bold' }}>{currentLocation.streetName}</Text>
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
                        source={icons.basket}
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
                <Text style={{ ...FONTS.h1 , color: 'black', fontWeight: 'bold'}}>Available</Text>
                <Text style={{ ...FONTS.h1, color: 'black', fontWeight: 'bold' }}>Sellers</Text>

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
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("NextRestaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
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
                        <Text style={{ ...FONTS.h4, color: 'black', fontWeight: 'bold' }}>{item.duration}</Text>
                    </View>
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
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3, color: 'black', fontWeight: 'bold' }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: 'black', fontWeight: 'bold',  color: COLORS.darkgray }}> . </Text>
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
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
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

export default NextHome;