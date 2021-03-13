import React, { useContext } from 'react'
import { Button } from 'antd'
import { GlobalContext } from '../context/GlobalStates'
import AddForm from './AddForm'
import DeleteContact from './DeleteContact'
import { deleteContact } from '../services/services'

const CrudButtons = () => {
    const { isModalVisible, setIsModalVisible, isDeleteModalVisible, setIsDeleteModalVisible, contactID, setContactID } = useContext(GlobalContext)

    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        setIsModalVisible(false)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }


    const showDeleteContactModal = () => {
        setIsDeleteModalVisible(true)
    }
    const handleDeleteContactOk = () => {
        setIsDeleteModalVisible(false)
        deleteContact(contactID)
            .then(response => {
                console.log(response)
                setContactID(0)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleDeleteContactCancel = () => {
        setIsDeleteModalVisible(false)
    }

    return (
        <div className="crud-buttons">
            <AddForm
                isVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <DeleteContact
                isVisible={isDeleteModalVisible}
                handleOk={handleDeleteContactOk}
                handleCancel={handleDeleteContactCancel}
            />
            <Button type="primary" onClick={showModal}>დამატება</Button>
            <Button onClick={showModal}>რედაქტირება</Button>
            <Button onClick={showDeleteContactModal} danger>წაშლა</Button>
        </div>
    )
}

export default CrudButtons
