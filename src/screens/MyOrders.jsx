import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button } from 'react-native-paper';
import DimDocument from '../../assets/Icons/dimDocument.svg'
import { useNavigation } from '@react-navigation/native';
import OrderItem from '../components/OrderItem';
import ActiveOrders from '../components/ActiveOrders';
import CompletedOrders from '../components/CompletedOrders';
import CancelledOrders from '../components/CancelledOrders';

const { width, height } = Dimensions.get('window');


const MyOrders = () => {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })
    const [pressed, setPressed] = useState(0);



    if (!loaded) {
        return null;
    }
    return (<>
        <View style={styles.header}>
            <View style={styles.headerText}>
                <TouchableOpacity  style={{padding:5, marginLeft:-5}} onPress={()=>navigation.goBack()}>
                    <BackArrow />
                </TouchableOpacity>
                <Text style={styles.login}>My Orders</Text>
            </View>

            <Card style={styles.card}>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 10, marginTop: 30 }}>
                        <Button
                            mode="contained"
                            onPress={() => setPressed(0)}
                            style={pressed === 0 ? styles.loginButtonActive : styles.loginButton}
                            labelStyle={pressed === 0 ? styles.loginButtonTextActive : styles.loginButtonText}
                        >
                            Active
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => setPressed(1)}
                            style={pressed === 1 ? styles.loginButtonActive : styles.loginButton}
                            labelStyle={pressed === 1 ? styles.loginButtonTextActive : styles.loginButtonText}
                        >
                            Completed
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => setPressed(2)}
                            style={pressed === 2 ? styles.loginButtonActive : styles.loginButton}
                            labelStyle={pressed === 2 ? styles.loginButtonTextActive : styles.loginButtonText}
                        >
                            Cancelled
                        </Button>
                    </View>
                    {pressed === 0 ? <ActiveOrders pressed={0} /> : null}
                    {pressed === 1 ? <CompletedOrders pressed={1} /> : null}
                    {pressed === 2 ? <CancelledOrders pressed={2} /> : null}
                </View>
            </Card>
        </View>

    </>
    )
};

const styles = StyleSheet.create(
    {
        header: {
            backgroundColor: '#F5CB58',
            padding: 30,
            paddingTop: 50,
            flex: 1
        },
        headerText: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            columnGap: 80
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
            alignSelf: 'center',
            marginTop: 50,
            paddingBottom: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 20,
            backgroundColor: '#F5F5F5',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            bottom: 0,
            position: 'relative',
        }
        ,
        container: {
            padding: 5,
            justifyContent: 'center',
        },
        loginButton: {
            backgroundColor: '#FFDECF',
            borderRadius: 20,
            width: "30%",
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonActive: {
            backgroundColor: '#E95322',
            borderRadius: 20,
            width: "30%",
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginButtonText: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanRegular',
            width: "100%",
            height: 20,
            color: '#E95322'
        },
        loginButtonTextActive: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanRegular',
            width: "100%",
            height: 20,

        },





    }
)

export default MyOrders;