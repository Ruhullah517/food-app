import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, StyleSheet } from 'react-native';
import BackArrow from '../../assets/Icons/backarrow.svg'


const FAQ = () => {
    const [loaded] = useFonts({
        LeagueSpartanMedium: require('../../assets/fonts/League Spartan Medium.ttf'),
        LeagueSpartanBold: require('../../assets/fonts/League Spartan Bold.ttf'),
        LeagueSpartanLight: require('../../assets/fonts/League Spartan Light.ttf'),
        LeagueSpartanSemiBold: require('../../assets/fonts/League Spartan SemiBold.ttf'),
        LeagueSpartanblack: require('../../assets/fonts/League Spartan Black.ttf'),
        LeagueSpartanRegular: require('../../assets/fonts/League Spartan Regular.ttf'),

    })

    const [expandedIndex, setExpandedIndex] = useState(null);

    const data = [
        { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.' },
        { question: 'Question 2?', answer: 'Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.' },
        { question: 'Question 3?', answer: 'Ans Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.' },
        { question: 'Question 4?', answer: 'Answer 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.' },
        { question: 'Question 5?', answer: 'Answer 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.' },
    ];

    const toggleExpand = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    if (!loaded) {
        return null;
    }

    return (
        <View>
            {data.map((item, index) => (
                <View key={index}>
                    <TouchableOpacity
                        style={[styles.questionContainer, expandedIndex === index && styles.expandedQuestionContainer]}
                        onPress={() => toggleExpand(index)}
                    >
                        <Text style={[styles.questionText, expandedIndex === index && styles.expandedQuestionText]}>
                            {item.question}
                        </Text>
                        <TouchableOpacity style={styles.downArrow}>
                            <BackArrow />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    {expandedIndex === index && (
                        <View style={styles.answerContainer}>
                            <Text style={styles.answerText}>{item.answer}</Text>
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    questionContainer: {
        paddingVertical: 10,
        paddingRight:10,
        borderTopWidth: 1,
        borderColor: '#FFD8C7',
        position:'relative',
        width:320,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    expandedQuestionContainer: {
        backgroundColor: '#f5f5f5',
    },
    questionText: {
        fontSize: 20,
        color: '#E95322',
        fontFamily: 'LeagueSpartanMedium'
    },
     downArrow: {
        transform: [{ rotate: '-90deg' }],
    },
    expandedQuestionText: {
        color: '#391713', 
    },
    answerContainer: {
        paddingVertical: 15,
        backgroundColor: '#f5f5f5',
        borderTopWidth: 1,
        borderColor: '#FFD8C7',
        width:320,
    },
    answerText: {
        fontSize: 14,
        color: '#391713',
        fontFamily:'LeagueSpartanLight'
    },
});

export default FAQ;
