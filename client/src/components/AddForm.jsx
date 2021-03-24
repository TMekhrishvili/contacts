import React, { useState, useContext, useEffect } from 'react'
import { Form, Modal, Checkbox, Input, DatePicker, Select, Button } from 'antd'
import { GlobalContext } from '../context/GlobalStates'
import { fetchContact, fetchCity, fetchGender, postContact, fetchPhoneNumberType } from '../services/services'
const { TextArea } = Input;
const AddForm = ({ isVisible, handleOk, handleCancel }) => {
    const [cities, setCities] = useState([])
    const [gender, setGender] = useState([])
    const [phoneNumberType, setPhoneNumberType] = useState([])
    const [contact, setContact] = useState({})
    const [otherCity, setOtherCity] = useState(false)
    const { contactID } = useContext(GlobalContext)
    const [date, setDate] = useState(null)
    useEffect(() => {
        fetchPhoneNumberType()
            .then(response => {
                setPhoneNumberType(response)
            })
            .catch(error => {
                console.log(error)
            })

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
        const data = { ...values, dob: date, phoneNumbersPost: [{ phoneNumberTypeID: values.phoneNumberTypeID, phoneNumber: values.phoneNumber }] }
        delete data.PhoneNumberTypeID
        delete data.PhoneNumber
        postContact(data)
            .then(response => {
                console.log("1", response)
            })
            .catch(error => {
                console.log("2", error)
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const datePicker = {
        width: '100%',
    }

    const handleDate = (date, dateString) => {
        setDate(dateString)
        console.log(date, dateString)
    }

    return (
        <Modal
            title="კონტაქტის დამატება/რედაქტირება"
            visible={isVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
        >
            <Form
                name="basic"
                initialValues={{
                    additionalDetails: null,
                    address: null,
                    cityActionID: false,
                    cityID: null,
                    cityName: null,
                    dob: null,
                    firstname: null,
                    genderID: null,
                    isFavorite: false,
                    lastname: null,
                    otherPhoneNumber: null,
                    PhoneNumber: null,
                    phoneNumberTypeActionID: false,
                    phoneNumberTypeID: null,
                    phoneNumberTypeName: null,
                    phoneNumber: null
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div>
                    <Form.Item
                        name="firstname"
                    >
                        <Input
                            placeholder="სახელი"
                        />
                    </Form.Item>

                    <Form.Item
                        name="lastname"
                    >
                        <Input
                            placeholder="გვარი"
                        />
                    </Form.Item>

                    <Form.Item
                        name="genderID"
                    >
                        <Select
                            placeholder="სქესი"
                            allowClear
                        >
                            {gender.map((value, index) => <Select.Option key={index} value={value.id}>{value.genderName}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="dob"
                    >
                        <DatePicker
                            style={datePicker}
                            placeholder="დაბადების თარიღი"
                            onChange={handleDate}
                        />
                    </Form.Item>

                    <Form.Item
                        name="cityID"
                    >
                        <Select placeholder="ქალაქი" allowClear>
                            {cities.map((value, index) => <Select.Option key={index} value={value.id}>{value.cityName}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Form.Item name="cityActionID" style={{ width: '100%' }} valuePropName="checked">
                            <Checkbox onChange={() => setOtherCity(!otherCity)}>დაამატე ქალაქი</Checkbox>
                        </Form.Item>
                        <Form.Item name="cityName" style={{ width: '100%' }}>
                            <Input
                                placeholder="დაამატეთ ქალაქი"
                                disabled={!otherCity}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item
                        name="address"
                    >
                        <Input
                            placeholder="მისამართი"
                        />
                    </Form.Item>
                    <Form.Item
                        name="additionalDetails"
                    >
                        <TextArea
                            row={4}
                            placeholder="დამატებითი ინფორმაცია"
                        />
                    </Form.Item>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Form.Item
                            name="phoneNumberTypeID"
                            style={{ width: '100%', marginRight: '10px' }}
                        >
                            <Select
                                placeholder="ტიპი"
                                allowClear
                            >
                                {phoneNumberType.map((value, index) => <Select.Option key={index} value={value.id}>{value.typeName}</Select.Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="phoneNumber"
                            style={{ width: '100%' }}
                        >
                            <Input
                                placeholder="შეიყვანეთ ნომერი"
                            />
                        </Form.Item>
                    </div>
                    <Form.Item name="phoneNumberTypeActionID" valuePropName="checked">
                        <Checkbox >დაამატე სხვა ტელეფონის ნომერი</Checkbox>
                    </Form.Item>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Form.Item name="phoneNumberTypeName" style={{ width: '100%', marginRight: '10px' }}>
                            <Input
                                placeholder="დაამატეთ ტიპი"
                            />
                        </Form.Item>
                        <Form.Item name="otherPhoneNumber" style={{ width: '100%' }}>
                            <Input
                                placeholder="დაამატეთ ნომერი"
                            />
                        </Form.Item>
                    </div>
                    <Form.Item name="isFavorite" valuePropName="checked">
                        <Checkbox >ფავორიტი</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            შენახვა
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal >
    )
}

export default AddForm
