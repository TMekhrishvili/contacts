import React, { useState, useContext, useEffect } from 'react'
import { Form, Modal, Input, DatePicker, Select, } from 'antd'
import { GlobalContext } from '../context/GlobalStates'
import { fetchContact, fetchCity, fetchGender } from '../services/services'

const AddForm = ({ isModalVisible, handleOk }) => {
    const [cities, setCities] = useState([])
    const [gender, setGender] = useState([])
    const [contact, setContact] = useState({})
    const { contactID } = useContext(GlobalContext)

    useEffect(() => {
        fetchCity()
            .then(response => {
                setCities(response)
            })
            .catch(error => {
                console.log(error)
            })

        fetchGender()
            .then(response => {
                setGender(response)
            })
            .catch(error => {
                console.log(error)
            })

        if (contactID > 0) {
            fetchContact(contactID)
                .then(response => {
                    setContact(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [contactID]);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const datePicker = {
        width: '100%',
    }

    return (
        <Modal
            title="კონტაქტის დამატება/რედაქტირება"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleOk}
        >
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div>
                    <Form.Item
                        name="firstName"
                    >
                        <Input
                            placeholder="სახელი"
                            defaultValue={!!contact.firstname ? contact.firstname : ''}
                        />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                    >
                        <Input
                            placeholder="გვარი"
                            defaultValue={!!contact.lastname ? contact.lastname : ''}
                        />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                    >
                        <Select
                            placeholder="სქესი"
                        >
                            {gender.map((value, index) => <Select.Option key={index} value={value.genderID}>{value.genderName}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="dob"
                    >
                        <DatePicker style={datePicker} placeholder="დაბადების თარიღი" />
                    </Form.Item>
                    <Form.Item
                        name="city"
                    >
                        <Select placeholder="ქალაქი">
                            {cities.map((value, index) => <Select.Option key={index} value={index}>{value.cityName}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="phonenumber"
                    >
                        <Input placeholder="ტელეფონის ნომერი" />
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export default AddForm
