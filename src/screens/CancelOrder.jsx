import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import BackArrow from '../../assets/Icons/backarrow.svg';
import { Card } from 'react-native-paper';
import CircleIcon from '../../assets/Icons/CircleIcon.svg';

const { width } = Dimensions.get('window');

const CancelOrderPage = ({ route, navigation }) => {
    const { order } = route.params;

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),
    });

    const [reasons, setReasons] = useState([
        { id: 1, label: 'Lorem ipsum dolor sit amet 11', checked: false },
        { id: 2, label: 'Lorem ipsum dolor sit amet 22', checked: false },
        { id: 3, label: 'Lorem ipsum dolor sit amet 33', checked: false },
        { id: 4, label: 'Lorem ipsum dolor sit amet 44', checked: false },
    ]);

    const [otherReason, setOtherReason] = useState('');
    const [selectedReasons, setSelectedReasons] = useState([]);

    const handleCheckboxPress = (id) => {
        const updatedReasons = reasons.map(reason =>
            reason.id === id ? { ...reason, checked: !reason.checked } : reason
        );
        setReasons(updatedReasons);

        const selected = updatedReasons.filter(reason => reason.checked).map(reason => reason.label);
        setSelectedReasons(selected);
    };

    const handleSubmit = () => {
        const data = {
            reasons: selectedReasons,
            otherReason: otherReason,
        };
        console.log('Cancellation Data:', data);

        setReasons([
            { id: 1, label: 'Lorem ipsum dolor sit amet', checked: false },
            { id: 2, label: 'Lorem ipsum dolor sit amet', checked: false },
            { id: 3, label: 'Lorem ipsum dolor sit amet', checked: false },
            { id: 4, label: 'Lorem ipsum dolor sit amet', checked: false },
        ]);

        setOtherReason('');
        setSelectedReasons([]);
        navigation.navigate('ConfirmationPage')
    };

    if (!loaded) {
        return null;
    }

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={styles.header}>
                    <View style={styles.headerText}>
                        <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                            <BackArrow />
                        </TouchableOpacity>
                        <Text style={styles.login}>Cancel Order</Text>
                    </View>

                    <Card style={styles.card}>
                        <View style={styles.container}>
                            <Text style={styles.descriptionText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor.
                            </Text>
                            {reasons.map(reason => (
                                <View key={reason.id} style={styles.reasonContainer}>
                                    <Text style={styles.reasonText}>{reason.label}</Text>
                                    <TouchableOpacity
                                        onPress={() => handleCheckboxPress(reason.id)}
                                        style={{
                                            borderColor: "#FF5722",
                                            padding: 2,
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            backgroundColor: '#FFFFFF'
                                        }}
                                    >
                                        <CircleIcon
                                            color='#FF5722'
                                            fill={reason.checked ? '#FF5722' : '#FFFFFF'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ))}
                            <View style={styles.otherContainer}>
                                <Text style={styles.reasonText}>Others</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Other reason..."
                                    value={otherReason}
                                    onChangeText={setOtherReason}
                                    multiline
                                />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                                    <Text style={styles.submitButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView >
        </>
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
        columnGap: 50,
        marginTop: 20,
    },
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
        marginTop: 30,
        paddingBottom: "20%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        bottom: 0,
    },
    container: {
        height: '100%',
    },
    descriptionText: {
        fontSize: 14,
        marginBottom: 20,
        color: '#391713',
        fontFamily: "LeagueSpartanLight",
    },
    reasonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        paddingBottom: 10,
    },
    reasonText: {
        fontSize: 15,
        color: '#391713',
        fontFamily: "LeagueSpartanRegular",
    },
    otherContainer: {
        marginBottom: 20,
    },
    textInput: {
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#F3E9B5',
        height: 95,
    },
    submitButton: {
        backgroundColor: '#FF5722',
        paddingVertical: 1,
        borderRadius: 20,
        width: 142,
        height: 36,
        alignItems: "center",
        justifyContent: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: "LeagueSpartanSemiBold",
    },
});

export default CancelOrderPage;
