import React, {useContext, useEffect, useState} from 'react'
import firestore from '@react-native-firebase/firestore'
import * as math from 'mathjs/lib/browser/math'
import { AuthContext } from "../../providers/AuthProvider"
import Layout from '../layout'
import Save from "../../images/recipeView/Guardado.png"
import Back from "../../images/recipeView/Flecha.png"
import Medida from "../../images/recipeView/Medida.png"
import Cantidad from "../../images/recipeView/Cantidad.png"
import Super from "../../images/recipeView/Super.png"
import Icon from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/Ionicons'
import RecipeCard from '../../components/recipe/recipeCard'
import {Picker} from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker'

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
    ImageBackground, 
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width

function RecipeDetail({navigation, route: {params}}) {
    const {user} = useContext(AuthContext)
    const [note, setNote] = useState(null)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('1');
    const [items, setItems] = useState([
    {label: '1/2', value: '.5'},
    {label: '1', value: '1'},
    {label: '2', value: '2'}
    ]);
    const [openSecond, setOpenSecond] = useState(false);
    const [valueSecond, setValueSecond] = useState('kg');
    const [itemsSecond, setItemsSecond] = useState([
    {label: 'kg', value: 'kg'},
    {label: 'oz', value: 'oz'}
    ]);

    const addFavorite = async () => {
        const hasFav = user.favorites.filter(r => r.uid === params.recipe.uid).length
        if (!hasFav) {
            const add = await firestore()
            .collection('users')
            .doc(user.uid)
            .set({favorites: [...user?.favorites || [], {
            uid: params.recipe.uid
            }]}, {merge: true});

        console.log('¡iiiii', add)
        }
    }

    const setQuantity = (quantity) => {
        if (quantity.includes("/")) {
            let toBeFraction = math.evaluate(math.fraction(quantity) * value)

            if ( parseFloat( toBeFraction ) === parseInt( toBeFraction ) ) {
                return toBeFraction;
            }

            var gcd = function(a, b) {
                if (b < 0.0000001) {
                    return a;
                }
                return gcd(b, Math.floor(a % b));
            };
            var len = toBeFraction.toString().length - 2;
            var denominator = Math.pow(10, len);
            var numerator = toBeFraction * denominator;
            var divisor = gcd(numerator, denominator);
            numerator /= divisor;
            denominator /= divisor;
            var base = 0;

            if ( numerator > denominator ) {
                base = Math.floor( numerator / denominator );
                numerator -= base * denominator;
            }
            toBeFraction = Math.floor(numerator) + '/' + Math.floor(denominator);
            if ( base ) {
                toBeFraction = base + ' ' + toBeFraction;
            }
            return toBeFraction;

        } else {
            let newNumber = math.evaluate((math.evaluate(`number(${quantity})`)) * value)

            var resultNumber = (newNumber - Math.floor(newNumber)) !== 0; 

            if (resultNumber) {
                //return 'Number has a decimal place.';
                if ( parseFloat( newNumber ) === parseInt( newNumber ) ) {
                    return newNumber;
                }
    
                var gcd = function(a, b) {
                    if (b < 0.0000001) {
                        return a;
                    }
                    return gcd(b, Math.floor(a % b));
                };
                var len = newNumber.toString().length - 2;
                var denominator = Math.pow(10, len);
                var numerator = newNumber * denominator;
                var divisor = gcd(numerator, denominator);
                numerator /= divisor;
                denominator /= divisor;
                var base = 0;
    
                if ( numerator > denominator ) {
                    base = Math.floor( numerator / denominator );
                    numerator -= base * denominator;
                }
                newNumber = Math.floor(numerator) + '/' + Math.floor(denominator);
                if ( base ) {
                    newNumber = base + ' ' + newNumber;
                }
                return newNumber;
            } else {
                //return 'It is a whole number.';
                return math.evaluate(`string(${newNumber})`)
            }
        }
    }

    return (
    <>
        <Layout nav={() => navigation.openDrawer()}/>
        <ImageBackground source={{uri: params.recipe.image}} style={styles.imageView}>
            <TouchableOpacity style={styles.iconRight} onPress={addFavorite}>
                <Image source={Save} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconLeft} onPress={() => navigation.navigate(params.recipe.category)}>
                <Image source={Back} style={styles.icon}/>
            </TouchableOpacity>
            {Platform.OS === 'ios' ? 
                <View style={styles.titleView}>
                    <Text style={styles.title}>{params.recipe.name}</Text>
                </View>
            : 
                <View style={styles.titleViewAndroid}>
                    <Text style={styles.title}>{params.recipe.name}</Text>
                </View>
            }
        </ImageBackground>
        <ScrollView style={styles.scroll}>
            
            <View 
            style={{width: width,
            height: width/5,
            display: 'flex',
            flexDirection: 'row',
            marginBottom: Platform.OS === 'ios' && open ? width/4 : Platform.OS === 'ios' && openSecond ? width/7 : width/25,
            marginTop: Platform.OS === 'ios' ? width/10 : width/50,
            justifyContent: 'space-evenly'}}>
                <View style={styles.dropView}>
                    <Image source={Cantidad} style={styles.icon}/>
                    <DropDownPicker 
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.dropdown}
                        placeholder={value}
                        showTickIcon={false}
                        ArrowDownIconComponent={({style}) => <IonIcon name='caret-down-sharp' style={styles.arrowDrop} />}
                        ArrowUpIconComponent={({style}) => <IonIcon name='caret-up-sharp' style={styles.arrowDrop} />}
                        textStyle={{fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Roman' : "HelveticaNeueLTStd ROMAN",
                        fontSize: width/25}}
                        dropDownContainerStyle={{width: width/5, marginLeft: width/25, borderColor: '#967B4A'}}
                    />
                </View>
                <View style={styles.dropView}>
                <Image source={Medida} style={styles.icon}/>
                    <DropDownPicker 
                        open={openSecond}
                        value={valueSecond}
                        items={itemsSecond}
                        setOpen={setOpenSecond}
                        setValue={setValueSecond}
                        setItems={setItemsSecond}
                        style={styles.dropdown}
                        showTickIcon={false}
                        ArrowDownIconComponent={({style}) => <IonIcon name='caret-down-sharp' style={styles.arrowDrop} />}
                        ArrowUpIconComponent={({style}) => <IonIcon name='caret-up-sharp' style={styles.arrowDrop} />}
                        textStyle={{fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Roman' : "HelveticaNeueLTStd ROMAN",
                        fontSize: width/25}}
                        dropDownContainerStyle={{width: width/5, marginLeft: width/25, borderColor: '#967B4A'}}
                    />
                </View>
            </View>

            <View style={styles.ingredientsTitleView}>
                <Text style={styles.ingredients}>Ingredientes</Text>
                <Image source={Super} style={styles.superIcon}/>
            </View>
            <View style={styles.ingredientsMain}>
            {params.recipe.ingredients.map((ingredient, idx) => (
                <View style={styles.listView} key={idx}>
                    <View style={styles.ingredientView}>
                        <Icon name='dot-single' style={styles.bullet}/>
                        <Text style={styles.ingredientText}>{setQuantity(ingredient.quantity)}<Text> {ingredient.name}</Text></Text>
                    </View>
                </View>
            ))}
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate({name: 'Steps', params: {params}})}>
                    <Text style={styles.buttonText}>¡Empezar!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

        {/* <View>
            <Text>{params.recipe.name}</Text>
            <Button onPress={addFavorite} title='Guardar'/>
            <TextInput 
            value={note}
            placeholder='Notas'
            onChangeText={noteText => setNote(noteText)}
            autoCapitalize='none'
            autoCorrect={false}/>
            <Button onPress={addFavorite} title='Guardar Nota'/>
        </View> */}
    </>
    )
}

