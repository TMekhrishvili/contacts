import React, { useState, useContext, useEffect } from 'react'
import { Form, Checkbox, Input, DatePicker, Select, Button } from 'antd'
import { GlobalContext } from '../context/GlobalStates'
import moment from 'moment'
import { fetchContact, fetchCity, fetchGender, addContact } from '../services/services'
const { TextArea } = Input;

const CreateUpdate = () => {

    const [cities, setCities] = useState([])
    const [gender, setGender] = useState([])
    const { contactID } = useContext(GlobalContext)
    const [date, setDate] = useState(null)

    const datePicker = {
        width: '100%',
    }

    const handleDate = (date, dateString) => {
        setDate(dateString)
        console.log(moment(date).format('MM.DD.YYYY'))
    }
    const onFinish = (values) => {
        const data = { ...values, dob: moment(values.dob).format('DD.MM.YYYY') }
        console.log(data)
        addContact(data)
            .then(response => {
                console.log("1", response)
            })
            .catch(error => {
                console.log("2", error)
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

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
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [contactID]);


    return (
        <Form
            name="basic"
            initialValues={{
                city: "Tbilisi",
                gender: 1,
                status: true,
                favorite: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div>
                <Form.Item
                    name="fullName"
                >
                    <Input
                        placeholder="Fullname"
                    />
                </Form.Item>

                <Form.Item
                    name="dob"
                >
                    <DatePicker
                        style={datePicker}
                        placeholder="Date of birthday"
                        onChange={handleDate}
                    />
                </Form.Item>

                <Form.Item
                    name="gender"
                >
                    <Select
                        placeholder="Gender"
                        allowClear
                    >
                        {gender.map((value, index) => <Select.Option key={index} value={value.id}>{value.genderName}</Select.Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="city"
                >
                    <Select placeholder="City" allowClear>
                        {cities.map((value, index) => <Select.Option key={index} value={value.id}>{value.cityName}</Select.Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="address"
                >
                    <Input
                        placeholder="Address"
                    />
                </Form.Item>

                <Form.Item
                    name="mobileNumber"
                    style={{ width: '100%' }}
                >
                    <Input
                        placeholder="Mobile"
                    />
                </Form.Item>

                <Form.Item
                    name="comment"
                >
                    <TextArea
                        row={4}
                        placeholder="Comment"
                    />
                </Form.Item>
                <div style={{ display: 'flex' }}>
                    <Form.Item name="status" valuePropName="checked">
                        <Checkbox defaultChecked={true}>Status</Checkbox>
                    </Form.Item>

                    <Form.Item name="favorite" valuePropName="checked">
                        <Checkbox defaultChecked={true}>Favorite</Checkbox>
                    </Form.Item>
                </div>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default CreateUpdate
