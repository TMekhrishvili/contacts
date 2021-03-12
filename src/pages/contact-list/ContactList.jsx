import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { fetchContacts } from '../../services/services'
import { GlobalContext } from '../../context/GlobalStates'

const columns = [
    {
        title: 'სახელი',
        dataIndex: 'name',
    },
    {
        title: 'გვარი',
        dataIndex: 'lastname',
    },
    {
        title: 'დაბადების თარიღი',
        dataIndex: 'dob',
    },
    {
        title: 'ტელეფონის ნომერი',
        dataIndex: 'phonenumer',
    },
    {
        title: 'ქალაქი',
        dataIndex: 'city',
    },
    {
        title: 'მისამართი',
        dataIndex: 'address',
    },
    {
        title: 'დამატებითი დეტალები',
        dataIndex: 'otherinfo',
    },
    {
        title: 'ფავორიტი',
        dataIndex: 'favorite',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
};

const ContactList = () => {
    const [data, setData] = useState([])
    const { searchText } = useContext(GlobalContext)
    useEffect(() => {
        fetchContacts()
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
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
