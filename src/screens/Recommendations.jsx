import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import BackArrow from '../../assets/Icons/backarrow.svg';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RecommendedCard from '../components/RecommendedCards';
import SnackIcon from "../../assets/Icons/SnackIcon.svg";
import MealIcon from "../../assets/Icons/MealIcon.svg";
import { useState } from 'react';


const { width } = Dimensions.get('window');

const RecommendationPage = () => {
    const navigation = useNavigation();
    const [BestSellers, setBestSellers] = useState([
        {
            title: "Chocolate and Fresh Fruit Crepes",
            price: 15,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/bestseller1.png'),
            ratings: 5,
            category: "Snacks",
            icon: <SnackIcon width={18} height={20} strokeWidth={1.5} />,
            quantity: 1
        },
        {
            title: "Gourmet Grilled",
            price: 12,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/skewer.png'),
            ratings: 4.5,
            category: "Snacks",
            icon: <SnackIcon width={18} height={20} strokeWidth={1.5} />,
            quantity: 1
        },
        {
            title: "Barbecue tacos",
            price: 15,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/bestseller2.png'),
            ratings: 4,
            category: "Snacks",
            icon: <MealIcon width={18} height={20} strokeWidth={1.5} />,
            quantity: 1
        },
        {
            title: "Broccoli lasagna",
            price: 12,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/bestseller1.png'),
            ratings: 5,
            category: "Snacks",
            icon: <MealIcon width={18} height={20} strokeWidth={1.5} />,
            quantity: 1
        },
        {
            title: "Broccoli lasagna",
            price: 12,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/bestseller1.png'),
            ratings: 5,
            category: "Snacks",
            icon: <MealIcon width={18} height={20} strokeWidth={1.5} />,
            quantity: 1
        },

    ]);

    // Handler to increment the quantity for a specific item
    const handleIncrement = (index) => {
        const updatedBestSellers = [...BestSellers];
        updatedBestSellers[index].quantity += 1;
        setBestSellers(updatedBestSellers);
    };

    // Handler to decrement the quantity for a specific item
    const handleDecrement = (index) => {
        const updatedBestSellers = [...BestSellers];
        if (updatedBestSellers[index].quantity > 1) {
            updatedBestSellers[index].quantity -= 1;
            setBestSellers(updatedBestSellers);
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.login}>Recommendations</Text>
                </View>
                <Card style={styles.card}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.cardHeading}>Discover the dishes recommended by the chef.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, justifyContent: 'center', columnGap: 5, rowGap: 20 }}>
                        {BestSellers.map((item, index) => (
                            <RecommendedCard
                                key={index}
                                index={index}
                                item={item}
                                onIncrement={() => handleIncrement(index)}
                                onDecrement={() => handleDecrement(index)}
                            />
                        ))}
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
        paddingTop: 50,
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 40,
        marginTop: 20,
    },
    login: {
        fontSize: 28,
        fontFamily: 'LeagueSpartanBold',
        color: '#F8F8F8',
        lineHeight: 25.76,
        textAlign: 'center',
    },
    card: {
        width: width,
        alignSelf: 'center',
        marginTop: 30,
        paddingBottom: "20%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        bottom: 0,
    },
    cardHeading: {
        fontFamily: "LeagueSpartanMedium",
        fontSize: 20,
        color: '#E95322',
        textAlign: 'center',
        marginBottom: 20,
        width: 277
    },
});

export default RecommendationPage;
