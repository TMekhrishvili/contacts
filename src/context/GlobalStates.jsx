import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isModalVisible,
                setIsModalVisible
            }}>
            { props.children}
        </GlobalContext.Provider>
    )
}