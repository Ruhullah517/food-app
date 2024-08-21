import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Polygon from '../../assets/Icons/Polygon 1.svg';
import Polygon2 from '../../assets/Icons/Polygon 2.svg';
import ChipIcon from '../../assets/Icons/chip.svg';


const { width, height } = Dimensions.get('window');


const AddCardPage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    });

    const [cardHolderName, setCardHolderName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const cardData = {
        cardNumber: '000 000 000 00',
        cardHolderName: 'John Smith',
        expiryDate: '04/28',
        cvv: "0000"
    };


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
                    <Text style={styles.signup}>Add Card</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.cardContainer}>
                        <Polygon width={297} height={277} style={styles.polygon1} />
                        <Polygon2 width={278} height={297} style={styles.polygon2} />
                        <View style={{width:51, height:12, borderWidth:2, borderColor:'#391713', position:'absolute', right:18, top:15, borderRadius:2.5}}></View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.accountNmbr}>{cardData.cardNumber}</Text>

                            <View style={{ flexDirection: 'row', columnGap: 45 }}>
                                <View>
                                    <Text style={styles.title}>Card Holder Name</Text>
                                    <Text style={styles.info}>{cardData.cardHolderName}</Text>
                                </View>
                                <View>
                                    <Text style={styles.title}>Expiry Date</Text>
                                    <Text style={styles.info}>{cardData.expiryDate}</Text>
                                </View>
                                <ChipIcon width={30} height={26}  style={{marginLeft:5}}/>
                            </View>


                        </View>
                    </View>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.label}>Card Holder Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#391713"
                                value={cardData.cardHolderName}
                                onChangeText={setCardHolderName}
                            />

                        </View>
                        <View>
                            <Text style={styles.label}>Card Number</Text>
                            <TextInput
                                style={styles.inputAddress}
                                placeholderTextColor="#391713"
                                value={cardData.cardNumber}
                                onChangeText={setCardNumber}
                                multiline={true}
                            />

                        </View>
                        <View style={{flexDirection:'row', columnGap:65}}>
                            <View>
                                <Text style={styles.label}>Expiry Date</Text>
                                <TextInput
                                    style={styles.inputAddress}
                                    placeholderTextColor="#391713"
                                    value={cardData.expiryDate}
                                    onChangeText={setExpiryDate}
                                    multiline={true}
                                />
                            </View>
                            <View>
                                <Text style={styles.label}>CVV</Text>
                                <TextInput
                                    style={styles.inputAddress}
                                    placeholderTextColor="#391713"
                                    value={cardData.cvv}
                                    onChangeText={setCvv}
                                    multiline={true}
                                />

                            </View>


                        </View>


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            mode="contained"
                            onPress={() => { }}
                            style={styles.loginButton}
                            labelStyle={styles.loginButtonText}
                        >
                            Save Card
                        </Button>
                    </View>
                </Card>
            </View>
        </ScrollView>

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
            columnGap: 80
        }
        ,
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
            marginTop: 50,
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
        cardContainer: {
            width: 324,
            height: 195,
            backgroundColor: '#F5CB58',
            borderRadius: 20,
            overflow: 'hidden'
        },
        polygon1: {
            position: 'absolute',
            left: -60,
            top: -70,
            transform: [{ rotateX: '0deg' }, { rotateZ: '0deg' }],
        },
        polygon2: {
            transform: [{ rotateX: '10deg' }, { rotateZ: '70deg' }],
            position: 'absolute',
            right: -90,
            top: -90,
        },
        cardDetails: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            rowGap: 10,
            position: 'relative',
            left: 35,
            top: 40

        },
        accountNmbr: {
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 20,
            color: '#391713'
        },
        title: {
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 12,
            color: '#391713'

        },
        info: {
            fontFamily: 'LeagueSpartanBold',
            fontSize: 14,
            color: '#391713'

        }
        ,
        container: {
            paddingTop: 15,
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: 15,
            paddingBottom: 50
        },
        input: {
            height: 'auto',
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 20,
            backgroundColor: '#F3E9B5',
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 20,
            color: '#391713',
            paddingVertical: 8
        },
        inputAddress: {
            height: "auto",
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 20,
            backgroundColor: '#F3E9B5',
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 20,
            color: '#391713',
            paddingVertical: 8
        },
        label: {
            color: '#391713',
            fontFamily: 'LeagueSpartanMedium',
            fontSize: 20,
            marginBottom: 10
        },
        loginButton: {
            backgroundColor: '#E95322',
            borderRadius: 30,
            width: 106,
            height: 36,
            marginTop: 8,
            marginBottom: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonText: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanMedium',
            paddingVertical: 1,
            width: "100%",
            height: '50%',
        },

    }
)

export default AddCardPage;