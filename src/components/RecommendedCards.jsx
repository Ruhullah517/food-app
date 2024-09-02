import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import StarIcon from '../../assets/Icons/StarIcon.svg';
import CartIcon from '../../assets/Icons/cartWhite.svg';
import PlusIcon from '../../assets/Icons/plusIconWhite.svg';
import MinusIcon from '../../assets/Icons/minusIconWhite.svg';
import Badge from '../../assets/Icons/badge.svg';



const RecommendedCard = ({index, item, onIncrement, onDecrement }) => {

    return (<>


        <View key={index} style={index === 0 ? styles.itemCardRow : styles.itemCardColumn}>
            <View style={styles.imageContainer}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.iconTopLeft}>
                    {item.icon}
                </TouchableOpacity>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{item.ratings.toFixed(1)}<StarIcon /></Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                {index === 0 ?
                    <View style={{ position: 'relative' }}>
                        <Badge />
                        <Text style={{ position: 'absolute', color: '#fff', left: 10, top: 2 }}>New Product</Text>
                    </View>
                    :
                    null
                }
                <View style={styles.titleRow}>
                    <Text style={styles.title}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >{item.title}</Text>
                </View>
                <View style={styles.descriptionRow}>
                    <Text style={styles.description}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {item.description}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                        <TouchableOpacity style={item.quantity > 1 ? styles.quantityIconBack : styles.quantityIconBackUnActive} onPress={onDecrement}>
                            <MinusIcon />
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'LeagueSpartanRegular', fontSize: 15 }}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.quantityIconBack} onPress={onIncrement}>
                            <PlusIcon />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#E95322', width: 19, height: 19, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                        <CartIcon width={11.6} height={11.6} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </>)
};


export default RecommendedCard;


const styles = StyleSheet.create({
    itemCardColumn: {
        borderRadius: 20,
        width: 158,
        flexDirection: 'column'
    },
    itemCardRow: {
        borderRadius: 20,
        flexDirection: 'row'
    },
    imageContainer: {
        position: 'relative',
        shadowColor: '#000',
    },
    image: {
        width: 158,
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
    textContainer: {
        padding: 10,
        width: 158,
        height: 80,
        flexDirection: 'column',
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
    },
    price: {
        color: "#E95322",
        fontSize: 20,
        fontFamily: "LeagueSpartanMedium"
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#E95322',
        borderRadius: 10,
        width: 34,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
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
    quantityIconBack: {
        backgroundColor: '#E95322',
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    quantityIconBackUnActive: {
        backgroundColor: '#FFDECF',
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
})