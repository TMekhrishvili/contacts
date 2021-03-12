import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('')

    return (
        <GlobalContext.Provider
            value={{
                isModalVisible,
                setIsModalVisible,
                searchFields,
                setSearchFields
            }}>
            { props.children}
        </GlobalContext.Provider>
    )
}