import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomSwitch = ({ isOn, onToggle, id }) => {
    return (
        <TouchableOpacity
            style={[styles.switch, isOn ? styles.switchOn : styles.switchOff]}
            onPress={() => onToggle(id)}  // Pass the id when toggling
        >
            <View style={[styles.thumb, isOn ? styles.thumbOn : styles.thumbOff]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    switch: {
        width: 31,
        height: 15,
        borderRadius: 15,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchOn: {
        backgroundColor: '#E95322',
    },
    switchOff: {
        backgroundColor: '#FFDECF',
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 50,
    },
    thumbOn: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-end',
    },
    thumbOff: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
    },
});

export default CustomSwitch;
