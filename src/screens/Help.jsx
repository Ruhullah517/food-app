import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DoneIcon from '../../assets/Icons/DoneIcon.svg';


const { width, height } = Dimensions.get('window');


const HelpPage = () => {
    const navigation = useNavigation();
    // const { orderItems, totalAmount, shippingAddress } = route.params;
    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    });

    const helpMethods = [
        {
            id: 1,
            title: "Help with the order",
            description: 'Support',
            checked: false,
            path: () => navigation.navigate('Support')
        },
        {
            id: 2,
            title: "Help center",
            description: 'General Information',
            checked: false,
            path: () => navigation.navigate('Help&FAQs')
        },
    ];


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
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.signup}>Help</Text>
                    </View>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        <Text style={styles.topText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor.
                        </Text>
                        {
                            helpMethods.map((method, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity  style={styles.rowBox} onPress={method.path}>
                                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <Text style={styles.label}>{method.title}</Text>
                                                <Text style={styles.description}>{method.description}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.downArrow}>
                                                <BackArrow />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
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
            columnGap: 110
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
        container: {
            paddingTop: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            rowGap: 15,
        },
        topText: {
            fontFamily: 'LeagueSpartanLight',
            fontSize: 14,
            borderBottomWidth: 1,
            borderColor: '#FFD8C7',
            paddingBottom: 20,

        },
        rowBox: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 5,
            width: 323,
            borderBottomWidth: 1,
            borderColor: '#FFD8C7',
            paddingBottom: 20

        },
        label: {
            color: '#391713',
            fontFamily: 'LeagueSpartanMedium',
            fontSize: 20,
        },
        description: {
            fontFamily: 'LeagueSpartanLight',
            fontSize: 14,
            color: "#391713"
        },
        downArrow: {
            transform: [{ rotate: '180deg' }]
        },
    }
)

export default HelpPage;