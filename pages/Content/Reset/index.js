import Link from 'next/link'
import Header from '../../../components/Header/HeaderLogin/Header'
import 'antd/dist/antd.css'
import { Input, Button, Form, } from 'antd'
import { MailOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

export default function Login() {

    const data = {
        username: "zaan",
        email: "zanukjepara@gmail.com",
        password: "zanuk12345",
    }
    
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState('')

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        
    };
    
    return(
        <>
            <Header />
            <section class="pt-8">
                <div class="container px-6 py-8 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="w-full" alt="Phone image"/>
                        </div>
                        <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <div class="pb-4 text-center">
                                <h1 class="uppercase text-3xl font-bold">Reset Password</h1>
                                <p class="text-slate-400">Please enter your email to send a password recovery link</p>
                            </div>
                            <Form form={form} name="horizontal_login" onFinish={onFinish}>
                                <Form.Item name="email" onChange={(e) => {setEmail(e.target.value)}} rules={[{ required: true, type: "email", message: 'Please input your email!' }]}>
                                    <Input className='w-full' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>
                                <Form.Item shouldUpdate>
                                    {() => (
                                    <Button type="primary" className='w-full' htmlType="submit" disabled={ !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length}>Send Email</Button>
                                    )}
                                </Form.Item>
                                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p class="text-center font-semibold mx-4 mb-0">Back to login page? <Link href="./../../Content/Login"><a class="text-blue-700">Log In</a></Link></p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}