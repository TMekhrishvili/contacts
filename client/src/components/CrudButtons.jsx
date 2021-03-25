import React, { useState, useContext } from 'react'
import CreateUpdate from './CreateUpdate'
//import Read from './Read'
import { GlobalContext } from '../context/GlobalStates'
import DeleteContact from './DeleteContact'
import Notification from './Notification'
import { Button } from 'antd'
import GeneralModal from './GeneralModal'
import Read from './Read'

const CrudButtons = () => {
    const [type, settype] = useState('CREATE')
    const { contactID, setContactID, setIsModalVisible } = useContext(GlobalContext)

    const childForModal = type => {
        if (type === 'CREATE' || type === 'UPDATE') return <CreateUpdate />
        else if (type === 'READ') return <Read />
        else if (type === 'DELETE') return <DeleteContact />
        else if (type === 'NOTIFICATION') return <Notification />
    }

    return (
        <div className="main">
            <GeneralModal>
                {childForModal(type)}
            </GeneralModal>

            <Button
                type="primary"
                onClick={() => {
                    setIsModalVisible(true)
                    setContactID(0)
                    settype('CREATE')
                }}
            >
                Create
            </Button>

            <Button
                onClick={() => {
                    setIsModalVisible(true)
                    if (contactID > 0) settype('READ')
                    else settype('NOTIFICATION')
                }}
            >
                Read
            </Button>

            <Button
                onClick={() => {
                    setIsModalVisible(true)
                    if (contactID > 0) settype('UPDATE')
                    else settype('NOTIFICATION')
                }}
            >
                Update
            </Button>

            <Button
                onClick={() => {
                    setIsModalVisible(true)
                    if (contactID > 0) settype('DELETE')
                    else settype('NOTIFICATION')
                }}
                danger
            >
                Delete
            </Button>
        </div>
    )
}

export default CrudButtons