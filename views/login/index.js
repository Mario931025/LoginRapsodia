import React, {useState, useContext} from 'react';
import { StyleSheet, TextInput, Dimensions, TouchableOpacity, Text, ScrollView,Alert,View,KeyboardAvoidingView } from 'react-native';
import { AuthContext } from "../../providers/AuthProvider"
import Layout from "../layout"
import {validateEmail} from '../../utils/validations';
import {formStyles, LayoutStyles} from '../../components/category/styles';


const width = Dimensions.get('window').width

const Login = ({navigation}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [formerror, setFormError] = useState({});

    const validation = () => {
        let errors = {};
    
        if (!setEmail.email || !setPassword.password) {
          if (!setEmail.email) {
            errors.email = true;
            return true;
          }
          if (!setPassword.password) {
            errors.password = true;
            return true;
          }
        } else if (!validateEmail(setEmail.email)) {
          Alert.alert('EL FORMATO DEBE SER XXXX@CORREO.COM');
          errors.email = true;
          return true;
        } else if (setPassword.password.length < 6) {
          Alert.alert('LA CONTRASEÑA DEBE SER MAYOR A 6 CARACTERES');
          errors.password = true;
          return true;
        } else {
          return false;
        }
        setFormError(errors);
      };

    const { login } = useContext(AuthContext);

    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>

       
        <Layout nav={() => navigation.openDrawer()}/>

        <View style={[LayoutStyles.container]}>

        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <Text style={styles.titulo}>LOGIN</Text>

        <Text> EMAIL</Text>
       
        <TextInput
        value={email}
        placeholder='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
        style={[
            formStyles.input,
            formStyles.btnText,
            formerror.email && styles.error,
          ]}
        />


        <TextInput
        value={password}
        placeholder='Password'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
        style={[
            formStyles.input,
            formStyles.btnText,
            formerror.password && styles.error,
          ]}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {login(email, password), validation()}}>
            <Text style={formStyles.btnText, styles.btnRegister} >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={console.log("Vamo a registro")}>
            <Text style={formStyles.btnTextLabel} >Registrate</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>

        </View>
        </ScrollView>
        </>
        );
    };

const styles = StyleSheet.create({
        buttonContainer: {
            marginTop: 10,
            width: width / 2,
            backgroundColor: '#6646ee',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8
        },
        buttonText: {
            fontSize: 28,
            color: '#ffffff'
        },
        titulo: {
            fontSize: width / 18,
            fontWeight: 'bold',
            marginVertical: 5,
            marginLeft: width / 3.2,
            paddingBottom: 20,
            marginTop: -8,
          },
          btnRegister: {
            marginTop: 10,
          },
    });
    
    
    export default Login;





     
      
      
