import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd'
import { fetchContacts, fetchFavorite } from '../services/services'
import { GlobalContext } from '../context/GlobalStates'
import { StarFilled } from '@ant-design/icons'

const columns = [
    {
        title: 'სახელი და გვარი',
        dataIndex: 'fullname',
    },
    {
        title: 'მობილურის ნომერი',
        dataIndex: 'phoneNumber',
    },
    {
        title: 'ქალაქი',
        dataIndex: 'cityName',
    },
    {
        title: 'სქესი',
        dataIndex: 'genderName',
    },
    {
        title: 'მისამართი',
        dataIndex: 'address',
    },
    {
        title: 'დაბადების თარიღი',
        dataIndex: 'dob',
    },
    {
        title: 'დამატებითი დეტალები',
        dataIndex: 'additionalDetails',
    },
    {
        title: 'ფავორიტი',
        dataIndex: 'isFavorite',
    },
];

const ContactList = () => {

    const [data, setData] = useState([])
    const { searchText, setContactID, contactID } = useContext(GlobalContext)

    useEffect(() => {
        fetchContacts(searchText)
            .then(response => {
                const res = response.map(value => ({ ...value, key: value.contactID, isFavorite: value.isFavorite ? <StarFilled style={{ color: 'green', fontSize: '24px', cursor: 'pointer' }} onClick={() => handleFavorite(value.contactID)} /> : <StarFilled onClick={() => handleFavorite(value.contactID)} style={{ color: 'gray', fontSize: '24px', cursor: 'pointer' }} /> }))
                console.log(res)
                setData(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [searchText, contactID]);

    const handleFavorite = value => {
        setContactID(0)
        fetchFavorite(value)
            .then(() => {
                console.log("მოვიდა")
                setContactID(value)
            })
            .catch(error => {
                console.log(error)
            })
        setContactID(0)
    }
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="middle"
            rowSelection={{
                type: 'radio',
                onChange: (selectedRowKeys) => {
                    console.log(selectedRowKeys)
                    setContactID(selectedRowKeys)
                }
            }}
        />
    )
}

export default ContactList