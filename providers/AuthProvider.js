import React, {createContext, useState, useEffect, useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); //Data de usuario de la base de datos
  const [dataUser, setDataUser] = useState(null); //Contraseña y password
  const [loading, setLoading] = useState(false);

  const handleUserSuscribe = (data) => {
    firestore()
      .collection('users')
      .doc(data.uid)
      .onSnapshot((snap) => {
        if (snap.exists) {
          console.log('snap =>', snap);
          setUser({...snap.data()});
        } else {
          console.log('no existe =>');
        }
      });
  };

  const login = async (email, password) => {
    setLoading(true);

    try {
      const {user: authUser} = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      setDataUser({
        email,
        password,
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);

      console.log(e);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await firestore()
        .collection('users')
        .doc(response.user.uid)
        .set({
          ...response.user,
          create: new Date(),
          uid: response.user.uid,
        });
    } catch (e) {
      console.log('error create user =>', e);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  };

  const onAuthStateChanged = useCallback((dateUserResponse = null) => {
    handleUserSuscribe(dateUserResponse);
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        setDataUser,
        dataUser,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
