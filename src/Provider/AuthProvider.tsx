import React from 'react';
import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from "../../firebase.config";
import firebase from 'firebase/compat/app';

export const AuthContext = createContext<{
    user: firebase.User | null;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    createUser: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
    signIn: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
    SignInWithGoogle: () => Promise<firebase.auth.UserCredential>;
    logOut: () => Promise<void>;
}>
({
    user: null,
    loading: true,
    setLoading: () => {},
    createUser: () => Promise.resolve<null>,
    signIn: () => Promise.resolve(null),
    signInWithGoogle: () => Promise.resolve(null),
    resetPassword: () => Promise.resolve(),
    logOut: () => Promise.resolve(),
    updateUserProfile: () => Promise.resolve(),
  });
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = email => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = async () => {
    setLoading(true);
    // clearCookie(); // Assuming clearCookie is not defined in this file
    return signOut(auth);
  };

//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('CurrentUser-->', currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
   
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
