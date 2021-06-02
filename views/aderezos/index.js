import React, {useEffect, useState} from 'react'
import firestore from '@react-native-firebase/firestore'
import Layout from "../layout"
import Flecha from "../../images/icons/Flecha.png"
import Icon from 'react-native-vector-icons/Entypo';

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
    Dimensions,
    TouchableOpacity
} from 'react-native';

const width = Dimensions.get('window').width

function Aderezos({navigation}) {
    const [recipes, setRecipes] = useState([])

    const fetchRecepies = async () => {
        const allRecipes = [];
        const snapshot = await firestore().collection('recipes').get();
        snapshot.forEach(doc => allRecipes.push({uid: doc.id, ...doc.data()}))

        setRecipes(allRecipes)
    }

    useEffect(() => {
        fetchRecepies()
    }, [])


    useEffect(() => {
        console.log('aderezooooos', recipes.filter(recipe => recipe.category === 'Aderezos'))
    }, [recipes])

    return (
    <>
        <Layout nav={() => navigation.openDrawer()}/>
        <View style={styles.titleView}>
            <TouchableOpacity onPress={() => navigation.navigate('Sabores')} style={styles.arrow}>
                <Image source={Flecha} style={styles.imageArrow}/>
            </TouchableOpacity>
            <Text style={styles.title}>Aderezos</Text>
        </View>
        <ScrollView>
            <View style={styles.borderView}></View>
            {recipes.filter(recipe => recipe.category === 'Aderezos').map((recipe, idx) => (
                    <View key={idx} style={styles.recipeView}>
                        <Image source={{uri: recipe.image}} style={styles.image}/>
                        <Text style={styles.text} onPress={() => navigation.navigate({name: 'RecipeDetail', params: {recipe}})}>
                            {recipe.name}
                        </Text>
                        <Icon style={styles.icon} name='chevron-thin-right' onPress={() => navigation.navigate({name: 'RecipeDetail', params: {recipe}})}/>
                    </View>
                )
            )}
            <View style={styles.borderView}></View>
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    recipeView: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: '#967B4A',
        borderTopWidth: width/400,
        borderBottomWidth: width/400,
        borderLeftWidth: width/200, 
        borderRightWidth: width/200,
        height: width / 4,
        alignItems: 'center',
        position: 'relative'
    }, 
    image: {
        height: width / 5.5,
        width: width / 5.5,
        marginLeft: width / 11,
        marginRight: width / 20
    },
    borderView: {
        borderBottomWidth: width/400,
        borderColor: '#967B4A'
    },
    text: {
        fontFamily: 'HelveticaNeueLTStd-Roman',
        fontSize: width/20,
        width: width/2
    }, 
    icon: {
        fontSize: width/20,
        position: 'absolute', 
        right: width/20
    },
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
    imageArrow: {
        width: width/12,
        height: width/12    
    },
})

export default Aderezos
