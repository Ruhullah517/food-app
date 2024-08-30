import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import StarIcon from '../../assets/Icons/StarIcon.svg';
import LikeIcon from '../../assets/Icons/LikeIcon.svg';
import PlusIcon from '../../assets/Icons/plusIconWhite.svg';
import MinusIcon from '../../assets/Icons/minusIconWhite.svg';
import CircleIcon from '../../assets/Icons/CircleIcon.svg';
import CartIcon from '../../assets/Icons/addCart.svg';
import Star1 from '../../assets/Icons/Star 1.svg';


const { width, height } = Dimensions.get('window');


const FoodDetailPage = ({ route }) => {
    const navigation = useNavigation();
    const { item, advertisement } = route.params;
    const [quantity, setQuantity] = useState(1);
    const [selectedToppings, setSelectedToppings] = useState();
    const handleIncreament = () => {
        setQuantity(quantity + 1);
    };
    const handleDecreament = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const [toppings, setToppings] = useState([
        { id: 1, title: "Guacamole", price: '$2.99', checked: false },
        { id: 2, title: "Jalapeños", price: '$3.99', checked: false },
        { id: 3, title: "Ground Beef", price: '$3.99', checked: false },
        { id: 4, title: "Pico de Gallo", price: '$2.99', checked: false },
    ]);

    const handleCheckboxPress = (id) => {
        const updatedToppings = toppings.map(item => item.id === id ? { ...item, checked: !item.checked } : { ...item, checked: false });
        setToppings(updatedToppings);


        const selected = updatedToppings.filter(item => item.checked).map(item => ({ title: item.title, price: item.price }))
        setSelectedToppings(selected);
        // console.log(selected);
    };
    const addToCart = () => {
        const data = {
            title: item.title,
            price: item.price,
            quantity: quantity,
            toppingsTitle: selectedToppings[0].title,
            toppingsPrice: selectedToppings[0].price,
        };
        console.log(data);
        console.log("submit");
    };

    return (
        <ScrollView >
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 1 }}>
                        <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                            <BackArrow />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column', rowGap: 3 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
                                <Text style={styles.signup}>{item.title}</Text>
                                <View style={{ backgroundColor: '#E95322', width: 5, height: 5, borderRadius: 20 }}>
                                </View>
                            </View>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>{item.ratings.toFixed(1)}<StarIcon /></Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#E95322', width: 21, height: 21, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <LikeIcon width={9} height={8} />
                    </View>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        {advertisement ?
                            <View style={styles.discountContainer}>
                                <View style={{ position: 'relative' }}>
                                    <Star1 width={71} height={71} />
                                    <Text style={styles.discountText}>-{item.discount}%</Text>
                                </View>
                            </View>
                            :
                            null
                        }
                        <Image source={item.image} style={styles.mealsImage} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: "100%", alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>

                                {advertisement ?
                                    <>
                                        <Text style={{ fontFamily: 'LeagueSpartanBold', fontSize: 24, color: '#E95322' }}>${(item.price - (item.price * (item.discount / 100))).toFixed(2)}</Text>
                                        <View style={{ position: 'relative' }}>
                                            <View style={{ width: 52, height: 1, backgroundColor: '#E95322', position: 'absolute', top: 12, zIndex: 1 }}></View>
                                            <Text style={{ fontFamily: 'LeagueSpartanBold', fontSize: 15, color: '#F5CB58' }}>${item.price.toFixed(2)}</Text>
                                        </View>
                                    </>

                                    :
                                    <Text style={{ fontFamily: 'LeagueSpartanBold', fontSize: 24, color: '#E95322' }}>${item.price.toFixed(2)}</Text>
                                }
                            </View>
                            <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                                <TouchableOpacity style={quantity > 1 ? styles.quantityIconBack : styles.quantityIconBackUnActive} onPress={handleDecreament}>
                                    <MinusIcon />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: 'LeagueSpartanRegular', fontSize: 24 }}>{quantity}</Text>
                                <TouchableOpacity style={styles.quantityIconBack} onPress={handleIncreament}>
                                    <PlusIcon />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <View>
                            <Text style={styles.descriptionHead}>{item.descriptionHead}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: "LeagueSpartanMedium", fontSize: 20 }}>Toppings</Text>
                            {toppings.map(item => (
                                <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between', width: "100%", alignItems: 'center' }}>
                                    <Text style={{ fontFamily: "LeagueSpartanLight" }}>{item.title}</Text>
                                    <Text style={{ fontFamily: "LeagueSpartanLight", color: "#FFD8C7" }}>------------------------------</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontFamily: "LeagueSpartanLight", marginRight: 10 }}>{item.price}</Text>
                                        <TouchableOpacity
                                            onPress={() => handleCheckboxPress(item.id)}
                                            style={{
                                                borderColor: "#FF5722",
                                                padding: 2,
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                backgroundColor: '#FFFFFF',
                                                width: 15,
                                                height: 15
                                            }}
                                        >
                                            <CircleIcon
                                                color='#FF5722'
                                                fill={item.checked ? '#FF5722' : '#FFFFFF'}
                                                width={9}
                                                height={9}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}

                        </View>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <TouchableOpacity style={styles.submitButton} onPress={addToCart} >
                                <CartIcon width={16} height={18} />
                                <Text style={styles.submitButtonText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </Card>
            </View>
        </ScrollView>
    )
};

