import React from 'react'
import { Table } from 'antd';

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
];
const data = [
    {
        key: '1',
        name: 'ანზორ',
        lastname: 'ახვლედიანი',
        dob: '12/05/2020',
        phonenumer: '599787878',
        city: 'თბილისი',
        address: 'მელიქიშვილის ქ. 25',
        otherinfo: 'სხვა',
    },
    {
        key: '2',
        name: 'ანზორ',
        lastname: 'ახვლედიანი',
        dob: '12/05/2020',
        phonenumer: '599787878',
        city: 'თბილისი',
        address: 'მელიქიშვილის ქ. 25',
        otherinfo: 'სხვა',
    },
];


const ContactList = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="middle"
        />
    )
}

export default ContactList
