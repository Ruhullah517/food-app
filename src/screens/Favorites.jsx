import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BackArrow from '../../assets/Icons/backarrow.svg';
import { Card } from 'react-native-paper';
import BestSellerCard from '../components/BestSellerCard';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const FavoritesPage = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity style={{ padding: 5, marginLeft: -5 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.login}>Favorites</Text>
                </View>
                <Card style={styles.card}>
                    <Text style={styles.cardHeading}>It's time to buy your favorite dish.</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, justifyContent: 'center', columnGap: 5, rowGap: 10 }}>
                        <BestSellerCard favourites={true} />
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
        columnGap: 80,
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
        paddingTop: 30,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        bottom: 0,
    },
    cardHeading: {
        fontFamily: "LeagueSpartanMedium",
        fontSize: 20,
        color: '#E95322',
        textAlign: 'center',
        marginBottom: 20
    },
});

export default FavoritesPage;
