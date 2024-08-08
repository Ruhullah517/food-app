import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import GmailIcon from '../../assets/Icons/Gmail.svg';
import MarkIcon from '../../assets/Icons/Mark.svg';
import FBIcon from '../../assets/Icons/Facebook.svg';
import BottomNav from '../components/BottomNav';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');


const SetPassword = () => {
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
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    if (!loaded) {
        return null;
    }
    return (<>
        <View style={styles.header}>
            <View style={styles.headerText}>
                <BackArrow />
                <Text style={styles.login}>Set Password</Text>
            </View>

            <Card style={styles.card}>
                <View style={styles.container}>
                    <Text style={styles.descriptionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>

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
                        <Text style={styles.label}>Confirm Password</Text>
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
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            mode="contained"
                            onPress={() => { navigation.navigate('Login') }}
                            style={styles.loginButton}
                            labelStyle={styles.loginButtonText}
                        >
                            Create New Password
                        </Button>
                    </View>
                </View>
            </Card>
        </View>
        <BottomNav />
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
            bottom: 0
        }
        ,
        container: {
            padding: 5,
            justifyContent: 'center',
        },
        welcomeText: {
            fontSize: 24,
            fontFamily: 'LeagueSpartanSemiBold',
            color: '#391713',
            marginBottom: 10,
        },
        descriptionText: {
            fontSize: 14,
            color: '#252525',
            marginBottom: 30,
            fontFamily: "LeagueSpartanLight",
        },
        input: {
            height: 45,
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 15,
            marginBottom: 20,
            backgroundColor: '#F3E9B5',
        },
        label: {
            color: '#391713',
            fontFamily: 'LeagueSpartanMedium',
            fontWeight: '500',
            fontSize: 20,
            marginBottom: 5
        },
        placeholder: {
            fontFamily: "LeagueSpartanRegular"
        }
        ,
        passwordContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#8b4513',
            borderRadius: 13,
            paddingHorizontal: 10,
            marginBottom: 16,
            backgroundColor: '#F3E9B5',
            height: 45
        },
        passwordInput: {
            flex: 1,
            height: 40,
            color: '#8b4513',
        },
        forgotPasswordText: {
            color: '#E95322',
            textAlign: 'right',
            marginBottom: 30,
            fontSize: 14,
            fontFamily: 'LeagueSpartan'
        },
        loginButton: {
            backgroundColor: '#ff4500',
            borderRadius: 30,
            width: width * 0.52,
            marginTop: 40,
            marginBottom: 20,
            height: 39,

        },
        loginButtonText: {
            fontSize: 17,
            fontFamily: 'LeagueSpartanMedium',
            fontWeight: '500',
            width: "100%",
        },





    }
)

export default SetPassword;