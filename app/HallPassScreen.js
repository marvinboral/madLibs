// page 2
// HallPassScreen page

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'; // Import moment library for date formatting


const HallPassScreen = ({ route }) => {
    const { name, noun, event } = route.params;
    const navigation = useNavigation();

    // today's date in the desired format
    const currentDate = moment().format('MMMM Do YYYY');

    return (
        <View style={styles.container}>
            <Text style={styles.backButton} onPress={() => navigation.goBack()}>{`< Back`}</Text>
            <View style={{ height: 600, width: 900, flexDirection: 'row' }}>
                <View style={styles.hallpass}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 24,
                            color: 'white',
                            fontWeight: 'bold',
                            transform: [{ rotate: '-90deg' }]
                        }}>HALL PASS</Text></View>
                <View style={{ flex: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 20, }}><Text style={styles.header}>MAD LIBS</Text>
                    <Text>Date: <Text
                        style={{
                            textDecorationLine: 'underline',
                            fontSize: 20,
                        }}>{currentDate}</Text></Text>
                    <Text>  
                        <Text style={{
                            fontSize: 20,
                            textAlign: 'center',
                        }}>{`\n At the ${event} , ${name} found themselves face-to-face with a playful ${noun}.  What followed was a riot of laugher and unexpect surprises, making it a night to remember!.`}</Text></Text></View>                          
            </View>         
            <View style={styles.signatureBox}><Text>SIGNED:</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    header: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },

    signatureBox: {
        width: 200,
        height: 50,
        borderWidth: 1,
        marginTop: 20,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },

    hallpass: {
        flex: 3,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default HallPassScreen;
