import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
interface AuthData {
    user: User | null;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    createUser: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    signInWithGoogle: () => Promise<any>; // Adjust the type accordingly
    resetPassword: (email: string) => Promise<any>; // Adjust the type accordingly
    logOut: () => Promise<any>; // Adjust the type accordingly
  }

const UseAuth = () => {
    const auth = useContext(AuthContext);
    return auth;

};


export default UseAuth;