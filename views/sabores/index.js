import React, {useState} from 'react';
import Layout from "../layout"
import Flecha from "../../images/icons/Flecha.png"
import CategoryCard from "../../components/category"
import Aderezos from "../../images/sabores/Aderezos.png"
import Arroz from "../../images/sabores/Arroz.png"
import Antojitos from "../../images/sabores/Antojitos.png"
import Aves from "../../images/sabores/Aves.png"
import BebidasIsrael from "../../images/sabores/BebidasIsrael.png"
import BebidasMex from "../../images/sabores/BebidasMex.png"
import Carnes from "../../images/sabores/Carnes.png"
import Ensaladas from "../../images/sabores/Ensaladas.png"
import Mazza from "../../images/sabores/Mazza.png"
import Entradas from "../../images/sabores/Entradas.png"
import Huevos from "../../images/sabores/Huevos.png"
import Leche from "../../images/sabores/Leche.png"
import Panes from "../../images/sabores/Panes.png"
import Pastas from "../../images/sabores/Pastas.png"
import Pescados from "../../images/sabores/Pescados.png"
import SalsasMesa from "../../images/sabores/SalsasMesa.png"
import Salsas from "../../images/sabores/Salsas.png"
import Sopas from "../../images/sabores/Sopas.png"
import Verduras from "../../images/sabores/Verduras.png"

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

const Sabores = ({navigation}) => {

    return (
        <>
        <Layout nav={() => navigation.openDrawer()}/>
        <View style={styles.titleView}>
            <TouchableOpacity onPress={() => navigation.navigate('Recipes')} style={styles.arrow}>
                <Image source={Flecha} style={styles.image}/>
            </TouchableOpacity>
            <Text style={styles.title}>Sabores</Text>
        </View>
        <ScrollView>
            <View style={styles.categoryView}>
                <CategoryCard title='Aderezos' background={Aderezos} navigateTo={() => navigation.navigate('Aderezos')}/>
                <CategoryCard title='Arroz' background={Arroz} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Antojitos' background={Antojitos} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Aves' background={Aves} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Bebidas israelíes' background={BebidasIsrael} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Bebidas mexicanas' background={BebidasMex} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Carnes' background={Carnes} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Ensaladas' background={Ensaladas} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Entrada israelí Mazza' background={Mazza} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Entradas' background={Entradas} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Huevos' background={Huevos} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Leche y quesos no lácteos' background={Leche} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Panes y masas' background={Panes} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Pastas' background={Pastas} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Pescados' background={Pescados} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Salsas de mesa' background={SalsasMesa} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Salsas para guisados' background={Salsas} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Sopas y cremas' background={Sopas} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryViewLast}>
                <CategoryCard title='Verduras y lácteos' background={Verduras} navigateTo={() => navigation.navigate('Register')}/>
            </View>
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    titleView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: width/50,
        marginTop: width/50,
        height: width/4
    }, 
    arrow: {
        position: 'absolute',
        left: '5%',
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Bd' : 'HelveticaNeueLTStd BOLD',
        fontSize: width/13,
    },
    image: {
        width: width/12,
        height: width/12    
    },
    categoryView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: width/25
    },
    categoryViewLast: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: width/25,
        marginLeft: width/30
    }
})


export default Sabores;
