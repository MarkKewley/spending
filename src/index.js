import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SpendingApp = () => {
    return (
        <View style={ styles.container }>
            <Text>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default SpendingApp;
