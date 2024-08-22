import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import GmailIcon from '../../assets/Icons/Gmail.svg';
import MarkIcon from '../../assets/Icons/Mark.svg';
import FBIcon from '../../assets/Icons/Facebook.svg';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CamIcon from '../../assets/Icons/Cam.svg';
import * as ImagePicker from 'expo-image-picker';


const { width, height } = Dimensions.get('window');


const MyProfilePage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })
    const [email, setEmail] = useState('jhone@gmail.com');
    const [name, setName] = useState('John Smith');
    const [phone, setPhone] = useState('+93 2384 23847');
    const [DOB, setDOB] = useState('19/02/1998');
    const [image, setImage] = useState(require('../../assets/dish2.png'));

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result);
            // if (!result.canceled) {
            //     setImage(result.assets[0].uri);
            // }
        } catch (error) {
            console.log(error);

        }

    }



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
                    <Text style={styles.signup}>My Profile</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        <View style={{ alignItems: 'center', position: 'relative' }}>
                            <Image style={styles.image} source={image} />
                            <TouchableOpacity style={styles.camiconContainer} onPress={pickImage}>
                                <CamIcon width={17} height={15} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="example"
                                placeholderTextColor="#391713"
                                value={name}
                                onChangeText={setName}
                            />

                        </View>
                        <View>
                            <Text style={styles.label}>Date of birth</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="DD/MM/YY"
                                placeholderTextColor="#391713"
                                placeholderStyle={styles.placeholder}
                                value={DOB}
                                onChangeText={setDOB}
                            />

                        </View>
                        <View>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="example@example.com"
                                placeholderTextColor="#391713"
                                placeholderStyle={styles.placeholder}
                                value={email}
                                onChangeText={setEmail}
                            />

                        </View>
                        <View>
                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="+123 456 789"
                                placeholderTextColor="#391713"
                                placeholderStyle={styles.placeholder}
                                value={phone}
                                onChangeText={setPhone}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                mode="contained"
                                onPress={() => {  }}
                                style={styles.loginButton}
                                labelStyle={styles.loginButtonText}
                            >
                                Update Profile
                            </Button>
                        </View>
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
            columnGap: 70
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
            height:"100%",
            alignSelf: 'center',
            marginTop: 50,
            paddingBottom: 60,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 30,
            paddingVertical: 15,
            backgroundColor: '#F5F5F5',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            bottom: 0,
            paddingBottom: 30
        }
        ,
        container: {
            padding: 5,
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: 15
        },
        camiconContainer: {
            backgroundColor: '#E95322',
            position: 'absolute',
            bottom: 15,
            right: 76,
            borderRadius: 10,
            width: 26,
            height: 26,
            justifyContent: 'center',
            alignItems: 'center'
        }
        ,
        image: {
            width: 127,
            height: 127,
            borderRadius: 20,
            marginBottom: 20,
        },

        input: {
            height: 35,
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 15,
            backgroundColor: '#F3E9B5',
            fontFamily: 'LeagueSpartanMedium',
            fontSize: 20,
            color: '#391713',
        },
        label: {
            color: '#391713',
            fontFamily: 'LeagueSpartanMedium',
            fontWeight: '500',
            fontSize: 20,
            marginBottom: 5
        },
        passwordContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 15,
            backgroundColor: '#F3E9B5',
            height: 35
        },
        passwordInput: {
            flex: 1,
            height: 35,
            color: '#8b4513',
        },
        loginButton: {
            backgroundColor: '#ff4500',
            borderRadius: 30,
            width: 142,
            height: 36,
            marginTop: 8,
            marginBottom: 4,
            justifyContent: 'center',
            alignItems: 'center'
        },
        loginButtonText: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanSemiBold',
            paddingVertical: 1,
            width: "100%",
            height: '50%'
        },

    }
)

export default MyProfilePage;