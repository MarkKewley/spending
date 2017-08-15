import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import {
    Header,
    Footer
} from './components/common';

const SpendingApp = () => {
    return (
        <View style={ styles.container }>
            <Header/>
            <Text>Hello</Text>
            <Footer/>
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
