import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BackArrow from '../../assets/Icons/backarrow.svg';
import { Card } from 'react-native-paper';
import SnackIcon from "../../assets/Icons/SnackIcon.svg";
import VeganIcon from "../../assets/Icons/VeganIcon.svg";
import MealIcon from "../../assets/Icons/MealIcon.svg";
import DrinksIcon from "../../assets/Icons/DrinksIcon.svg";
import DessertIcon from "../../assets/Icons/DessertIcon.svg";
import LikeIcon from '../../assets/Icons/LikeIconOrange.svg';


const { width } = Dimensions.get('window');

const BestSellerPage = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => ''}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.login}>Best Seller</Text>
                </View>
                <Card style={styles.card}>
                    <Text style={styles.cardHeading}>Discover our most popular dishes!</Text>
                    <View style={styles.itemCard}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../assets/skewer.png')} // Replace with your image URL
                                style={styles.image}
                            />
                            <TouchableOpacity style={styles.iconTopLeft}>
                                <SnackIcon width={18} height={20} strokeWidth={1.5} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconTopRight}>
                                <LikeIcon width={12} height={12}/>
                            </TouchableOpacity>
                            <View style={styles.priceTag}>
                                <Text style={styles.priceText}>$15.00</Text>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.titleRow}>
                                <Text style={styles.title}>Sunny Bruschetta</Text>
                                <View style={styles.rating}>
                                    <Text style={styles.ratingText}>5.0</Text>
                                    <MaterialIcons name="star" size={16} color="orange" />
                                </View>
                            </View>
                            <View style={styles.descriptionRow}>
                                <Text style={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur...
                                </Text>
                                <TouchableOpacity>
                                    <Ionicons name="cart" size={24} color="orange" />
                                </TouchableOpacity>
                            </View>
                        </View>
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
        columnGap: 80,
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
        padding: 30,
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
        textAlign: 'center'
    },
    itemCard: {
        borderRadius: 20,
        backgroundColor: '#888',
        margin: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
        // elevation: 5,
        // overflow: 'hidden',
        width: 158
    },
    imageContainer: {
        position: 'relative',
        shadowColor: '#000',

    },
    image: {
        width: '100%',
        height: 141,
        borderRadius: 20,
    },
    iconTopLeft: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: "#F8F8F8",
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    iconTopRight: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: "#F8F8F8",
        width: 21,
        height: 21,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    priceTag: {
        position: 'absolute',
        bottom: 16,
        right: -2,
        backgroundColor: '#E95322',
        // paddingVertical: 1,
        // paddingHorizontal: 10,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        width: 44,
        height: 16,
        alignItems: 'center',
      

    },
    priceText: {
        color: '#fff',
        fontFamily: 'LeagueSpartanRegular',
        fontSize: 12,
        textAlign: 'center',
        alignItems: 'center'
    },
    textContainer: {
        padding: 10,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: 'LeagueSpartanMedium',
        color: '#391713',
        width: 106
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginRight: 5,
        fontWeight: 'bold',
        color: 'orange',
    },
    descriptionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    description: {
        color: '#391713',
        fontSize: 12,
        flex: 1,
        marginRight: 10,
        fontFamily: 'LeagueSpartanLight',
        width: 118
    },
});

export default BestSellerPage;
