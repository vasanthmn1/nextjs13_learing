"use client"

import Link from 'next/link'
import React from 'react'

const AuthProfileMenu = () => {
    const isAuth = false

    if (isAuth) return (
        <p>
            <button>Logout</button>
        </p>
    )

    return (
        <ul>
            <li>
                <Link href={'/auth/sign-in'}>Login</Link>
            </li>
            <li>
                <Link className='bg-blue-500 text-white rounded p-3 inline-block' href={'/auth/sign-up'}>Register</Link>
            </li>
        </ul>
    )
}

export default AuthProfileMenu