
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Layout from '../layout';
import Swiper from 'react-native-swiper';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width
import { BackgroundImage } from 'react-native-elements/dist/config';
import color from 'color';

const data = [
  {
    id: 1,
    title: 'Bebidas Mexicanas',
    category: 'Bebidas Mexicanas',
  },
  {
    id: 2,
    title: 'Aderezos',
    category: 'Aderezos',
  },
  {
    id: 3,
    title: 'Ensaladas',
    category: 'Ensaladas',
  },
  {
    id: 4,
    title: 'Entradas',
    category: 'Entradas',
  },
  {
    id: 5,
    title: 'Postres',
    category: 'Postres',
  },
];


function Home({navigation}) {
  const [recipes, setRecipes] = useState([]);

  const fetchRecepies = async () => {
    const allRecipes = [];
    const snapshot = await firestore().collection('recipes').get();
    snapshot.forEach((doc) => allRecipes.push({uid: doc.id, ...doc.data()}));
    setRecipes(allRecipes);
  };

  const handleItem = (item) => {
    navigation.navigate('Sabores');
  };

  useEffect(() => {
    fetchRecepies();
  }, []);

  const comida = ({id, category, title}) => {
    return (
      <View key={id} style={{flex: 1}}>
        <Text style={{fontSize: width/18, fontWeight: 'bold', marginVertical: 5}}>
          {title}
         
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {recipes
              ?.filter((recipe) => recipe.category === category)
              .map((recipe) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={recipe.uid}
                    onPress={() => navigation.navigate({name: 'RecipeDetail', params: {recipe}})}>
                    <View style={{marginHorizontal: 5}}>
                      <Image
                        source={{uri: recipe.image}}
                        style={{width: 150, height: 150}}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Layout nav={() => navigation.openDrawer()} />
      <View style={{flex: 2}}>

   

        <Swiper dotStyle={{height:15,width:15,borderRadius:20}} activeDot={<View style={{width:15, height:15, backgroundColor:'#967B4A',borderRadius:20}}/> }  dotColor="#fff" activeDotColor="#967B4A"     loop={true} index={0}>
          <View style={styles.slide}>
            <Image
              resizeMethod={'scale'}
              style={{height: '100%', width: '100%'}}
              source={require('../../images/menus/BrunchFrio.png')}
              resizeMode={'stretch'}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMethod={'scale'}
              style={{height: '100%', width: '100%'}}
              source={require('../../images/menus/Carne.png')}
              resizeMode={'stretch'}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMethod={'scale'}
              style={{height: '100%', width: '100%'}}
              source={require('../../images/menus/Parrillada.png')}
              resizeMode={'stretch'}
            />
          </View>
        </Swiper>
      </View>

      

      <View style={{flex: 4, paddingVertical: 5,marginTop:40,marginLeft:50}}>
        <ScrollView>
          <View style={styles.contenedorRecetas}>
          {recipes && data.map(comida)}
          </View>
          </ScrollView>
          
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  contenedorRecetas:{
    height:1250
  }
});

export default Home;