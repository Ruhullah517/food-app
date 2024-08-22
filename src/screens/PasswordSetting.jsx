import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Card, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../../assets/Icons/backarrow.svg';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');

const PasswordSettingPage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanBlack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),
    });

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    if (!loaded) {
        return null;
    }

    const inputField = (label, value, onChangeText, showPassword, setShowPassword) => (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="**********"
                    placeholderTextColor="#391713"
                    value={value}
                    onChangeText={onChangeText}
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
    );

    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.signup}>Password Setting</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        {inputField(
                            'Current Password',
                            currentPassword,
                            setCurrentPassword,
                            showCurrentPassword,
                            setShowCurrentPassword
                        )}
                        <TouchableOpacity onPress={() => { navigation.navigate('SetPassword') }}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        {inputField(
                            'New Password',
                            newPassword,
                            setNewPassword,
                            showNewPassword,
                            setShowNewPassword
                        )}
                        {inputField(
                            'Confirm Password',
                            confirmNewPassword,
                            setConfirmNewPassword,
                            showConfirmNewPassword,
                            setShowConfirmNewPassword
                        )}
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                mode="contained"
                                onPress={() => { }}
                                style={styles.loginButton}
                                labelStyle={styles.loginButtonText}
                            >
                                Change Password
                            </Button>
                        </View>
                    </View>
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F5CB58',
        padding: 30,
        paddingTop: 50,
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 50
    },
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
        paddingVertical: 15,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        bottom: 0,
    },
    container: {
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: 15,
        marginTop: 30,
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
        marginBottom: 10,
        backgroundColor: '#F3E9B5',
    },
    passwordInput: {
        flex: 1,
        height: 45,
        color: '#8b4513',
    },
    forgotPasswordText: {
        color: '#E95322',
        textAlign: 'right',
        marginTop: -20,
        fontSize: 14,
        fontFamily: 'LeagueSpartanMedium'
    },
    loginButton: {
        backgroundColor: '#ff4500',
        borderRadius: 30,
        width: 198,
        height: 36,
        marginTop: "30%",
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 17,
        fontFamily: 'LeagueSpartanMedium',
        paddingVertical: 1,
        width: "100%",
        height: '50%'
    },
});

export default PasswordSettingPage;
