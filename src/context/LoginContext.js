import { createContext } from "react"
import { useState } from "react"

export const LoginContext = createContext()

const MOCK_USERS = [
    {
        id: 1,
        email: 'admin@coder.com',
        password: 'coder'
    },
    {
        id: 2,
        email: 'user@coder.com',
        password: 'coder'
    },
    {
        id: 3,
        email: 'admin3@coder.com',
        password: 'tutor'
    }
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        email: 'user-predeterminado@coder.com',
        logged: true
    })

    const [error, setError] = useState(false)

    const login = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email && user.password === values.password)

        if (match) {
            console.log('entro')
            setError(false)
            setUser({
                email: match.email,
                logged: true
            })
        } else {
            setError(true)
        }
    }

    const logout = () => {
        setUser({});
    }

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout,
            error
        }}>
            {children}
        </LoginContext.Provider>
    )
}