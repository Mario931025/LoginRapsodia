import React from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import MenuBack from '../../images/menu/MenuBackground.png'
import Inicio from "../../images/menu/Inicio.png"
import Recetas from "../../images/menu/Recetas.png"
import Planificador from "../../images/menu/Planificador.png"
import Guardadas from "../../images/menu/RecetasGuardadas.png"
import Super from "../../images/menu/Super.png"
import Info from "../../images/menu/Info.png"
import Perfil from "../../images/menu/Perfil.png"

import Icon from 'react-native-elements'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    Platform,
    ImageBackground, 
    Image, 
    Dimensions
} from 'react-native'; 

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const DrawerContent = ({...props}) => {

    return (
        <DrawerContentScrollView { ...props} style={styles.menuBackColor}>
            {/* <DrawerItemList {...props} /> */}
                <View style={styles.titleSecondView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleStyle}>RAPSODIA DE SABORES</Text>
                    </View>
                </View>
                <ImageBackground source={MenuBack} style={styles.image}>
                    <View style={styles.menuItemViewInicial}>
                        <Image source={Inicio} style={styles.icon}/>
                        <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Home')}>Inicio</Text>
                    </View>
                    <View style={styles.menuItemView}>
                        <Image source={Recetas} style={styles.icon}/>
                        <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Recipes')}>Recetas</Text>
                    </View>
                    <View style={styles.menuItemView}>
                        <Image source={Planificador} style={styles.icon}/>
                        <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Register')}>Planificador semanal</Text>
                    </View>
                    <View style={styles.menuItemView}>
                        <Image source={Guardadas} style={styles.icon}/>
                        <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Saved')}>Recetas guardadas</Text>
                    </View>
                    <View style={styles.menuItemView}>
                        <Image source={Super} style={styles.icon}/>
                        <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Register')}>Lista de súper</Text>
                    </View>
                    <View style={styles.menuItemView}>
                        <Image source={Info} style={styles.icon}/>
                        <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Register')}>Conoce sobre</Text>
                    </View>
                    <View style={styles.menuItemViewLast}>
                        <Image source={Perfil} style={styles.icon}/>
                        <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Login')}>Perfil</Text>
                    </View>
                </ImageBackground>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: '45%'
    }, 
    menuBackColor: {
        backgroundColor: '#72172D',
    }, 
    titleSecondView: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        height: RFPercentage(20)
    },
    titleStyle: {
        color: 'white',
        fontFamily: "MinionPro-Bold",
        fontSize: width/23,
        paddingLeft: width/100
        }, 
    titleView: {
        borderBottomWidth: width/160,
        borderTopWidth: width/160,
        borderColor: "white",
        paddingTop: Platform.OS === 'ios' ? "1.8%" : ".2%",
        paddingBottom: ".5%", 
        width: Platform.OS === 'ios' ? width/2 : width/2
    }, 
    image: {
        resizeMode: 'cover', 
        height: Platform.OS === 'ios' ? '100%' : '100%',
    },
    menuItemViewInicial: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width/5,
        paddingLeft: width/15
    },
    menuItemView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width/10,
        paddingLeft: width/15
    },
    menuItemViewLast: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width/10,
        paddingLeft: width/15,
        marginBottom: width
    },
    icon: {
        width: Platform.OS === 'ios' ? '13%' : '13%',
        height: Platform.OS === 'ios' ? '200%' : '170%',
        marginRight: width/30,
    }, 
    menuItem: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Roman' : 'HelveticaNeueLTStd ROMAN',
        fontSize: width/20, 
    }
});


export default DrawerContent;
