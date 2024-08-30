import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import StarIcon from '../../assets/Icons/StarIcon.svg';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const MealsPageCards = ({ selectedCategory }) => {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),
        PoppinsSemiBold: require('../../assets/fonts/Poppins SemiBold.ttf'),
    });




    const snacks = [
        {
            id: 1,
            title: "Mexican Appetitzer",
            description: 'Tortilla Chips With Toppins',
            ratings: 5,
            price: 30,
            image: require('../../assets/chola.png')
        },
        {
            id: 2,
            title: "Skewer",
            description: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
            ratings: 4,
            price: 50,
            image: require('../../assets/skewer.png')
        }
    ];
    const meals = [{
        id: 1,
        title: "Fresh Prawn Ceviche",
        description: 'Shrimp marinated in zesty lime juice, mixed with crisp onions, tomatoes, and cilantro',
        ratings: 5,
        price: 40,
        image: require('../../assets/meals1.png')
    },
    {
        id: 2,
        title: "Skewer",
        description: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
        ratings: 5,
        price: 20,
        image: require('../../assets/skewer.png')
    }
    ];
    const vegan = [
        {
            id: 1,
            title: "Mexican Appetitzer",
            description: 'Tortilla Chips With Toppins',
            ratings: 5,
            price: 14,
            image: require('../../assets/chola.png')
        },
        {
            id: 2,
            title: "Skewer",
            description: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
            ratings: 5,
            price: 15,
            image: require('../../assets/skewer.png')
        }
    ];
    const dessert = [{
        id: 1,
        title: "Fresh Prawn Ceviche",
        description: 'Shrimp marinated in zesty lime juice, mixed with crisp onions, tomatoes, and cilantro',
        ratings: 5,
        price: 15,
        image: require('../../assets/meals1.png')
    },
    {
        id: 2,
        title: "Skewer",
        description: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
        ratings: 5,
        price: 15,
        image: require('../../assets/skewer.png')
    }
    ];
    const drinks = [
        {
            id: 1,
            title: "Mexican Appetitzer",
            description: 'Tortilla Chips With Toppins',
            ratings: 5,
            price: 15,
            image: require('../../assets/chola.png')
        },
        {
            id: 2,
            title: "Skewer",
            description: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
            ratings: 4,
            price: 15,
            image: require('../../assets/skewer.png')
        }
    ];

    if (!loaded) {
        return null;
    }
    return (<>
        {
            (selectedCategory === "Snacks" ? snacks : selectedCategory === "Meal" ? meals : selectedCategory === "Vegan" ? vegan : selectedCategory === "Dessert" ? dessert : selectedCategory === "Drinks" ? drinks : snacks).map((item) => (
                <>
                    <TouchableOpacity style={styles.mealsCard} onPress={() => navigation.navigate('FoodDetail', { item })}>
                        <Image source={item.image} style={styles.mealsImage} />
                        <View style={styles.infoContainer}>
                            <View style={{ width: "100%" }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 8 }}>
                                        <Text style={styles.mealTitle}>{item.title}</Text>
                                        <View style={{ backgroundColor: '#E95322', width: 5, height: 5, borderRadius: 20 }}>
                                        </View>
                                        <View style={styles.ratingContainer}>
                                            <Text style={styles.rating}>{item.ratings.toFixed(1)}<StarIcon /></Text>
                                        </View>
                                    </View>
                                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                                </View>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.divider}></View>
                </>
            )
            )
        }
    </>
    )
};


export default MealsPageCards;

const styles = StyleSheet.create({
    mealsCard: {
        // backgroundColor: '#fff',
        borderRadius: 15,
        marginVertical: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    mealsImage: {
        width: 323,
        height: 174,
        borderRadius: 36,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    titleRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    mealTitle: {
        fontSize: 18,
        fontFamily: 'PoppinsSemiBold',
        color: '#391713'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E95322',
        borderRadius: 10,
        width: 34,
        justifyContent: 'center',
    },
    rating: {
        fontSize: 12,
        color: '#F5F5F5',
        textAlign: 'center',
        fontFamily: 'LeagueSpartanRegular'
    },
    description: {
        fontSize: 12,
        color: '#666',
        fontFamily: 'LeagueSpartanLight',
        marginTop: -10,
        width: 231
    },
    price: {
        fontSize: 18,
        fontFamily: "LeagueSpartanRegular",
        color: '#E91E63',
        textAlign: 'right',
    },
    divider: {
        width: "100%",
        backgroundColor: "#FFD8C7",
        height: 1,
        marginLeft: 1,
    },
})