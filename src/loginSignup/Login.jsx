import React from 'react';
import login from '../assets/login.png'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'
import ImageDisplayer from './ImageDisplayer';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
const schema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email("please enter valid format of email"),
    password: z.string().min(1, { message: "Password is required" }),
    Role: z.string().min(1, {message: "Role is required"})
})
const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema)
    })

    const submitHandle = (formData) => {
        console.log(formData)
    }

    const navigate = useNavigate();
    const goToSignup = () => {
        navigate('/signUp')
    }
    return (
        <div className="flex flex-col-reverse md:flex-row ">
            {/* Image Part */}
            <ImageDisplayer login={login} />
            {/* Login Part */}
            <div className="md:w-1/2 h-screen bg-emerald-50 flex flex-col justify-center px-6 py-8">
                <div className="text-center mb-4 md:mb-8">
                    <img className="w-[90px] h-[70px] inline-block mr-2" src={logo} alt="logo" />
                    <span className="text-2xl font-semibold">AAMS</span>
                </div>
                <div className="w-full rounded-lg shadow sm:max-w-md xl:p-0 mx-auto">
                    <div className="p-6 md:space-y-4 sm:p-8">
                        <h1 className="text-xl font-bold md:text-2xl text-center mb-6">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit(submitHandle)} className="space-y-2 md:space-y-4">
                            {/* <label htmlFor="Roles" className="block mb-2 text-sm font-medium ">Select Role</label> */}
                            <select id="Roles" className="bg-gray-50 border border-blur-e00  text-sm rounded-lg  block w-full p-2" {...register("Role")}>
                                <option value="">Select a role</option>
                                <option value="teacher" >Teacher</option>
                                <option value="student">Student</option>
                            </select>
                            {errors.Role && (<p className="text-red-400">{errors.Role.message}</p>)}

                            {/* <div className="flex justify-evenly">
                                <div className="flex items-center w-[8rem] ps-2 border-2 border-blue-500 rounded-lg hover:bg-fuchsia-100">
                                    <input id="roleStudent" type="radio" {...register('student-role')} className="w-4 h-4  " {...register("Role")}/>
                                    <label htmlFor="roleStudent" className="w-full py-2 ms-2 text-sm font-medium">Student</label>
                                </div>
                                <div className="flex items-center w-[8rem] ps-4 border-2 border-blue-500 rounded-lg hover:bg-fuchsia-100">
                                    <input id="roleTeacher" type="radio" {...register('teacher-role')} className="w-4 h-4" />
                                    <label htmlFor="roleTeacher" className="w-full py-2 ms-2 text-sm font-medium ">Teacher</label>
                                </div>
                            </div> */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" {...register('email',)} id="email" className="border border-blue-500 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="name@acem.edu.np" />
                                {errors.email && (<p className="text-red-400">{errors.email.message}</p>)}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                <input type="password" {...register('password',)} id="password" placeholder="Enter password" className="border border-blue-500 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" />
                                {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-blue-500 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600" />
                                    <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
                                </div>
                                <Link href="#" className="text-sm text-blue-500 font-medium hover:underline">Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full bg-cyan-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">Sign in</button>
                            <p className="text-sm font-light text-center mt-4">
                                Don’t have an account yet?<button onClick={() => { goToSignup() }} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm mx-3 px-5 py-2 text-center me-2 mb-2">Signup</button>
                            </p>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
