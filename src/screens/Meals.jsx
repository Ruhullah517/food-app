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
        StarIcon: <StarIcon/>,
        price: '$10.00',
        alt: 'Delicious burger',
        heart: <Heart width={16} height={16} />
    },
    {
        image: require("../../assets/burger2.png"),
        rating: '5.0',
        StarIcon: <StarIcon/>,
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
    if (!loaded) {
        return null;
    }
    return (<>
        <ScrollView>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 25 }}>

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
                        <TouchableOpacity  onPress={openProfileDrawer}>
                            <View style={styles.iconBack}>
                                <ProfileIcon width={16} height={16} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.greeting}>Meals Page</Text>
                <Text style={styles.subtitle}>Rise And Shine! It's Breakfast Time</Text>
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
                    <View style={{ width: width * 0.84, backgroundColor: "#FFD8C7", height: 1, marginLeft: 6 }}></View>
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Best Seller</Text>
                            <TouchableOpacity>
                                <Text style={styles.viewAll}>View All
                                    <Arrow name="navigate-next" size={15} color="#E95322" />
                                </Text>

                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {[
                                {
                                    price: '$103.0',
                                    image: require("../../assets/sushi.png")
                                },
                                {
                                    price: '$50.0',
                                    image: require("../../assets/dish2.png")

                                },
                                {
                                    price: '$12.99',
                                    image: require("../../assets/dish3.png")

                                },
                                {
                                    price: '$8.20',
                                    image: require("../../assets/dish4.png")

                                }].map((prdct, index) => (
                                    <View key={index} style={styles.product}>
                                        <Image source={prdct.image} style={styles.productImage} />
                                        <View style={styles.priceTag}>
                                            <Text style={styles.priceText}>{prdct.price}</Text>
                                        </View>
                                    </View>
                                ))}
                        </ScrollView>
                    </View>
                    <View style={styles.discountContainer}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            onScroll={handleScroll}
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                        >
                            {data.map((item, index) => (
                                <View key={index} style={styles.discountCard}>
                                    <Ellipse width={55} height={55} style={styles.ellipse} />
                                    <Ellipse width={46} height={46} style={styles.ellipse2} />
                                    <View style={styles.textContainer}>

                                        <Text style={styles.discountDescription}>{item.description}</Text>
                                        <Text style={styles.discount}>{item.discount}</Text>

                                    </View>
                                    <Image source={item.image} style={styles.image} />
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.pagination}>
                            {data.map((_, index) => (
                                <TouchableOpacity key={index} style={[styles.dot, currentPage === index && styles.activeDot]} />
                            ))}
                        </View>
                    </View>
                    <View style={styles.reContainer}>
                        <Text style={styles.reHeader}>Recommend</Text>
                        <View style={styles.reGrid}>
                            {recommend.map((item, index) => (
                                <View key={index} style={styles.reCard}>
                                    <Image source={item.image} style={styles.reImage} alt={item.alt} />
                                    <View style={styles.reRatingContainer}>
                                        <View style={styles.reRating}>
                                            <Text style={styles.reRatingText}>{item.rating} {item.StarIcon}</Text>
                                        </View>
                                        
                                        <Text style={styles.reRatingText}>{item.heart}</Text>
                                    </View>
                                    <View style={styles.rePriceTag}>
                                        <Text style={styles.rePriceText}>{item.price}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
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
    greeting: {
        fontSize: 30,
        fontWeight: "700",
        marginTop: 20,
        fontFamily: 'LeagueSpartanBold',
        color: '#F8F8F8',
        lineHeight: 28.6
    },
    subtitle: {
        fontSize: 13,
        color: '#E95322',
        fontFamily: 'LeagueSpartanMedium',
        fontWeight: '500',
        lineHeight: 11.96
    },
    card: {
        width: width,
        alignSelf: 'center',
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        bottom: 0,
        paddingBottom:30
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
        margin: 5,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'LeagueSpartanMedium',
    },
    viewAll: {
        fontSize: 12,
        color: '#E95322',
        fontFamily: 'LeagueSpartanSemiBold',
        fontWeight: '600',

    },
    product: {
        width: 80,
        alignItems: 'flex-start',
        position: 'relative',
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 5

    },
    productImage: {
        width: 71.68,
        height: 108,
        borderRadius: 20,
    },
    priceTag: {
        position: 'absolute',
        bottom: 10,
        right: 6,
        backgroundColor: '#E95322',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        paddingVertical: 3,
        paddingHorizontal: 5,
    },
    priceText: {
        color: '#FFF',
        fontWeight: '400',
        fontFamily: 'LeagueSpartanRegular',
        fontSize: 12,
    },
    discountContainer: {
        width: width * 0.87,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 5,
        marginLeft: 3,
        position: 'relative'
    },
    discountCard: {
        width: 310,
        height: 128,
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        marginRight: 5
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
    },
    textContainer: {
        width: '50%',
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#E95322',
        alignItems: 'center',
        position: 'relative'
    },
    discountDescription: {
        width: 123,
        height: 30,
        fontSize: 16,
        color: '#F8F8F8',
        fontFamily: 'LeagueSpartanRegular',
        fontWeight: "400",
        lineHeight: 14.72,
        textAlign: 'center'
    },
    discount: {
        width: 127,
        fontFamily: 'LeagueSpartanBold',
        fontWeight: "700",
        fontSize: 32,
        color: '#F8F8F8',
        alignItems: 'center'
    },
    ellipse: {
        zIndex: 5,
        position: 'absolute',
        right: 150,
        top: -17,
    },
    ellipse2: {
        zIndex: 5,
        position: 'absolute',
        bottom: -8,
        left: -15,
        transform: [{ rotateX: '180deg' }]

    }
    ,
    image: {
        width: '65%',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

    },
    pagination: {
        flexDirection: 'row',
        marginTop: 10,
    },
    dot: {
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#F3E9B5',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#ff6347',
    },
    reContainer: {
        paddingTop: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    reHeader: {
        fontSize: 20,
        fontWeight: '500',
        color: '#391713',
        fontFamily: "LeagueSpartanMedium"
    },
    reGrid: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 5
    },
    reCard: {
        position: 'relative',
        width: 159,
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 20,
        opacity: 1,
    },
    reImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    reRatingContainer: {
        position: 'absolute',
        top: 10,
        left: 12,
        flexDirection: 'row',
        columnGap: 5,
        justifyContent:'center',
        alignItems:'center',
        
    },
    reRating: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingBottom: 1,
        paddingHorizontal: 2,
        paddingTop:0,
        justifyContent:'center',
    },
    reRatingText: {
        color: '#391713',
        fontSize:12,
        fontFamily: "LeagueSpartanRegular"// Adjust color as needed
    },
    rePriceTag: {
        position: 'absolute',
        bottom: 10,
        right: -2,
        backgroundColor: '#E95322',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        paddingVertical: 3,
        paddingHorizontal: 5,


    },
    rePriceText: {
        color: '#fff',
        fontFamily: "LeagueSpartanRegular"
    },
});

export default MealsPage;