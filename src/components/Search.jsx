import React, { useState } from 'react'
import { Form, Radio, Input, Button, DatePicker, Select, } from 'antd';

const Search = () => {
    const [radio, setRadio] = useState(0)

    const radioStyle = {
        fontFamily: 'sylfaen',
        height: '22px',
        lineHeight: '30px',
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

    const onChange = e => {
        setRadio(e.target.value)
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="search-container">
            <Radio.Group onChange={onChange} value={radio}>
                <Radio style={radioStyle} value={0}>სწრაფი ძიება</Radio>
                <Radio style={radioStyle} value={1}>გაფართოებული ძიება</Radio>
            </Radio.Group>
            <div className="search-fields">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    {radio
                        ?
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
                        : <div>
                            <Form.Item
                                name="name"
                            >
                                <Input placeholder="სახელი ან გვარი" />
                            </Form.Item>
                        </div>
                    }
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            ძიება
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Search