import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const LogoutModal = ({ modalVisible, setModalVisible }) => {

    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })

    const handleLogout = () => {
        // Perform logout logic here
        console.log('Logged out');
        setModalVisible(false); // Close the modal after logout

    };

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            {modalVisible && <StatusBar backgroundColor="rgba(254, 74, 12, 0.31)" />}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Are you sure you want to logout?</Text>
                        <View style={styles.modalButtons}>
                            <Button
                                mode="contained"
                                onPress={() => setModalVisible(false)}
                                style={styles.cancelButton}
                                labelStyle={styles.cancelButtonText}
                            >
                                Cancel
                            </Button>
                            <Button
                                mode="contained"
                                onPress={handleLogout}
                                style={styles.logoutConfirmButton}
                                labelStyle={styles.buttonText}
                            >
                                Yes, logout
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(254, 74, 12, 0.31)',// Dark overlay background
    },
    modalContainer: {
        height:199,
        backgroundColor: 'rgba(248, 248, 248, 1)',
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'LeagueSpartanMedium',
        width:205,
        color:'#000000'
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flex: 1,
        marginRight: 10,
        width:153,
        height:37,
        backgroundColor:'#FFDECF'
    },
    logoutConfirmButton: {
        flex: 1,
        backgroundColor: '#E95322',
        width:153,
        height:37,
    },
    buttonText: {
        fontSize: 22,
        height:"60%",
        fontFamily:'LeagueSpartanMedium'
    },
    cancelButtonText: {
        fontSize: 22,
        color:'#E95322',
        fontFamily:'LeagueSpartanMedium'
    },
});

export default LogoutModal;
