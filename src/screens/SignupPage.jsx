import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Alert, Modal, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { Button, IconButton } from 'react-native-paper';
import GmailIcon from '../../assets/Icons/Gmail.svg';
import MarkIcon from '../../assets/Icons/Mark.svg';
import FBIcon from '../../assets/Icons/Facebook.svg';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');

// Form validation schema using yup
const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    phone: yup.string().required('Phone number is required'),
    dob: yup.string().required('Date of birth is required'),
}).required();

const SignupPage = () => {
    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    // React Hook Form setup
    const { control, handleSubmit, formState: { errors },reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            dob: '',
        },
    });

    // Handle signup form submission
    const handleSignup = async (data) => {
        console.log("Form Data: ", data);
        setLoading(true);
        try {
            const response = await axios.post('http://192.168.18.107:5000/api/auth/signup', data);
            console.log("User Registered:", response.data);
            setLoading(false);
            Toast.show({
                type: 'success',
                text1: 'User Registered Successfully',
            });
            reset();
            navigation.navigate('Login');
        } catch (e) {
            setLoading(false);
            console.log("Error Registering User:", e.response.data);
            Toast.show({
                type: 'error',
                text1: e.response.data,
            })
        }
    };

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

    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.signup}>New Account</Text>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        {/* Full Name */}
                        <View>
                            <Text style={styles.label}>Full Name</Text>
                            <Controller
                                control={control}
                                name="name"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="example"
                                        placeholderTextColor="#391713"
                                        value={value} // Bind the value to the input
                                        onChangeText={onChange} // Bind the onChangeText event to the controller
                                        onBlur={onBlur} // Make sure the input is touched for validation
                                    />
                                )}
                            />
                            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
                        </View>

                        {/* Password */}
                        <View>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.passwordContainer}>
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput
                                            style={styles.passwordInput}
                                            placeholder="**********"
                                            placeholderTextColor="#391713"
                                            value={value}
                                            onChangeText={onChange}
                                            secureTextEntry={!showPassword}
                                        />
                                    )}
                                />
                                <IconButton
                                    icon={showPassword ? "eye" : "eye-off"}
                                    iconColor="#E95322"
                                    size={20}
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            </View>
                            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                        </View>

                        {/* Email */}
                        <View>
                            <Text style={styles.label}>Email</Text>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="example@example.com"
                                        placeholderTextColor="#391713"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                        </View>

                        {/* Mobile Number */}
                        <View>
                            <Text style={styles.label}>Mobile Number</Text>
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="+123 456 789"
                                        placeholderTextColor="#391713"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
                        </View>

                        {/* Date of Birth */}
                        <View>
                            <Text style={styles.label}>Date of birth</Text>
                            <Controller
                                control={control}
                                name="dob"
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="DD/MM/YY"
                                        placeholderTextColor="#391713"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.dob && <Text style={styles.errorText}>{errors.dob.message}</Text>}
                        </View>

                        {/* Terms and Signup Button */}
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
                                onPress={handleSubmit(handleSignup)}
                                style={styles.loginButton}
                                labelStyle={styles.loginButtonText}
                            >
                                Sign Up
                            </Button>
                        </View>

                        {/* Signup with Other Platforms */}
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
            {/* Loading Modal */}
            <Modal transparent={true} visible={loading}>
                <View style={styles.modalContainer}>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text>LOADING...</Text>
                </View>
            </Modal>
        </ScrollView>
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
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: 0,
            width: "80%"
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
            paddingBottom: 40,
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
            // bottom: 15
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
        errorText: {
            color: 'red',
            fontSize: 12,
            marginTop: -5,
            marginBottom: 5,
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    }
)

export default SignupPage;