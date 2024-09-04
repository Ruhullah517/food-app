import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import BackArrow from '../../assets/Icons/backarrow.svg'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import MicIcon from '../../assets/Icons/MicIcon.svg';
import SendIcon from '../../assets/Icons/SendIcon.svg';
import DocIcon from '../../assets/Icons/DocIcon.svg';

const { width, height } = Dimensions.get('window');


const SupportPage = () => {
    const navigation = useNavigation();
    // const { orderItems, totalAmount, shippingAddress } = route.params;
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
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.signup}>Support</Text>
                    </View>
                </View>

                <Card style={styles.card}>
                    <View style={styles.container}>
                        {/* First message (User 1) */}
                        <View style={styles.messageWrapper}>
                            <View style={[styles.messageBox, styles.sentMessage]}>
                                <Text style={styles.sentText}>Hello!</Text>
                                <View style={styles.curved}></View>
                            </View>
                            <Text style={styles.timeText}>09:00</Text>
                        </View>

                        {/* Second message (User 2) */}
                        <View style={styles.messageWrapper}>
                            <View style={[styles.messageBox, styles.receivedMessage]}>
                                <Text style={styles.receivedText}>
                                    Hello!, please choose the number corresponding to your needs for a more efficient service.
                                </Text>
                                <View style={styles.curved3}></View>
                                <View style={styles.curved2}></View>
                            </View>
                        </View>
                        {/* Second message (User 2) */}
                        <View style={styles.messageWrapper}>
                            <View style={[styles.messageBox, styles.receivedMessage]}>
                                <Text style={styles.receivedText}>
                                    1. Order Management
                                    2. Payments Management
                                    3. Account management and profile
                                    4. About order tracking
                                    5. Safety
                                </Text>
                                <View style={styles.curved3}></View>
                                <View style={styles.curved2}></View>
                            </View>
                            <Text style={styles.timeTextRecieved}>09:00</Text>
                        </View>
                    </View>

                </Card>
                <View style={styles.typeSection}>
                    {/* Document Icon */}
                    <TouchableOpacity style={styles.iconWrapper}>
                        {/* <MaterialIcons name="attach-file" size={24} color="#E78E3D" /> */}
                        <DocIcon width={17} height={17} />
                    </TouchableOpacity>

                    {/* Text Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Write Here..."
                        placeholderTextColor="#9E9E9E"
                    />

                    {/* Mic Icon */}
                    <TouchableOpacity style={styles.iconWrapper}>
                        {/* <FontAwesome name="microphone" size={24} color="#E78E3D" /> */}
                        <MicIcon width={11} height={15} />
                    </TouchableOpacity>

                    {/* Send Icon */}
                    <TouchableOpacity style={styles.iconWrapper}>
                        {/* <Feather name="send" size={24} color="#E78E3D" /> */}
                        <SendIcon width={14} height={14} />
                    </TouchableOpacity>
                </View>
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
            height: height
        },
        headerText: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            columnGap: 90
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
            minHeight: height,
            // height: height * 0.8,
            alignSelf: 'center',
            marginTop: 50,
            paddingBottom: 60,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 25,
            backgroundColor: '#F5F5F5',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
        },
        container: {
            paddingHorizontal: 20,
            flexDirection: 'column',
            rowGap: 15,
        },
        messageWrapper: {
            marginVertical: 5,
        },
        messageBox: {
            maxWidth: '80%',
            borderRadius: 15,
            padding: 10,
            position: 'relative'
        },
        sentMessage: {
            backgroundColor: '#F3E9B5', // Background color for the sent message
            alignSelf: 'flex-end',
            borderBottomRightRadius: 0,
            paddingLeft: 50,
            paddingRight: 20
        },
        receivedMessage: {
            backgroundColor: '#F8F8F8',
            alignSelf: 'flex-start',
            borderBottomLeftRadius: 0,
            borderWidth: 1,
            borderColor: '#E95322', // Border color for the received message
            paddingRight: 25,
            width: 222,
            paddingLeft: 20
        },
        sentText: {
            color: '#391713', // Text color for sent message
            fontFamily: "LeagueSpartanLight",
            fontSize: 14,
            lineHeight: 14
        },
        receivedText: {
            color: '#391713', // Text color for sent message
            fontFamily: "LeagueSpartanLight",
            fontSize: 14,// Text color for received message
            lineHeight: 14
        },
        timeText: {
            fontSize: 12,
            color: '#8A8A8A',
            alignSelf: 'flex-end',
            marginTop: 5,
        },
        timeTextRecieved: {
            fontSize: 12,
            color: '#8A8A8A',
            alignSelf: 'flex-start',
            marginTop: 5,
        },
        curved: {
            width: 10,
            height: 10,
            backgroundColor: "transparent",
            position: 'absolute',
            bottom: -1,
            right: -3,
            borderBottomLeftRadius: 20,
            borderBottomWidth: 1,
            borderLeftWidth: 7,
            borderColor: "#F3E9B5"
        },
        curved2: {
            width: 10,
            height: 10,
            backgroundColor: "#F8F8F8",
            position: 'absolute',
            bottom: -1,
            left: -7,
            // borderBottomRightRadius:20
            borderBottomColor: '#E95322',
            borderBottomWidth: 1
        },
        curved3: {
            width: 8,
            height: 10,
            backgroundColor: "transparent",
            position: 'absolute',
            bottom: -1,
            left: -8,
            borderBottomRightRadius: 20,
            borderBottomColor: '#E95322',
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderRightColor: '#E95322',
            zIndex: 1
        },
        typeSection: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            backgroundColor: '#FFDECF', // Light peach background color
            paddingHorizontal: 25,
            paddingTop: 20,
            // borderRadius: 30,
            position: 'absolute',
            bottom: 25,
            left: 0,
            right: 0,
            // height: 100,
            paddingBottom: 50
        },
        iconWrapper: {
            backgroundColor: '#FFF',
            // padding: 10,
            borderRadius: 10,
            marginHorizontal: 3,
            width: 26,
            height: 26,
            justifyContent: 'center',
            alignItems: 'center'
        },
        input: {
            flex: 1,
            backgroundColor: '#FFF',
            // paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            marginHorizontal: 5,
            color: '#4C4C4C', // Text color
            height: 26
        },
    }
)

export default SupportPage;