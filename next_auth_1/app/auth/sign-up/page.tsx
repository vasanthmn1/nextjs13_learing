"use client"

import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

const Register = () => {

    const [userInfo, SetUserInfo] = useState({
        email: "",
        password: ""
    })
    const { email, password } = userInfo

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target
        SetUserInfo({ ...userInfo, [name]: value })

    }
    const handelSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/auth/users', {
            method: "POST",
            body: JSON.stringify(userInfo),
        }).then(res => res.json()).catch(err => console.log(err))
        console.log(res)

    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-4" >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={handleChange}
                            name='email'
                            className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            name='password'
                            onChange={handleChange}

                            className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Confirm your password"
                        />
                    </div> */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="#" className="text-blue-500 font-medium">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
