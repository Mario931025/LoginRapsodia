import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from "./providers/AuthProvider"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Saved from './views/saved'
import DrawerContent from './views/layout/DrawerContent'
import Register from './views/register'
import Login from './views/login'
import HomeScreen from "./views/home"
import Recipes from "./views/recipes"
import Sabores from "./views/sabores"
import Postres from "./views/postres"
import Aderezos from "./views/aderezos"
import RecipeDetail from "./views/recipeDetail"
import Steps from "./views/recipeDetail/steps"
import Notes from "./views/recipeDetail/notes"
import Layout from "./views/layout"

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  Dimensions
} from 'react-native'; 



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = ({navigation}) => {

  return (
  <AuthProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" 
        drawerStyle={{width: '84%'}}
        drawerContent={props => <DrawerContent { ...props}/>}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Recipes" component={Recipes} />
          <Drawer.Screen name="Sabores" component={Sabores} />
          <Drawer.Screen name="Postres" component={Postres} />
          <Drawer.Screen name="Aderezos" component={Aderezos} />
          <Drawer.Screen name="RecipeDetail" component={RecipeDetail} />
          <Drawer.Screen name="Steps" component={Steps} />
          <Drawer.Screen name="Notes" component={Notes} />
          <Drawer.Screen name="Saved" component={Saved} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </AuthProvider>
  );
};


export default App;
