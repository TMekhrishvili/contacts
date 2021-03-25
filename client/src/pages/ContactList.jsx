import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd'
import { fetchContacts, fetchFavorite } from '../services/services'
import { GlobalContext } from '../context/GlobalStates'
import { StarFilled } from '@ant-design/icons'
import moment from 'moment'

const columns = [
    {
        title: 'FullName',
        dataIndex: 'fullName',
    },
    {
        title: 'Date of Bithday',
        dataIndex: 'dob',
        render(dob) {
            return dob ? moment(dob).format("DD.MM.YYYY") : " - ";
        },
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
    },
    {
        title: 'City',
        dataIndex: 'city',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Mobile',
        dataIndex: 'mobileNumber',
    },
    {
        title: 'Comment',
        dataIndex: 'comment',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Favorite',
        dataIndex: 'favorite',
    },
];

const ContactList = () => {
    const [data, setData] = useState([])
    const { searchText, setContactID, contactID } = useContext(GlobalContext)

    const handleFavorite = value => {
        // fetchFavorite(value)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }
    useEffect(() => {
        fetchContacts()
            .then(response => {
                const res = response.map(value => ({ ...value, key: value._id, favorite: value.favorite ? <StarFilled style={{ color: 'green', fontSize: '24px', cursor: 'pointer' }} onClick={() => handleFavorite(value._id)} /> : <StarFilled onClick={() => handleFavorite(value._id)} style={{ color: 'gray', fontSize: '24px', cursor: 'pointer' }} /> }))
                setData(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [contactID]);

    return (
        <Table
            columns={columns}
            dataSource={data}
            size="small"
            rowSelection={{
                type: 'radio',
                onChange: (selectedRowKeys) => {
                    setContactID(selectedRowKeys)
                }
            }}
        />
    )
}

export default ContactList