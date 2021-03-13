import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd'
import { fetchContacts } from '../../services/services'
import { GlobalContext } from '../../context/GlobalStates'

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
        title: 'სექსი',
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
    const { searchText, setContactID } = useContext(GlobalContext)

    useEffect(() => {
        fetchContacts(searchText)
            .then(response => {
                const res = response.map(value => ({ ...value, key: value.contactID }))
                setData(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [searchText]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setContactID(selectedRowKeys)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="middle"
            rowSelection={{
                type: 'radio',
                ...rowSelection,
            }}
        />
    )
}

export default ContactList
