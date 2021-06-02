import React, {useState} from 'react';
import Nogada from "../../images/recipes/Nogada.png"
import Postres from "../../images/recipes/Postres.png"
import Indice from "../../images/recipes/Indice.png"
import Glosario from "../../images/recipes/Glosario.png"
import Menus from "../../images/recipes/Menus.png"
import Layout from "../layout"

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native'; 

const width = Dimensions.get('window').width

const Recipes = ({navigation}) => {

    return (
        <>
            <Layout nav={() => navigation.openDrawer()}/>
            <ScrollView>
                <View style={styles.textView}>
                    <Text style={styles.title}>Recetas</Text>
                </View>
                <ImageBackground source={Nogada} style={styles.image}>
                    <TouchableOpacity style={styles.overlay} onPress={() => navigation.navigate('Sabores')}>
                        <Text style={styles.text}>Sabores</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground source={Postres} style={styles.image}>
                    <TouchableOpacity style={styles.overlay} onPress={() => navigation.navigate('Postres')}>
                        <Text style={styles.text}>Postres</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground source={Indice} style={styles.image}>
                    <TouchableOpacity style={styles.overlay} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.text}>Índice Alfabético</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground source={Menus} style={styles.image}>
                    <TouchableOpacity style={styles.overlay} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.text}>Menús</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground source={Glosario} style={styles.image}>
                    <TouchableOpacity style={styles.overlay} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.text}>Glosario</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover', 
        height: Platform.OS === 'ios' ? width/2.5 : width/2.5,
        marginBottom: width/25,
        marginLeft: width/25,
        marginRight: width/25
    }, 
    overlay: {
        backgroundColor:'rgba(0,0,0,0.5)',
        height: width/2.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    text: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Bd' : 'HelveticaNeueLTStd BOLD',
        fontSize: width/15
    }, 
    mainView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    textView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: width/50,
        marginTop: width/50,
        height: width/4
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Bd' : 'HelveticaNeueLTStd BOLD',
        fontSize: width/13,
    }
})


export default Recipes;
