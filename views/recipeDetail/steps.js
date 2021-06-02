import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, TextInput, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from "../../providers/AuthProvider"
import Nota from "../../images/recipeView/Nota.png"
import Layout from "../layout"

const width = Dimensions.get('window').width

const Steps = ({navigation, route: {params}}) => {
    const {user} = useContext(AuthContext)
    const [recipe, setRecipe] = useState(null)

    const fetchRecipe= async () => {
        const selectedRecipe = await firestore().collection('recipes').doc(params.params.recipe.uid).get().then((doc) => {
            setRecipe({uid: doc.id, ...doc.data()})
        })

            }

    const addNote = async () => {
        const hasFav = user.favorites.filter(r => r.uid === params.params.recipe.uid).length
        if (!hasFav) {
            const add = await firestore()
            .collection('users')
            .doc(user.uid)
            .set({favorites: [...user?.favorites || [], {
            uid: params.params.recipe.uid
            }]}, {merge: true});

        console.log('¡iiiii', add)
        navigation.navigate({name: 'Notes', params: {recipe}})
        }
}

    useEffect(() => {
        fetchRecipe()
    }, [])

    return (
        <>
        <Layout nav={() => navigation.openDrawer()}/>
        <Text>PASOS</Text>
        <Text onPress={() => navigation.navigate({name: 'RecipeDetail', params: {recipe}})}>{params.params.recipe.name}</Text>
        <TouchableOpacity onPress={addNote}>
            <Image source={Nota} style={styles.icon}/>
        </TouchableOpacity>
        </>
        );
    };

const styles = StyleSheet.create({
    icon: {
        width: width/10,
        height: width/10,
    }, 
    });
    
    
    export default Steps;