import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ () => setUser({ 
                    id: 12324,
                    name: 'Pepe',
                    email: 'pepe@outlook.com'
                 }) }>
                Login
            </button>
        </div>
    )
}
