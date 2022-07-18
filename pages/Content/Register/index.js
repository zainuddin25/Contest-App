import Link from 'next/link'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import Header from '../../../components/Header/HeaderLogin/Header'
import 'antd/dist/antd.css'
import { Button, Form, Input } from 'antd';
import React from 'react';

export default function Register() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                            <div class="pb-8 text-center">
                                <h1 class="uppercase text-3xl font-bold tracking-widest">Registration</h1>
                                <p class="text-slate-400">Please enter your appropriate data, email and password will be used when you logout and login. And don't forget</p>
                            </div>
                            <Form name="normal_login" className="login-form" onFinish={onFinish}>
                                <Form.Item
                                    name="username" rules={[{ required: true, type: "email", message: 'Please input your Username!' }]}>
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="email" rules={[{ required: true, type: "text", message: 'Please input your Username!' }]}>
                                    <Input prefix={ <MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>
                                <div class="flex">
                                    <div class="mb-6 w-2/4 pr-1">
                                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                                        </Form.Item>
                                    </div>
                                    <div class="mb-6 w-2/4 pr-1">
                                        <Form.Item name="repeat_password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                                        </Form.Item>
                                    </div>
                                </div>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="inline-block px-7 py-3 font-medium text-sm rounded shadow-md w-full">Sign Up</Button>
                                    <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                        <p class="text-center font-semibold mx-4 mb-0">Already have an account? <Link href="./../../Content/Login"><a class="text-blue-700">Log In</a></Link></p>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}