const styles = StyleSheet.create({
    imageView: {
        width: width,
        height: width/1.5,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center", 
        paddingBottom: Platform.OS === 'ios' ? width/1.3: width/1.3,
        marginBottom: Platform.OS === 'ios' ? 0: width/15
    }, 
    iconRight: {
        position: 'absolute',
        top: width/20,
        right: width/20
    },
    iconLeft: {
        position: 'absolute',
        top: width/20,
        left: width/20
    },
    icon: {
        width: width/10,
        height: width/10,
    }, 
    titleView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 0: 0,
        width: width
    },
    titleViewAndroid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: width,
        position: 'absolute',
        bottom: 0,
    },
    title: {
        fontSize: width/15,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Bd' : "HelveticaNeueLTStd BOLD",
    },
    ingredients: {
        fontSize: width/16,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Roman' : "HelveticaNeueLTStd ROMAN",
        marginBottom: width/18,
    },
    ingredientsTitleView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
    },
    button: {
        width: width/2,
        backgroundColor: '#967B4A',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: Platform.OS === 'ios' ? width/10 : width/12,
        alignItems: 'center'
    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: width/20
    },
    buttonText: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Bd' : "HelveticaNeueLTStd BOLD",
        fontSize: width/20
    }, 
    listView: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: width/90,
    },
    ingredientView: {
        display: 'flex',
        flexDirection: 'row',
    }, 
    bullet: {
        color: '#967B4A',
        fontSize: width/12,
        alignSelf: 'flex-start'
    },
    ingredientText: {
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueLTStd-Roman' : "HelveticaNeueLTStd ROMAN",
        width: width/1.5,
        fontSize: width/23,
        lineHeight: width/15,
        alignSelf: 'center'
    },
    ingredientsMain: {
        marginLeft: width/10,
    },
    dropdown: {
        width: width/5,
        height: width/10,
        borderColor: '#967B4A',
        borderRadius: 0,
        marginLeft: width/25,
    },
    arrowDrop: {
        color: '#967B4A',
        fontSize: width/25,
    },
    dropView: {
        display: 'flex',
        flexDirection: 'row',
        width: width/2.9,
        position: 'relative',
        zIndex: 10
    },
    bothPickers: {
        width: width,
        height: width/5,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? width/10 : width/15,
        marginTop: Platform.OS === 'ios' ? width/10 : width/50,
        justifyContent: 'space-evenly',
    },
    superIcon: {
        width: width/10,
        height: width/10,
        position: 'absolute',
        right: width/15,
        bottom: 17,
    }
})

export default RecipeDetail
