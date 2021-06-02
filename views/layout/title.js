import React from 'react';
import styled from 'styled-components/native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    Platform
} from 'react-native'; 


const Title = () => {

    return (
        <View style={styles.titleView}>
            <Text style={styles.titleStyle}>RAPSODIA DE SABORES</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: 'white',
        fontFamily: "MinionPro-Bold",
        fontSize: RFPercentage(2.5)
        }, 
    titleView: {
        borderBottomWidth: RFPercentage(.3),
        borderTopWidth: RFPercentage(.3),
        borderColor: "white",
        paddingTop: Platform.OS === 'ios' ? "1.8%" : ".2%",
        paddingBottom: ".5%"
    }
});


export default Title;
