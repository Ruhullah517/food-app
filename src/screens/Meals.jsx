import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import CartIcon from "../../assets/Icons/cart.svg";
import FilterIcon from "../../assets/Icons/filterIcon.svg";
import ProfileIcon from "../../assets/Icons/ProfileIcon.svg";
import NotifyIcon from "../../assets/Icons/NotifyIcon.svg";
import SnackIcon from "../../assets/Icons/SnackIcon.svg";
import VeganIcon from "../../assets/Icons/VeganIcon.svg";
import MealIcon from "../../assets/Icons/MealIcon.svg";
import DrinksIcon from "../../assets/Icons/DrinksIcon.svg";
import DessertIcon from "../../assets/Icons/DessertIcon.svg";
import Ellipse from "../../assets/Icons/Ellipse 13.svg";
import Heart from "../../assets/Icons/heart.svg"
import { useFonts } from 'expo-font';
import { Card } from 'react-native-paper';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import StarIcon from '../../assets/Icons/StarIcon.svg'
import { useNavigation } from '@react-navigation/native';
import { ProfileDrawerContext, NotificationsDrawerContext, CartDrawerContext } from '../DrawerContext';


const { width, height } = Dimensions.get('window');

const data = [
    {
        title: "Page 1",
        description: "Experience our delicious new dish",
        discount: "30% OFF",
        image: require("../../assets/a71428bad6f8180bac9ad440a389a541.png")
    },
    {
        title: "Page 2 ",
        description: "Experience our delicious new dish",
        discount: "30% OFF",
        image: require("../../assets/10dbbfa35444d8a696a8e628115ab848.png")

    },
    {
        title: "Page 3",
        description: "Experience our delicious new dish",
        discount: "30% OFF",
        image: require("../../assets/a71428bad6f8180bac9ad440a389a541.png")

    }
];
const recommend = [
    {
        image: require("../../assets/burger.png"),
        rating: '5.0',
        StarIcon: <StarIcon />,
        price: '$10.00',
        alt: 'Delicious burger',
        heart: <Heart width={16} height={16} />
    },
    {
        image: require("../../assets/burger2.png"),
        rating: '5.0',
        StarIcon: <StarIcon />,
        price: '$25.00',
        alt: 'Fresh spring rolls',
        heart: <Heart width={16} height={16} />
    }
];

const MealsPage = () => {
    const navigation = useNavigation();
    const { openProfileDrawer } = useContext(ProfileDrawerContext);
    const { openNotificationsDrawer } = useContext(NotificationsDrawerContext);
    const { openCartDrawer } = useContext(CartDrawerContext);

    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const pageIndex = Math.round(offsetX / width);
        setCurrentPage(pageIndex);
    };

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })

    const snacks = [
        {
            id: 1,
            title: "Mexican Appetitzer",
            description: 'Tortilla Chips With Toppins',
            ratings: 5,
            price: "15",
            image: require('../../assets/chola.png')
        },
        {
            id: 2,
            title: "Mexican Appetitzer",
            description: 'Tortilla Chips With Toppins',
            ratings: 5,
            price: "15",
            image: require('../../assets/chola.png')
        }
    ]


    if (!loaded) {
        return null;
    }
    return (<>
        <ScrollView>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 25, marginBottom: 20 }}>

                    <View style={styles.searchBarContainer}>
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Search"
                        />
                        <TouchableOpacity style={styles.searchIcon}>
                            <FilterIcon width={20} height={20} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity onPress={openCartDrawer}>
                            <View style={styles.iconBack}>
                                <CartIcon width={16} height={16} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openNotificationsDrawer} >
                            <View style={styles.iconBack}>
                                <NotifyIcon width={16} height={16} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openProfileDrawer}>
                            <View style={styles.iconBack}>
                                <ProfileIcon width={16} height={16} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Card style={styles.card}>
                    <View style={styles.categories}>
                        {[{
                            name: 'Snacks',
                            icon: <SnackIcon width={49} height={62} style={styles.icon} />
                        },
                        {
                            name: 'Meal',
                            icon: <MealIcon width={49} height={62} style={styles.icon} />

                        },
                        {
                            name: 'Vegan',
                            icon: <VeganIcon width={49} height={62} style={styles.icon} />

                        },
                        {
                            name: 'Dessert',
                            icon: <DessertIcon width={49} height={62} style={styles.icon} />

                        },
                        {
                            name: 'Drinks',
                            icon: <DrinksIcon width={49} height={62} style={styles.icon} />

                        }].map(category => (
                            <View key={category.name} style={styles.category}>
                                {category.icon}
                                <Text style={styles.categoryName}>{category.name}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        {snacks.map((item) => (
                            <View style={styles.mealsCard}>
                                <Image source={item.image} style={styles.mealsImage} />
                                <View style={styles.infoContainer}>
                                    <View style={styles.titleRow}>
                                        <Text style={styles.mealTitle}>{item.title}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                    <View style={styles.ratingContainer}>
                                        <Text style={styles.rating}></Text>
                                    </View>
                                    <Text style={styles.price}>${item.price}</Text>
                                </View>
                            </View>
                        )
                        )}

                    </View>



                </Card>

            </View>
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F5CB58',
        padding: 30,
        paddingTop: 40,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
    },
    searchBar: {
        flex: 1,
        height: 26,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingLeft: 36,
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        right: 5,
        top: 3,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        columnGap: 5
    },
    iconBack: {
        backgroundColor: "#F5F5F5",
        padding: 4,
        borderRadius: 10
    },
    icon: {
        width: 30,
        height: 30,
    },

    card: {
        width: width,
        alignSelf: 'center',
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        backgroundColor: '#E95322',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        bottom: 0,
        paddingBottom: 30
    }
    ,
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        paddingHorizontal: 10,
    },

    category: {
        alignItems: 'center',
    },
    categoryName: {
        fontFamily: 'LeagueSpartanRegular',
        fontWeight: '400',
        fontSize: 12
    }
    ,
    categoryIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    section: {
        width: width,
        alignSelf: 'center',
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        bottom: 0,
        paddingBottom: 30
    },
    mealsCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginVertical: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    mealsImage: {
        width: 323,
        height: 174,
        borderRadius: 36,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 20
    },
    titleRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    mealTitle: {
        fontSize: 18,
        fontFamily: 'LeagueSpartanSemiBold'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        color: 'orange',
        marginRight: 5,
    },
    description: {
        fontSize: 12,
        color: '#666',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E91E63',
        textAlign: 'right',
    }
});

export default MealsPage;