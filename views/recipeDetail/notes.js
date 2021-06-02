import React, {useContext, useEffect, useState} from 'react'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from "../../providers/AuthProvider"
import Layout from '../layout'


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    Image,
    ImageBackground, 
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width

function Notes({navigation, route: {params}}) {
    const {user} = useContext(AuthContext)
    const [value, onChangeText] = React.useState('');


    return (
    <>
    <Layout nav={() => navigation.openDrawer()}/>
    <Text>{params.recipe.name}</Text>   
    <TextInput 
    multiline
    numberOfLines={4}
    onChangeText={text => onChangeText(text)}
    value={value}
    /> 
    </>
    )
}

const styles = StyleSheet.create({

})

export default Notes
