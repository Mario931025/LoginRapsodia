import React, { createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        auth().onAuthStateChanged(function(user) {
            if (user) {
                getAndSetDbUser(user.uid)
            } else {
              // No user is signed in.
                console.log('nohaynadie', user)
            }
        });
    }, [])

    const getAndSetDbUser = async uid => {
        const userId = await firestore().collection('users').doc(uid).get()
        const dbUser = userId.data()

        setUser({uid, ...dbUser})
        console.log('User:', {uid, ...dbUser})
    }

    useEffect(() => { 
        if (user) {
            const unsubscribe = firestore()
            .collection('users')
            .doc(user.uid)
            .onSnapshot(snap => {
                console.log('hubo un cambio')
                setUser({...user, ...snap.data()})
            });

        //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
        return () => unsubscribe()  
        }
        
    }, [user?.uid]);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        const {user: authUser} = await auth().signInWithEmailAndPassword(email, password);
                        getAndSetDbUser(authUser.uid)

                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                }
        }}
    >
            {children}
        </AuthContext.Provider>
    );
};