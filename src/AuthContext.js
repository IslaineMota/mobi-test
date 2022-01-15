import React, { createContext, useState } from 'react';

export const authContext = createContext(null);

const GlobalContextProvider = ({ children }) => {

    const [userState, setUserState] = useState(null);

    return (
        <authContext.Provider value={{
            user: userState,
            setUser: setUserState,
        }}
        >
            {children}
        </authContext.Provider>
    );
}

export default GlobalContextProvider;