import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
          setLoading(false);
        }, 1500);
      },[]);

    const SignUpUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const SignInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const SignOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    };
    const SocialSignIn = (provider) =>{
        return signInWithPopup(auth, provider);
    };
    const updateUserProfile = (userInfo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('auth state: ', currentUser);
        });
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        SignUpUser,
        SignInUser,
        SignOutUser,
        SocialSignIn,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;