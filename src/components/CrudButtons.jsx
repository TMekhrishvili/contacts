import React, { useContext } from 'react'
import { Button } from 'antd';
import { GlobalContext } from '../context/GlobalStates';
import AddForm from './AddForm';

const CrudButtons = () => {
    const { isModalVisible, setIsModalVisible } = useContext(GlobalContext)

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="crud-buttons">
            <AddForm isModalVisible={isModalVisible} handleOk={handleOk} />
            <Button type="primary" onClick={showModal}>დამატება</Button>
            <Button  onClick={showModal}>რედაქტირება</Button>
            <Button danger>წაშლა</Button>
        </div>
    )
}

export default CrudButtons
