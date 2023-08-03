'use client'

import { login, loginOut, toogleModerator } from "@/redux/features/authSlice"
import { AppDispatch, useAppSelector } from "@/redux/store/Store"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Login = () => {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const { isAuth } = useAppSelector((state) => state.authSlice.value)

    const handleLogin = () => {
        dispatch(login(username))
    }
    const handleLogout = () => {
        dispatch(loginOut())
    }
    const onClickToggle = () => {

        dispatch(toogleModerator())
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >logout</button>
            {
                isAuth && <button onClick={onClickToggle} >Togle Moderator</button>
            }



        </div>
    )
}

export default Login