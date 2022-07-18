import Link from 'next/link'
import Header from '../../../components/Header/HeaderLogin/Header'
import 'antd/dist/antd.css'
import { Input, Button, Form } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Login() {

    const account = {
        username: "zaan",
        password: "zanuk12345"
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        // if(values.username === account.username) {
        //     if(values.password === account.password) {
        //         alert("Welcome")
        //     }else{
        //         alert("gagal")
        //     }
        // }else{
        //     alert("gagal")
        // }
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
                                <h1 class="uppercase text-3xl font-bold tracking-widest">Welcome</h1>
                                <p class="text-slate-400">Please enter your email and password. Make sure what is entered is the same as when registering</p>
                            </div>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                >
                                <Form.Item
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    ]}
                                >
                                    <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <div className='flex float-left font-semibold'>
                                        <p>Don't have an account yet?</p>
                                        <Link href="./../../Content/Register">
                                            <a className="pl-2 text-blue-700 login-form-forgot">
                                                Register Now
                                            </a>
                                        </Link>
                                    </div>
                                    <Link href="./../../Content/Reset">
                                        <a className="float-right font-semibold text-blue-700 login-form-forgot">
                                            Forgot password?
                                        </a>
                                    </Link>
                                </Form.Item>

                                <Form.Item>
                                    <Button 
                                    type="primary" 
                                    htmlType="submit"
                                    className="inline-block w-full text-sm rounded shadow-md">
                                        Log in
                                    </Button>
                                </Form.Item>
                                </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}