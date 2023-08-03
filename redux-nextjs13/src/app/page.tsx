'use client'

import Login from '@/components/Login'
import { useAppSelector } from '@/redux/store/Store'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export default function Home() {
  const userdata = useAppSelector((state) => state.authSlice.value)
  const { username, isModerator } = useAppSelector((state) => state.authSlice.value)

  return (
    <div className='flex min-h-max items-center justify-between flex-col text-rose-600'>
      <Login />
      <h1>username {username}</h1>
      <p>{JSON.stringify(userdata)}</p>
      {
        isModerator && <h1>This user isModerator</h1>
      }
    </div>
  )
}
