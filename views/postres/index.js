import React, {useState} from 'react';
import Layout from "../layout"
import Flecha from "../../images/icons/Flecha.png"
import CategoryCard from "../../components/category"
import Chocolates from "../../images/postres/Chocolates.png"
import Galletas from "../../images/postres/Galletas.png"
import Gelatinas from "../../images/postres/Gelatinas.png"
import Helados from "../../images/postres/Helados.png"
import Masas from "../../images/postres/Masas.png"
import Mermeladas from "../../images/postres/Mermeladas.png"
import Panques from "../../images/postres/Panques.png"
import Gluten from "../../images/postres/Gluten.png"
import Individuales from "../../images/postres/Individuales.png"
import Pesaj from "../../images/postres/Pesaj.png"
import Parve from "../../images/postres/Parve.png"
import Saludables from "../../images/postres/Saludables.png"
import Internacional from "../../images/postres/Internacional.png"
import Mediterranea from "../../images/postres/Mediterranea.png"
import Mexicana from "../../images/postres/Mexicana.png"
import Tartas from "../../images/postres/Tartas.png"

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
            <Text style={styles.title}>Postres</Text>
        </View>
        <ScrollView>
            <View style={styles.categoryView}>
                <CategoryCard title='Chocolates' background={Chocolates} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Galletas' background={Galletas} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Gelatinas Y Flanes' background={Gelatinas} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Helados' background={Helados} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Masas Y Panes' background={Masas} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Mermeladas, Cremas Y Salsas Dulces' background={Mermeladas} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Panqués Y Pasteles' background={Panques} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Postres Gluten Free' background={Gluten} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Postres Individuales' background={Individuales} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Postres para Pesaj' background={Pesaj} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Postres Parve (No lácteo)' background={Parve} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Postres Saludables' background={Saludables} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Respostería Internacional' background={Internacional} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Repostería Mediterránea-Israelí' background={Mediterranea} navigateTo={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.categoryView}>
                <CategoryCard title='Repostería Mexicana' background={Mexicana} navigateTo={() => navigation.navigate('Register')}/>
                <CategoryCard title='Tartas, Tartaletas Y Pays' background={Tartas} navigateTo={() => navigation.navigate('Register')}/>
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
    }
})


export default Sabores;
