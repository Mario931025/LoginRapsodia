import 'react-native-gesture-handler';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Layout from "../layout"


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
} from 'react-native';

console.log(auth)

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Register = ({navigation}) => {
const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)

async function register(){
    try {
    const authStatus = await auth().createUserWithEmailAndPassword(email, password)
    const userInDB = await firestore()
    .collection('users')
    .doc(authStatus.user.uid)
    .set({email})

    } catch(e) {
    console.log(e)
    }
}

return (
    <>
    <Layout nav={() => navigation.openDrawer()}/>
        <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                    <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                        <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Email"/>
                        <TextInput value={password} onChangeText={text => setPassword(text)} placeholder="Password"/>
                        <Button onPress={register} title="Regístrate" />
                </ScrollView>
            </SafeAreaView>
    </>
    );
};


export default Register;
