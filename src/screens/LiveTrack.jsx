import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import DeliverySectionSlider from '../components/DeliverySectionSlider';
import Map from '../components/Map';
import CallIcon from '../../assets/Icons/callIcon.svg'


const { width, height } = Dimensions.get('window');


const LiveTrack = () => {
    const navigation = useNavigation();
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
                    <Text style={styles.signup}>Live Tracking</Text>
                </View>

                <Card style={styles.card}>
                    <View style={{ width: 323, height: 400, backgroundColor: "#F5CB58", justifyContent: 'center', alignItems: 'center', borderRadius:20 }}>
                        <Text style={{fontSize:30, color:'#fff'}}>Map</Text>
                    </View>
                    <View style={{ position: 'relative' }}>
                        {/* <Map width={323} height={400} /> */}
                        <View style={styles.buttonsContainer}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Call the delivery boy</Text>
                                <TouchableOpacity style={styles.iconBack}>
                                    <CallIcon width={19} height={20} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Message the delivery boy</Text>
                                <TouchableOpacity style={styles.iconBack}>
                                    <CallIcon width={19} height={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <DeliverySectionSlider />
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
            columnGap: 60
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
            paddingBottom: 0,
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
        buttonsContainer: {
            position: 'absolute',
            bottom: 30,
            right: 5,
            flexDirection: 'column',
            justifyContent: 'space-between',
            rowGap: 15
        },
        button: {
            backgroundColor: '#E95322',
            borderRadius: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 22,
            width: 183,
            flexDirection: 'row',
        },
        buttonText: {
            color: '#FFF',
            fontFamily: 'LeagueSpartanMedium',
            fontSize: 13,
            paddingVertical: 2,
            paddingLeft: 10
        },
        iconBack: {
            backgroundColor: '#F8F8F8',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            shadowColor: '#00000040',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
        }

    }
)

export default LiveTrack;