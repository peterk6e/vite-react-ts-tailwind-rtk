import React from 'react'
import { User } from '../models/models'
import { useSelector } from 'react-redux'

export const UserInfo = () => {
  const user:User = useSelector((state:any) => state.value)
  
    return (
    <div className='text-blue-500'>
        <div>{user.email}</div>t
        <div>{user.password}</div>
    </div>
  )
}
