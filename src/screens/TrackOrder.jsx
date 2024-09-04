import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CardIcon from '../../assets/Icons/Card icon.svg'
import Map from '../components/Map';


const { width, height } = Dimensions.get('window');


const TrackOrder = ({ route }) => {
    const navigation = useNavigation();
    const { shippingAddress } = route.params;
    console.log(shippingAddress);

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
    return (<>
        <ScrollView >
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.signup}>Delivery Time</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.cardContainer}>
                        <View style={styles.drawerItems}>
                            <View style={{ flexDirection: "column", paddingHorizontal: 15, rowGap: 10, marginBottom: 10 }}>
                                <Text style={styles.shippingtext}>Shipping Address</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="778 Locust View Drive Oaklanda, CA"
                                    placeholderTextColor="#391713"
                                    value={shippingAddress || ""}
                                />
                            </View>
                        </View>
                        <View style={styles.mapCard}>
                            <View style={{ width: 322, height: 170, backgroundColor: "#F5CB58", borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: "LeagueSpartanMedium" }}>Map</Text>
                               
                            </View>
                            {/* <Map width={323} height={170}/> */}
                            <View style={styles.deliveryTimeContainer}>
                                <Text style={styles.deliveryTimeTitle}>Delivery Time</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={styles.deliveryTimeEstimate}>Estimated Delivery</Text>
                                    <Text style={styles.estimateTime}>25 mins</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    backgroundColor: '#FFD8C7',
                                    height: 1,
                                    marginLeft: 0,
                                }}
                            />

                            {/* Progress Steps */}
                            <View style={styles.progressContainer}>
                                <View style={styles.progressStep}>
                                    <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                        <View style={styles.dotContainer}>
                                            <View style={styles.dot} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />

                                        </View>
                                        <Text style={styles.progressText}>Your order has been accepted</Text>
                                    </View>
                                    <Text style={styles.progressTime}>2 min</Text>
                                </View>
                                <View style={styles.progressStep}>
                                    <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                        <View style={styles.dotContainer}>
                                            <View style={styles.dot} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                        </View>
                                        <Text style={styles.progressText}>The restaurant is preparing your order</Text>
                                    </View>
                                    <Text style={styles.progressTime}>5 min</Text>
                                </View>
                                <View style={styles.progressStep}>
                                    <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                        <View style={styles.dotContainer}>
                                            <View style={styles.dot} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                            <View style={styles.dottedLine} />
                                        </View>
                                        <Text style={styles.progressText}>The delivery is on his way</Text>
                                    </View>
                                    <Text style={styles.progressTime}>10 min</Text>
                                </View>
                                <View style={styles.progressStep}>
                                    <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                        <View style={styles.dotContainer}>
                                            <View style={styles.dot} />
                                        </View>
                                        <Text style={styles.progressText}>Your order has been delivered</Text>
                                    </View>
                                    <Text style={styles.progressTime}>8 min</Text>
                                </View>
                            </View>

                            {/* Buttons */}
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate('HomePage')}>
                                    <Text style={styles.buttonTextReturn}>Return Home</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.trackButton} onPress={() => { }}>
                                    <Text style={styles.buttonText}>Track Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Card >
            </View >
        </ScrollView >

    </>
    )
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
            columnGap: 60
        }
        ,
        signup: {
            fontSize: 28,
            fontFamily: 'LeagueSpartanBold',
            color: '#F8F8F8',
            textAlign: 'center',
        },
        card: {
            width: width,
            height: "100%",
            alignSelf: 'center',
            marginTop: 20,
            paddingBottom: 20,
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
        drawerItems: {
            width: width * 0.95,
        },
        shippingtext: {
            fontFamily: "LeagueSpartanBold",
            fontSize: 24
        },
        input: {
            height: 35,
            borderColor: '#8b4513',
            // borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 15,
            marginBottom: 10,
            backgroundColor: '#F3E9B5',
        },
        mapCard: {
            paddingHorizontal: 10,
        },
        map: {
            width: 322,
            height: 190,
            borderRadius: 10,
        },
        deliveryTimeContainer: {
            marginTop: 15,
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 5
        },
        deliveryTimeTitle: {
            fontSize: 20,
            color: '#391713',
            fontFamily: 'LeagueSpartanMedium'
        },
        deliveryTimeEstimate: {
            fontSize: 14,
            color: '#391713',
            fontFamily: 'LeagueSpartanLight'
        },
        estimateTime: {
            color: '#E95322',
            fontFamily: 'LeagueSpartanMedium',
            fontSize: 20
        },
        dotContainer: {
            width: 5,
            alignItems: 'center',
        },
        dot: {
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#FFDECF',
            marginTop: 4
        },
        dottedLine: {
            // flex: 1,
            width: 1,
            backgroundColor: '#FFDECF',
            opacity: 0.5,
            height: 2,
            marginTop: 2
        },
        progressContainer: {
            marginBottom: 20,
            marginTop: 10
        },
        progressStep: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 0,
            alignItems: 'flex-start'
        },
        progressText: {
            fontSize: 14,
            color: '#391713',
            fontFamily: 'LeagueSpartanLight'
        },
        progressTime: {
            fontSize: 14,
            color: '#391713',
            fontFamily: 'LeagueSpartanLight'
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        returnButton: {
            backgroundColor: '#FFDECF',
            borderRadius: 20,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 140,
            height: 34
        },
        trackButton: {
            backgroundColor: '#E95322',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: 140,
            height: 34,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: "LeagueSpartanRegular"
        },
        buttonTextReturn: {
            color: '#E95322',
            fontSize: 20,
            fontFamily: "LeagueSpartanRegular"
        },
    }
)

export default TrackOrder;