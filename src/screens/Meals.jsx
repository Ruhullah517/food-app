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
import MealsPageCards from '../components/MealPageCards';


const { width, height } = Dimensions.get('window');

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
        PoppinsSemiBold: require('../../assets/fonts/Poppins SemiBold.ttf'),
    });

    const [selectedCategory, setSelectedCategory] = useState("Snacks");
    const handleCategorySelection = (categoryName) => {
        setSelectedCategory(categoryName);
    };

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
                            icon: <SnackIcon width={32} height={37} style={styles.icon} />
                        },
                        {
                            name: 'Meal',
                            icon: <MealIcon width={17} height={37} style={styles.icon} />

                        },
                        {
                            name: 'Vegan',
                            icon: <VeganIcon width={37} height={37} style={styles.icon} />

                        },
                        {
                            name: 'Dessert',
                            icon: <DessertIcon width={29} height={37} style={styles.icon} />

                        },
                        {
                            name: 'Drinks',
                            icon: <DrinksIcon width={21} height={37} style={styles.icon} />

                        }].map((category, index) => (
                            <View key={category.name} style={selectedCategory === category.name ? styles.categoryActive : styles.category}>
                                <TouchableOpacity key={category.name} onPress={() => handleCategorySelection(category.name)}>
                                    <View style={selectedCategory === category.name ? styles.iconsBackGroundActive : styles.iconsBackGround}>
                                        {category.icon}
                                    </View>
                                    <Text style={styles.categoryName}>{category.name}</Text>
                                    {selectedCategory === category.name ? <View style={index === 0 ? styles.curvedFirst : styles.curved}></View> : null}
                                    {selectedCategory === category.name ? <View style={index === 4 ? styles.curved2Last : styles.curved2}></View> : null}
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <View>
                            <View style={{ flexDirection: 'row', columnGap: 5 }}>
                                <Text style={{ fontFamily: 'LeagueSpartanLight', fontSize: 12, color: '#070707' }}>Sort By</Text>
                                <Text style={{ color: '#E95322', fontFamily: 'LeagueSpartanLight', fontSize: 12 }}>Popular</Text>
                            </View>
                            <TouchableOpacity style={styles.searchIcon} onPress={() => navigation.navigate('Filter')}>
                                <FilterIcon width={20} height={20} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <MealsPageCards selectedCategory={selectedCategory} />
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
        paddingBottom: 30,

    }
    ,
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        paddingHorizontal: 8,
        marginBottom: -10
    },
    category: {
        alignItems: 'center',
        width: 65,
        marginBottom: -10,
        paddingVertical: 8,

    },
    categoryActive: {
        alignItems: 'center',
        width: 65,
        marginBottom: -10,
        paddingVertical: 10,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'relative'
    },
    categoryName: {
        fontFamily: 'LeagueSpartanRegular',
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center'
    },
    curvedFirst: {
        width: 20,
        height: 20,
        backgroundColor: "transparent",
        position: 'absolute',
        bottom: -8,
        left: -22,
        borderBottomRightRadius: 50,
        borderBottomWidth: 3,
        borderColor: "#F5F5F5",
        borderRightWidth: 6
    },
    curved: {
        width: 20,
        height: 20,
        backgroundColor: "transparent",
        position: 'absolute',
        bottom: -6,
        left: -22,
        borderBottomRightRadius: 50,
        borderBottomWidth: 6,
        borderColor: "#F5F5F5",
        borderRightWidth: 6
    },
    curved2Last: {
        width: 15,
        height: 15,
        backgroundColor: "transparent",
        position: 'absolute',
        bottom: -5,
        right: -18,
        borderBottomLeftRadius: 50,
        borderBottomWidth: 2,
        borderColor: "#F5F5F5",
        borderLeftWidth: 5,
        zIndex: 1
    },
    curved2: {
        width: 15,
        height: 15,
        backgroundColor: "transparent",
        position: 'absolute',
        bottom: -5,
        right: -18,
        borderBottomLeftRadius: 50,
        borderBottomWidth: 5,
        borderColor: "#F5F5F5",
        borderLeftWidth: 5,
        zIndex: 1
    },
    connector: {
        position: 'absolute',
        bottom: -20,
        width: '100%',
        height: 20,
        backgroundColor: '#F5CB58',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    categoryIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    iconsBackGround: {
        backgroundColor: '#F3E9B5',
        width: 49,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    iconsBackGroundActive: {
        backgroundColor: '#F5CB58',
        width: 49,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    section: {
        width: width,
        alignSelf: 'center',
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 5,
        bottom: 0,
        paddingBottom: 30
    },
    mealsCard: {
        // backgroundColor: '#fff',
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
    },
    titleRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    mealTitle: {
        fontSize: 18,
        fontFamily: 'PoppinsSemiBold',
        color: '#391713'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E95322',
        borderRadius: 10,
        // width: 34,
        // height:14,
        justifyContent: 'center',
        paddingHorizontal: 4
    },
    rating: {
        fontSize: 12,
        marginRight: 5,
        color: '#F5F5F5',
        textAlign: 'center',
        fontFamily: 'LeagueSpartanRegular'
    },
    description: {
        fontSize: 12,
        color: '#666',
        fontFamily: 'LeagueSpartanLight',
        marginTop: -10,
        width: 231
    },
    price: {
        fontSize: 18,
        fontFamily: "LeagueSpartanRegular",
        color: '#E91E63',
        textAlign: 'right',
    }
});

export default MealsPage;