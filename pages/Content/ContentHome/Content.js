import Link from 'next/link'
import Image from 'next/image'
import tutorial from "./../../../public/img/tutorial.png"
import { Card, Button, Form, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

export default function Content() {

    const [activeTabKey2, setActiveTabKey2] = useState('tutor1');

    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };

    const tabListNoTitle = [
      {
        key: 'tutor1',
        tab: 'How To Registration',
      },
    ];

    const contentListNoTitle = {
      tutor1: 
      <>
        <div class="flex lg:flex-row sm:flex-col">
            <div class="lg:w-2/4 sm:w-full">
                <Image src={tutorial}/>
            </div>
            <div class="lg:w-2/4 sm:w-full lg:pt-0 sm:pt-3 px-5">
                <h1 class="font-bold text-xl text-center">How To Join</h1>
                <span>1. Click the login button Login.</span> <br/>
                <span>2. Enter the requested data.</span> <br/>
                <span>3. If you don't have an account. Please press register now.</span> <br/>
                <span>4. Enter your data and don't forget!.</span> <br/>
                <span>5. When you forget your password, please enter the forgot password page by pressing forgot password.</span> <br/>
                <span>6. Enter the recovery email, you will be sent a link and press the link to continue registration.</span> <br/>
            </div>
        </div>
      </>,
    };

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  
    useEffect(() => {
      forceUpdate({});
    }, []);
  
    const onFinish = (values) => {
      console.log('Finish:', values);
    };



    return(
        <>
            {/* Hero Section */}
            <div class="w-full h-screen flex justify-center items-center" id="home">
                <div class="container flex flex-col justify-center items-center">
                    <h1 class="font-bold text-5xl tracking-widest sm:text-4xl">WELCOME</h1>
                    <p class="text-sm sm:w-3/4 lg:w-2/4 text-center py-5">
                        <span class="text-primary">Just Contest </span> 
                        is a contest website that has many contests that have high nominal prizes. followed by 
                        many users and the number of contests in one day is the advantage of our website. the ease
                        of participating in a contest makes the contestants or users on our website happy. 
                        Start freelance by taking part in the contests that we provide on our website. only 
                        with a signal and your creativity can make money
                    </p>
                    <Link href="/">
                        <a class="text-teal-500 border rounded-xl border-teal-500 py-2 px-5 font-semibold hover:text-white hover:bg-teal-500">Search Contest</a>
                    </Link>
                </div>
            </div>
            {/* End Hero Section */}

            {/* About Section */}

            <div class="w-full lg:h-screen bg-slate-50 flex justify-center items-center flex-col sm:h-full sm:pt-12" id="about">
                <p class="text-sm uppercase font-bold py-4 text-teal-500">- About -</p>
                <p class="sm:w-3/4 lg:w-2/4 text-center py-4">
                    Developed in 2022. To date we have 100 users, and 100 total contests. We also provide many facilities, including being able to multi-user or being able to create multiple accounts with one device. Multi content, each contestant can submit and participate in more than one contest thereby increasing your chances of getting prizes from our contests. Portfolio, if you win one of the available contests, it will be entered into your profile and can be used for your portfolio
                </p>
                <div class="flex lg:flex-row mt-3 sm:px-12 lg:px-48 w-full justify-center sm:flex-col sm:pb-20">
                    <div class="rounded-xl border px-10 py-4 sm:w-72 sm:mx-auto lg:w-56 lg:mr-2">
                        <div class="px-6 py-2">
                            <div>
                                <h1 class="text-4xl w-auto text-center"><i class="fa-solid fa-circle-user py-6 px-6 bg-teal-500 text-white rounded-full"></i></h1>
                            </div>
                        </div>
                        <h2 class="text-xl text-center font-semibold pt-2">Multiple User</h2>
                        <p class="text-base text-center font-light pt-2">One user can create more than one account</p>
                    </div>
                    <div class="rounded-xl border px-10 py-4 sm:w-72 sm:mx-auto lg:w-56 lg:mx-2 lg:my-0 sm:my-4">
                        <div class="px-6 py-2">
                            <div>
                                <h1 class="text-4xl w-auto text-center"><i class="fa-solid fa-medal py-6 px-6 bg-teal-500 text-white rounded-full"></i></h1>
                            </div>
                        </div>
                        <h2 class="text-xl text-center font-semibold pt-2">Multi Contest</h2>
                        <p class="text-base text-center font-light pt-2">One user can participate in many contests</p>
                    </div>
                    <div class="rounded-xl border px-10 py-4 sm:w-72 lg:w-56 lg:ml-2 sm:mx-auto">
                        <div class="px-6 py-2">
                            <div>
                                <h1 class="text-4xl w-auto text-center"><i class="fa-solid fa-address-card py-6 px-[22px] bg-teal-500 text-white rounded-full"></i></h1>
                            </div>
                        </div>
                        <h2 class="text-xl text-center font-semibold pt-2">Portfolio</h2>
                        <p class="text-base text-center font-light pt-2">User can create a portfolio on this website</p>
                    </div>
                </div>
            </div>

            {/* End About Section */}

            {/* Tutorial Section */}
            
            <div class="w-full lg:px-48 sm:px-12 lg:h-screen sm:h-auto mx-full pt-[80px] z-0 sm:pb-20" id="tutorial">
                <h1 class="text-sm uppercase font-bold py-4 text-teal-500 text-center mb-6">- How To Join -</h1>
                <Card style={{ width: '100%' }} tabList={tabListNoTitle} activeTabKey={activeTabKey2} tabBarExtraContent={<a href="#">More</a>} onTabChange={(key) => { onTab2Change(key) }}>
                    {contentListNoTitle[activeTabKey2]}
                </Card>
            </div>

            {/* End Tutorial Section */}
            
            {/* Contact Us */}
            <div class="w-full lg:h-screen sm:h-full bg-slate-50 pt-[80px]" id="contact">
                <h1 class="text-sm uppercase font-bold py-4 text-teal-500 text-center mb-6 mx-auto">- Contact Us -</h1>
                <div class="flex lg:px-48 sm:px-10 lg:flex-row sm:flex-col">
                    <div class="lg:w-2/4 sm:w-5/6 px-8 py-4">
                        <p class="lg:w-3/4 sm:w-full font-base text-slate-600">Contact us when you have trouble or a comment, your suggestions and comments mean a lot to us</p>
                        <h1 class="text-lg pt-2">Cs Admin</h1>
                        <div class="pl-6">
                            <p class="text-sm font-semibold"><i class="fa-solid fa-phone pr-1"></i> +62 8515 6970 093</p>
                            <p class="text-sm font-semibold"><i class="fa-solid fa-envelope pr-2"></i> justcontest@gmail.com</p>
                            <p class="text-sm font-semibold"><i class="fa-solid fa-location-dot pr-2"></i> Indonesia, Central Java</p>
                        </div>
                        <h1 class="text-lg pt-2">Follow US</h1>
                        <div class="pl-6">
                            <Link href="https://facebook.com">
                                <a target="_blank" class="text-slate-900 lg:text-4xl sm:text-xl hover:text-slate-600"><i class="fa-brands fa-facebook-f"></i></a>
                            </Link>
                            <Link href="https://instagram.com">
                                <a target="_blank" class="text-slate-900 lg:text-4xl sm:text-xl hover:text-slate-600 pl-4"><i class="fa-brands fa-instagram"></i></a>
                            </Link>
                            <Link href="https://twitter.com">
                                <a target="_blank" class="text-slate-900 lg:text-4xl sm:text-xl hover:text-slate-600 pl-4"><i class="fa-brands fa-twitter"></i></a>
                            </Link>
                        </div>
                    </div>
                    <div class="lg:w-2/4 sm:w-full">
                        <div class="w-full h-full py-7">
                        <Form form={form} name="horizontal_login" onFinish={onFinish}>
                            <div class="w-full flex">
                                <div class="w-2/4 pr-1">
                                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" autoComplete='off' />
                                    </Form.Item>
                                </div>
                                <div class="w-2/4 pl-1">
                                    <Form.Item name="email" rules={[{ required: true, type: "email", message: 'Please input your email!' }]}>
                                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email Addres" autoComplete='off'/>
                                    </Form.Item>
                                </div>
                            </div>
                            <Form.Item name="message">
                                <Input.TextArea class="h-40 w-full px-4 py-2" showCount maxLength={300} />
                            </Form.Item>
                            <Form.Item shouldUpdate>
                                {() => (
                                <Button type="primary" className="float-right w-1/4" htmlType="submit" disabled={ !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length }>Submit</Button>
                                )}
                            </Form.Item>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Us */}
        </>
    )
}