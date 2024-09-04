import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../../assets/Icons/bot-star.svg'; // Import the star icon

const Star = ({ filled, onPress,backgroundColor }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon
                width={29}
                height={29}
                fill={filled ? '#E95322' : backgroundColor} 
                style={styles.star}
            />
        </TouchableOpacity>
    );
};

const Rating = ({ rating, setRating,backgroundColor}) => {
    return (
        <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
                <Star
                    key={index}
                    filled={index <= rating} 
                    onPress={() => setRating(index)} 
                    backgroundColor={backgroundColor}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
    },
    star: {
        margin: 5,
    },
});

export default Rating;
