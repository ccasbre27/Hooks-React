import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // const user = {
    //     id: 1234,
    //     name: 'Pepe',
    //     email: 'pepe@outlook.com'
    // }

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
