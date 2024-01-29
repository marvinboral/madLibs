// app/IndexScreen.js
// main page

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from '../styles/page-styles';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
    const [name, setName] = useState('');
    const [noun, setNoun] = useState('');
    const [event, setEvent] = useState('');
    const navigation = useNavigation();

    const makePass = () => {
        navigation.navigate('HallPassScreen', { name, noun, event });
    };

    const clearFields = () => {
        setName('');
        setNoun('');
        setEvent('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}><Text>{`New to Libs? 
            1: Don't peek at the story side of the card yet.  You'll spoil the surprise'
            2. Fill-out the forms with the required items
            3. Click "Make my hall pass" to see the Libs
            4. Made a mistake? Just click "Clear" then try again.`}</Text></Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                value={noun}
                onChangeText={setNoun}
                placeholder="Noun"
            />
            <TextInput
                style={styles.input}
                value={event}
                onChangeText={setEvent}
                placeholder="An event"
            />
            <Pressable style={styles.button} onPress={makePass}>
                <Text>Make my hall pass</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={clearFields}>
                <Text>Clear</Text>
            </Pressable>
        </View>
    );
};

export default IndexScreen;
