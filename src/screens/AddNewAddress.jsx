import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import HomeIcon from '../../assets/Icons/HomeIconOrange.svg';


const { width, height } = Dimensions.get('window');


const AddNewAddressPage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    });

    const [name, setName] = useState('Anna House');
    const [address, setAddress] = useState('778 Locust View Drive Oaklanda, CA');



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
                    <Text style={styles.signup}>Add New Address</Text>
                </View>

                <Card style={styles.card}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <HomeIcon width={76} height={67} strokeWidth={2} />
                    </View>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#391713"
                                value={name}
                                onChangeText={setName}
                            />

                        </View>
                        <View>
                            <Text style={styles.label}>Address</Text>
                            <TextInput
                                style={styles.inputAddress}
                                placeholderTextColor="#391713"
                                value={address}
                                onChangeText={setAddress}
                                multiline={true}
                            />

                        </View>

                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            mode="contained"
                            onPress={() => { navigation.navigate('Login') }}
                            style={styles.loginButton}
                            labelStyle={styles.loginButtonText}
                        >
                            Apply
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
            columnGap: 30
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
        },
        container: {
            paddingTop: 15,
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: 15,
            paddingBottom: 80
        },
        input: {
            height: 35,
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 25,
            backgroundColor: '#F3E9B5',
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 20,
            color: '#391713',
            paddingVertical:5
        },
        inputAddress: {
            height: "auto",
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 25,
            backgroundColor: '#F3E9B5',
            fontFamily: 'LeagueSpartanRegular',
            fontSize: 20,
            color: '#391713',
            paddingVertical:10
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
            width: 116,
            height: 28,
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

export default AddNewAddressPage;