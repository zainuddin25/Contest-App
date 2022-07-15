import Link from 'next/link'
import Header from '../../../components/Header/HeaderLogin/Header'
import 'antd/dist/antd.css'
import { Input } from 'antd'

export default function Login() {
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
                                <h1 class="uppercase text-3xl font-bold tracking-widest">Welcome</h1>
                                <p class="text-slate-400">Please enter your email and password. Make sure what is entered is the same as when registering</p>
                            </div>
                            <form>
                                <div class="mb-6">
                                    <input type="email" class="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required placeholder="Input your email here!"/>
                                </div>
                                <div class="mb-6">
                                    <Input.Password class="block w-full p-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Input your password here!" required />
                                </div>
                                <div class="flex justify-between items-center mb-6">
                                    <div class="form-group form-check">
                                        <Link href="./../../Content/Register"><a class="text-blue-700">Register Now</a></Link>
                                    </div>
                                    <Link href="./../../Content/Reset">
                                        <a class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>
                                    </Link>
                                </div>
                                <button type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">Log in</button>
                                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p class="text-center font-semibold mx-4 mb-0">Don't have an account yet? <Link href="./../../Content/Register"><a class="text-blue-700">Register Now</a></Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}