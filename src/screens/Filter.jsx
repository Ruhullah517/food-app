import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SnackIcon from "../../assets/Icons/SnackIcon.svg";
import VeganIcon from "../../assets/Icons/VeganIcon.svg";
import MealIcon from "../../assets/Icons/MealIcon.svg";
import DrinksIcon from "../../assets/Icons/DrinksIcon.svg";
import DessertIcon from "../../assets/Icons/DessertIcon.svg";
import BackArrow from '../../assets/Icons/backarrow.svg';
import PriceRangeSlider from '../components/PriceSlider';
import Rating from '../components/RatingStar';
import BtnsList from '../components/BtnsList';

const { width } = Dimensions.get('window');

const FilterPage = () => {
    const navigation = useNavigation();
    const [rating, setRating] = useState(0);
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 100]);


    const handleCategorySelection = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const onApply = () => {
        console.log('Selected Category:', selectedCategory);
        console.log('Rating:', rating);
        console.log('Selected Buttons:', selectedButtons);
        console.log('Price Range:', priceRange);
        navigation.navigate('HomePage')
    };

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.signup}>Filter</Text>
                    </View>
                </View>
                <Card style={styles.card}>
                    <Text style={{ fontFamily: "LeagueSpartanMedium", fontSize: 20, color: "#391713" }}>Categories</Text>
                    <View style={styles.categories}>
                        {[
                            { name: 'Snacks', icon: <SnackIcon width={32} height={37} style={styles.icon} /> },
                            { name: 'Meal', icon: <MealIcon width={17} height={37} style={styles.icon} /> },
                            { name: 'Vegan', icon: <VeganIcon width={37} height={37} style={styles.icon} /> },
                            { name: 'Dessert', icon: <DessertIcon width={29} height={37} style={styles.icon} /> },
                            { name: 'Drinks', icon: <DrinksIcon width={21} height={37} style={styles.icon} /> },
                        ].map(category => (
                            <TouchableOpacity key={category.name} onPress={() => handleCategorySelection(category.name)}>
                                <View style={styles.category}>
                                    <View style={selectedCategory === category.name ? styles.iconsBackGroundActive : styles.iconsBackGround}>
                                        {category.icon}
                                    </View>
                                    <Text style={styles.categoryName}>{category.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.divider}></View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: "LeagueSpartanMedium", fontSize: 20, color: "#391713" }}>Sort by</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: "LeagueSpartanLight", fontSize: 14, color: "#391713" }}>Top Rated</Text>
                            <Rating rating={rating} setRating={setRating} />
                        </View>
                        <View style={styles.divider}></View>
                    </View>
                    <View>
                        <Text style={styles.subHeader}>Categories</Text>
                        <View style={styles.btnContainer}>
                            <BtnsList selectedButtons={selectedButtons} setSelectedButtons={setSelectedButtons} selectedCategory={selectedCategory}/>
                        </View>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={{ marginTop: 10, marginBottom: 20 }}>
                        <Text style={styles.priceLabel}>Price</Text>
                        <PriceRangeSlider setPriceRange={setPriceRange} />
                    </View>
                    <View style={{ alignItems: "center", marginTop: 40 }}>
                        <TouchableOpacity style={styles.submitButton} onPress={onApply}>
                            <Text style={styles.submitButtonText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F5CB58',
        padding: 30,
        paddingTop: 40,
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 100,
        marginTop: 20
    },
    signup: {
        fontSize: 28,
        fontFamily: 'LeagueSpartanBold',
        color: '#F8F8F8',
        lineHeight: 25.76,
        textAlign: 'center',
    },
    card: {
        width: width,
        height: "100%",
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
        paddingBottom: 30
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
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    category: {
        alignItems: 'center',
    },
    categoryName: {
        fontFamily: 'LeagueSpartanRegular',
        fontWeight: '400',
        fontSize: 12
    },
    btnContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 10,
        rowGap: 10
    },
    cancelButton: {
        backgroundColor: '#FFDECF',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: 99,
        height: 24,
        alignItems: 'center'
    },
    cancelButtonText: {
        fontSize: 14,
        fontFamily: 'LeagueSpartanRegular',
        color: '#E95322',
        textAlign: 'center'
    },
    selectedButton: {
        backgroundColor: '#E95322',
    },
    selectedButtonText: {
        color: '#FFFFFF',
    },
    divider: {
        width: width * 0.84,
        backgroundColor: "#FFD8C7",
        height: 1,
        marginLeft: 6,
        marginTop: 10,
    },
    subHeader: {
        fontFamily: 'LeagueSpartanLight',
        fontSize: 14,
        color: '#391713',
        marginTop: 5,
        marginBottom: 10,
    },
    priceLabel: {
        fontFamily: 'LeagueSpartanMedium',
        fontSize: 20,
        color: '#E95322',
    },
    submitButton: {
        backgroundColor: '#FF5722',
        borderRadius: 30,
        paddingVertical: 1,
        // paddingHorizontal: 40,
        width: 157,
        height: 38,
    },
    submitButtonText: {
        fontFamily: 'LeagueSpartanMedium',
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'center'
    },
});

export default FilterPage;
