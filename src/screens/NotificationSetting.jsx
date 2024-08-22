import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import CustomSwitch from '../components/CustomSwitch';

const { width } = Dimensions.get('window');

const NotificationSettingPage = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),
    });

    const [settingsData, setSettingsData] = useState([
        { id: 1, title: 'General Notification', value: true },
        { id: 2, title: 'Sound', value: true },
        { id: 3, title: 'Sound Call', value: true },
        { id: 4, title: 'Vibrate', value: false },
        { id: 5, title: 'Special Offers', value: false },
        { id: 6, title: 'Payments', value: false },
        { id: 7, title: 'Promo & Discount', value: false },
        { id: 8, title: 'Cashback', value: false },
    ]);

    const toggleSwitch = (id) => {
        const updatedSettings = settingsData.map(item =>
            item.id === id ? { ...item, value: !item.value } : item
        );
        setSettingsData(updatedSettings);
        console.log(updatedSettings);
    };

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
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.signup}>Notification Page</Text>
                    </View>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        {settingsData.map(item => (
                            <View key={item.id} style={styles.setting}>
                                <Text style={styles.text}>{item.title}</Text>
                                <CustomSwitch isOn={item.value} onToggle={toggleSwitch} id={item.id} />
                            </View>
                        ))}
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
        columnGap: 30,
        marginTop: 20,
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
        height: '100%',
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 60,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 20,
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
        alignItems: 'stretch',
        flexDirection: 'column',
        rowGap: 20,
        paddingBottom: 60,
        width: '100%',
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#391713',
        fontFamily: 'LeagueSpartanMedium',
    },
});

export default NotificationSettingPage;
