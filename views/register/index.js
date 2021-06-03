import 'react-native-gesture-handler';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Layout from '../layout';

import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

const Register = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function register() {
    try {
      const authStatus = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await firestore()
        .collection('users')
        .doc(authStatus.user.uid)
        .set({email, uid: authStatus.user.uid, create: new Date()});
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Layout nav={() => navigation.openDrawer()} />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
          />
          <Button
            onPress={() => register(email, password)}
            title="Regístrate"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Register;
