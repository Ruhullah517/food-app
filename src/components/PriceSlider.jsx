import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const PriceSlider = () => {
    const [value, setValue] = useState(10);

    // Define your predefined values
    const predefinedValues = [1, 10, 50, 100];

    // Handle slider value change
    const handleValueChange = (value) => {
        // Find the closest predefined value
        const closestValue = predefinedValues.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        );
        setValue(closestValue);
    };

    return (<>
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={3}
                step={1}
                value={predefinedValues.indexOf(value)}
                onValueChange={(index) => handleValueChange(predefinedValues[index])}
                minimumTrackTintColor="#E95322"
                maximumTrackTintColor="#D9D9D9"
                thumbTintColor="#E95322"
            />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={styles.price}>$1</Text>
            <Text style={styles.price}>$10</Text>
            <Text style={styles.price}>$50</Text>
            <Text style={styles.price}>$100</Text>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: "100%",
    },
    slider: {
        width: 210,
        height: 24,
        transform: [{ scaleY: 1.4 }, { scaleX: 1.4 }]
    },
    price: {
        marginTop: 1,
        fontSize: 14,
        fontFamily: 'LeagueSpartanLight',
        color: '#391713'
    },
});

export default PriceSlider;
