import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [contactID, setContactID] = useState(0)
    return (
        <GlobalContext.Provider
            value={{
                isModalVisible,
                setIsModalVisible,
                isDeleteModalVisible,
                setIsDeleteModalVisible,
                searchText,
                setSearchText,
                contactID,
                setContactID
            }}>
            { props.children}
        </GlobalContext.Provider>
    )
}