export default FoodDetailPage;

const styles = StyleSheet.create(
    {
        header: {
            backgroundColor: '#F5CB58',
            padding: 25,
            paddingTop: 80,
        },
        headerText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            // backgroundColor: '#9999',
            columnGap: 3
        }
        ,
        signup: {
            fontSize: 20,
            fontFamily: 'LeagueSpartanMedium',
            color: '#391713',
            lineHeight: 18.4,
        },
        ratingContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#E95322',
            borderRadius: 10,
            // width: 34,
            // height:14,
            justifyContent: 'center',
            width: 34,
            // marginLeft: 10
        },
        rating: {
            fontSize: 12,
            color: '#F5F5F5',
            textAlign: 'center',
            fontFamily: 'LeagueSpartanRegular'
        },
        card: {
            width: width,
            height: "100%",
            alignSelf: 'center',
            marginTop: 20,
            paddingBottom: 60,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 30,
            paddingVertical: 25,
            backgroundColor: '#F5F5F5',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            alignItems: 'center'
        },
        container: {
            width: 310,
            // justifyContent:'center',
            alignItems: 'center',
            position: 'relative'
        },
        mealsImage: {
            width: "100%",
            height: 229,
            borderRadius: 36,
        },
        discountContainer: {
            position: 'absolute',
            zIndex: 1,
            right: -20,
            top: -20
        },
        discountText: {
            color: "#fff",
            position: 'absolute',
            top: 20,
            left: 13,
            fontFamily: "LeagueSpartanBold",
            fontSize: 20,
            textAlign: 'center'
        },
        quantityIconBack: {
            backgroundColor: '#E95322',
            width: 21,
            height: 21,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
        },
        quantityIconBackUnActive: {
            backgroundColor: '#FFDECF',
            width: 21,
            height: 21,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
        },
        divider: {
            width: "100%",
            backgroundColor: "#FFD8C7",
            height: 1,
            marginLeft: 1,
        },
        descriptionHead: {
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 16
        },
        description: {
            fontFamily: 'LeagueSpartanLight',
            fontSize: 16
        },
        submitButton: {
            backgroundColor: '#FF5722',
            paddingVertical: 1,
            borderRadius: 20,
            width: 180,
            height: 33,
            alignItems: "center",
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            // columnGap:5
        },
        submitButtonText: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: "LeagueSpartanMedium",
        },
    }

);