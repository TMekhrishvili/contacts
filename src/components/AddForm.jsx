import React from 'react'
import { Form, Modal, Input, DatePicker, Select, } from 'antd';

const AddForm = ({ isModalVisible, handleOk }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const datePicker = {
        width: '100%',
    }

    const cities = [
        "თბილისი",
        "ქუთაისი",
        "ბორჯომი",
        "რუსთავი",
        "ფოთი",
        "ბათუმი",
        "თელავი",
        "ზუგდიდი",
        "სხვა"
    ]
    return (
        <Modal
            title="Basic Modal"
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
                        <Input placeholder="სახელი" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                    >
                        <Input placeholder="გვარი" />
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
                            {cities.map((value, index) => <Select.Option key={index} value={index}>{value}</Select.Option>)}
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
