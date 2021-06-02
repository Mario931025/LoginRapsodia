import React from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    Image
} from 'react-native';

function RecipeCard(props) {

    return (
    <>
        <View>
            <Text>{props.title}</Text>
            <Image source={props.image}/>
            <Button onPress={props.add}>Añadir a recetas favoritas</Button>
        </View>
    </>
    )
}

export default RecipeCard
