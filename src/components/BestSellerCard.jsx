import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import LikeIcon from '../../assets/Icons/LikeIconOrange.svg';
import StarIcon from '../../assets/Icons/StarIcon.svg';
import CartIcon from '../../assets/Icons/cartWhite.svg';
import SnackIcon from "../../assets/Icons/SnackIcon.svg";
import MealIcon from "../../assets/Icons/MealIcon.svg";




const BestSellerCard = () => {

    const BestSellers = [
        {
            title: "Sunny Bruschetta",
            price: 15,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/bestseller1.png'),
            ratings: 5,
            category: "Snacks",
            icon: <SnackIcon width={18} height={20} strokeWidth={1.5} />
        },
        {
            title: "Gourmet Grilled",
            price: 12,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/skewer.png'),
            ratings: 4.5,
            category: "Snacks",
            icon: <SnackIcon width={18} height={20} strokeWidth={1.5} />
        },
        {
            title: "Barbecue tacos",
            price: 15,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/bestseller2.png'),
            ratings: 4,
            category: "Snacks",
            icon: <MealIcon width={18} height={20} strokeWidth={1.5} />
        },
        {
            title: "Broccoli lasagna",
            price: 12,
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lorem sit amet leo tempus auctor a vel ligula. Mauris nec nisl nec lorem venenatis posuere",
            image: require('../../assets/bestseller1.png'),
            ratings: 5,
            category: "Snacks",
            icon: <MealIcon width={18} height={20} strokeWidth={1.5} />
        },

    ]

    return (<>
        {BestSellers.map(item =>

            <View style={styles.itemCard}>
                <View style={styles.imageContainer}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.iconTopLeft}>
                        {item.icon}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTopRight}>
                        <LikeIcon width={12} height={12} />
                    </TouchableOpacity>
                    <View style={styles.priceTag}>
                        <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >{item.title}</Text>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>{item.ratings.toFixed(1)}<StarIcon /></Text>
                        </View>
                    </View>
                    <View style={styles.descriptionRow}>
                        <Text style={styles.description}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            {item.description}
                        </Text>
                        <TouchableOpacity style={{ backgroundColor: '#E95322', width: 19, height: 19, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <CartIcon width={11.6} height={11.6} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )}
    </>)
};


export default BestSellerCard;


const styles = StyleSheet.create({
    itemCard: {
        borderRadius: 20,
        width: 158,
    },
    imageContainer: {
        position: 'relative',
        shadowColor: '#000',

    },
    image: {
        width: '100%',
        height: 141,
        borderRadius: 20,
    },
    iconTopLeft: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: "#F8F8F8",
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    iconTopRight: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: "#F8F8F8",
        width: 21,
        height: 21,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    priceTag: {
        position: 'absolute',
        bottom: 16,
        right: -2,
        backgroundColor: '#E95322',
        // paddingVertical: 1,
        // paddingHorizontal: 10,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        width: 44,
        height: 16,
        alignItems: 'center',


    },
    priceText: {
        color: '#fff',
        fontFamily: 'LeagueSpartanRegular',
        fontSize: 12,
        textAlign: 'center',
        alignItems: 'center'
    },
    textContainer: {
        padding: 10,
        width: 158,
        height: 80,
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        columnGap: 6
    },
    title: {
        fontSize: 16,
        fontFamily: 'LeagueSpartanMedium',
        color: '#391713',
        width: 106
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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
    descriptionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 0,
    },
    description: {
        color: '#391713',
        fontSize: 12,
        flex: 1,
        marginRight: 10,
        fontFamily: 'LeagueSpartanLight',
        width: 118
    },
})