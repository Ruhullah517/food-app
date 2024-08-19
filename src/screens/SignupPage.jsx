import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import GmailIcon from '../../assets/Icons/Gmail.svg';
import MarkIcon from '../../assets/Icons/Mark.svg';
import FBIcon from '../../assets/Icons/Facebook.svg';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');


const SignupPage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [DOB, setDOB] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // const handleSignup = async () => {
    //     if (email && password && name && phone && DOB) {
    //       // Save user data to local storage
    //       await AsyncStorage.setItem('userData', JSON.stringify({ email, password, name, phone, DOB }));
    //       Alert.alert('Signup Successful', 'You can now log in with your credentials.');
    //       navigation.navigate('Login');
    //     } else {
    //       Alert.alert('Error', 'Please fill in all the fields.');
    //     }
    //   };

    if (!loaded) {
        return null;
    }
    return (<>
        <View style={styles.header}>
            <View style={styles.headerText}>
                <TouchableOpacity style={{padding:5, marginLeft:-5}} onPress={() => navigation.goBack()}>
                    <BackArrow />
                </TouchableOpacity>
                <Text style={styles.signup}>New Account</Text>
            </View>

            <Card style={styles.card}>
                <View style={styles.container}>
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
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="**********"
                                placeholderTextColor="#391713"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <IconButton
                                icon={showPassword ? "eye" : "eye-off"}
                                iconColor="#E95322"
                                size={20}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        </View>
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
                        <Text style={styles.label}>Mobile Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+123 456 789"
                            placeholderTextColor="#391713"
                            placeholderStyle={styles.placeholder}
                            value={email}
                            onChangeText={setPhone}
                        />

                    </View>
                    <View>
                        <Text style={styles.label}>Date of birth</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="DD/MM/YY"
                            placeholderTextColor="#391713"
                            placeholderStyle={styles.placeholder}
                            value={email}
                            onChangeText={setDOB}
                        />

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.terms}>
                            By continuing, you agree to{"\n"}
                            <Text style={{ color: "#E95322", fontFamily: "LeagueSpartanMedium" }}>
                                Terms of Use{" "}
                            </Text>
                            and{" "}
                            <Text style={{ color: "#E95322", fontFamily: "LeagueSpartanMedium" }}>
                                Privacy Policy.
                            </Text>
                        </Text>
                        <Button
                            mode="contained"
                            onPress={() => { navigation.navigate('Login') }}
                            style={styles.loginButton}
                            labelStyle={styles.loginButtonText}
                        >
                            Sign Up
                        </Button>
                    </View>
                    <View style={styles.signupwith}>
                        <Text style={{ fontFamily: 'LeagueSpartanLight', fontWeight: '00', fontSize: 12 }}>or sign up with</Text>
                        <View style={styles.iconGroup}>
                            <View style={styles.iconbackground}>
                                <GmailIcon width={18.38} height={18.38} style={styles.icon} />
                            </View>
                            <View style={styles.iconbackground}>
                                <FBIcon width={22.39} height={22.32} style={styles.icon} />
                            </View>
                            <View style={styles.iconbackground}>
                                <MarkIcon width={18.3} height={23.63} style={styles.icon} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'LeagueSpartanLight', fontSize: 12 }}>Already have an account?</Text>
                            <Text style={{ fontFamily: 'LeagueSpartanRegular', fontSize: 12, color: "#E95322" }} onPress={() => navigation.navigate('Login')}> Log in</Text>
                        </View>
                    </View>
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
            bottom: 0
        }
        ,
        container: {
            padding: 5,
            justifyContent: 'center',
            // backgroundColor: '#fdf5e6',
        },
        input: {
            height: 35,
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 15,
            backgroundColor: '#F3E9B5',
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
        terms: {
            fontFamily: 'LeagueSpartanLight',
            textAlign: 'center',
            fontSize: 12,
            marginTop: 10

        }
        ,
        loginButton: {
            backgroundColor: '#ff4500',
            borderRadius: 30,
            width: width * 0.52,
            marginTop: 8,
            marginBottom: 4,
        },
        loginButtonText: {
            fontSize: 24,
            fontFamily: 'LeagueSpartanMedium',
            fontWeight: '500',
            paddingVertical: 1
        },
        signupwith: {
            justifyContent: 'center',
            alignItems: 'center',

        },
        iconGroup: {
            flexDirection: 'row',
            columnGap: 10,
            marginBottom: 2,
            marginTop: 4
        },
        iconbackground: {
            backgroundColor: '#FFDECF',
            padding: 5,
            borderRadius: 13.13,
            width: 34.13,
            height: 34.13,
            justifyContent: 'center',
            alignItems: 'center'

        },



    }
)

export default SignupPage;