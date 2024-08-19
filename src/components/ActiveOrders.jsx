import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import OrderItem from './OrderItem';
import DimDocument from '../../assets/Icons/dimDocument.svg'




const ActiveOrders = ({pressed}) => {
    const OrderItems = [
        {
            image: require('../../assets/icecream.png'),
            name: 'Strawberry Shake',
            price: 20.00,
            date: '29/11/24',
            time: '15:00',
            quantity: 1,
        },
        {
            image: require('../../assets/lasagna.png'),
            name: 'Broccoli Lasagna',
            price: 12.00,
            date: '29/11/24',
            time: '12:00',
            quantity: 1,
        },
    ];

    return (<>
        {
            OrderItems.length < 1 ?
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 5 }}>
                    <View style={{ position: 'relative', top: 60,justifyContent: 'center', alignItems: 'center', }}>
                        <DimDocument width={140} height={167} />
                        <Text style={{ fontFamily: 'LeagueSpartanMedium', color: '#E95322', fontSize: 30, textAlign: 'center', marginTop: 20 }}>You don't have any active orders at this time</Text>
                    </View>
                </View> :
                <View>
                    <View
                        style={{
                            width: '96%',
                            backgroundColor: '#FFD8C7',
                            height: 1,
                            marginLeft: 5,
                            marginTop: 20
                        }}
                    />
                    {
                        OrderItems.map((order, index) => (
                            <OrderItem
                                key={index}
                                order={order}
                                pressed={pressed} />

                        ))}
                </View>
        }
    </>
    )
};

export default ActiveOrders;