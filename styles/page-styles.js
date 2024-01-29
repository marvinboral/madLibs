// styles/page-styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    instructions: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue',
        textAlign: 'left',
    },

    input: {
        width: '30%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
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

    signatureBox: {
        width: 200,
        height: 50,
        borderWidth: 1,
        marginTop: 20,
    },

    header: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },

});

export default styles;
