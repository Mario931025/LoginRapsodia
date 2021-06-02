import React, {useState} from 'react';
import { Header } from 'react-native-elements';
import Title from "./title"

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
} from 'react-native'; 


const Layout = (props) => {

    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', onPress: props.nav, size: 30 }}
            centerComponent={<Title/>}
            rightComponent={{ icon: 'search', color: '#fff', size: 30}}
            containerStyle={{
            backgroundColor: '#72172D',
        }}
        />
    );
};


export default Layout;
