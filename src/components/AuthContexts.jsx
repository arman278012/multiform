import React, { createContext, useState } from 'react';
export const AppContext = createContext();

const AuthContexts= ({ children }) => {


    //All the states of the whole website are defined here---
    const [number, setNumber] = useState(0)
    const [userData, setUserData] = useState([

    ])
    // console.log(number)
    return (
        <AppContext.Provider value={{number, setNumber,userData, setUserData
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AuthContexts