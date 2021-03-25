import React, { useContext, useState } from 'react'
import { Modal } from 'antd'
import { GlobalContext } from '../context/GlobalStates'

const GeneralModal = props => {
    const { isModalVisible, setIsModalVisible } = useContext(GlobalContext);

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <Modal
            header={false}
            footer={false}
            visible={isModalVisible}
            onCancel={handleCancel}
        >
            <div className="general-modal">
                {props.children}
            </div>
        </Modal>
    )
}

export default GeneralModal
