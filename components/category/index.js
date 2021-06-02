import React, {useState} from 'react';
import Layout from "../../views/layout"
import Flecha from "../../images/icons/Flecha.png"
import Postres from "../../images/recipes/Postres.png"
import Indice from "../../images/recipes/Indice.png"

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native'; 

const width = Dimensions.get('window').width

const CategoryCard = (props) => {

    return (
        <ImageBackground source={props.background} style={styles.background}>
            <TouchableOpacity onPress={props.navigateTo} style={styles.overlay}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        height: width/4.5,
        width: width/2.2
    },
    overlay: {
        backgroundColor:'rgba(0,0,0,0.4)',
        height: width/4.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    text: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Bd' : 'HelveticaNeueLTStd BOLD',
        fontSize: width/18,
        textAlign: 'center'
    }
})


export default CategoryCard;
