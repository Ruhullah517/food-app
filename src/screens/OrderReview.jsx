import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { Card } from 'react-native-paper';
import Rating from '../components/RatingStar';
// import BotStar from '../../assets/Icons/bot-star.svg';



const { width, height } = Dimensions.get('window');

const LeaveReviewPage = ({ route, navigation }) => {
    console.log(route); // Add this line to see the route object
    const { order } = route.params || {};
    console.log(order);


    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })

    const handleSubmit = () => {
        // const reviewData = {
        //     product: 'Chicken Curry', // Replace with the dynamic product name if necessary
        //     rating,
        //     review
        // };
        // console.log('Review Data:', reviewData);
        // Handle the submission logic here (e.g., send to an API or store locally)
    };


    if (!loaded) {
        return null;
    };
    return (<>
        <ScrollView
            showsVerticalScrollIndicator={true}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity  style={{padding:5, marginLeft:-5}} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.login}>Leave a Review</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        <Image source={order.image} style={styles.image} />
                        <Text style={styles.productName}>{order.name}</Text>
                        <Text style={styles.text}>We'd love to know what you think of your dish.</Text>
                        <View style={styles.ratingContainer}>
                            <Rating rating={rating} setRating={setRating} />
                        </View>
                        <Text style={styles.text}>Leave us your comment!</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Write your review..."
                            value={review}
                            onChangeText={setReview}
                            multiline
                            placeholderTextColor={{ color: "#000" }}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>
        </ScrollView>

    </>
    );
};

const styles = StyleSheet.create(
    {
        header: {
            backgroundColor: '#F5CB58',
            padding: 30,
            paddingTop: 50,
        },
        headerText: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            columnGap: 50,
            marginTop: 20
        }
        ,
        login: {
            fontSize: 28,
            fontFamily: 'LeagueSpartanBold',
            color: '#F8F8F8',
            lineHeight: 25.76,
            textAlign: 'center',
        },
        card: {
            width: width,
            height:"100%",
            alignSelf: 'center',
            marginTop: 30,
            paddingBottom: 35,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 30,
            backgroundColor: '#F5F5F5',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            bottom: 0
        }
        ,

        container: {
            // flex: 1,
            alignItems: 'center',
            // padding: 20,
            // backgroundColor: '#fff',
        },
        image: {
            width: 157,
            height: 157,
            borderRadius: 32,
            marginBottom: 20,
        },
        productName: {
            fontSize: 24,
            fontFamily: 'LeagueSpartanBold',
            marginBottom: 10,
        },
        text: {
            fontSize: 25,
            marginBottom: 20,
            textAlign: 'center',
            fontFamily: 'LeagueSpartanLight',
            color: "#391713"
        },
        ratingContainer: {
            flexDirection: 'row',
            marginBottom: 5,
        },
        textInput: {
            width: 323,
            height: 95,
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#F3E9B5',
            marginBottom: 20,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            marginTop: 10,
            columnGap: 20
        },
        cancelButton: {
            backgroundColor: '#FFDECF',
            width: 153,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
        },
        cancelButtonText: {
            fontFamily: "LeagueSpartanRegular",
            fontSize: 17,
            color: "#E95322"
        },
        submitButton: {
            backgroundColor: '#E95322',
            width: 153,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
        },
        submitButtonText: {
            fontFamily: "LeagueSpartanRegular",
            fontSize: 17,
            color: "#FFFF"
        }


    }
);

export default LeaveReviewPage;
