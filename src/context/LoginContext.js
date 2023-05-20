import { createContext, useEffect } from "react"
import { useState } from "react"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, provider } from "../firebase/config"

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        email: null,
        logged: false
    })
    const [error, setError] = useState(false)

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => {
                console.log(err)    
                setError(true)
            })
    }

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => {
                console.log(err)    
                setError(true)
            })      
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false
                });
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setError(false)
                setUser({
                    email: user.email,
                    logged: true
                })
            } else {
                logout()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout,
            error,
            register,
            googleLogin
        }}>
            {children}
        </LoginContext.Provider>
    )
}