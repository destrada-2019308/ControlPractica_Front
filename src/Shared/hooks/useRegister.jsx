import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {registerRequest, getUser, updateUser} from '../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {

  const [ loading, setLoading ] = useState(false)
  const [ user, setUser ] = useState([])

  const register = async(user) =>{
    setLoading(true)

    const res = await registerRequest(user)
    setLoading(false)

    if(res.error) return toast.error(res.error.response.data.error || 'Error to Register user')


    return toast.success('User registered successfully')

  } 

  const getUsers = async() =>{
    const res = await getUser();
    //console.log(res);
    
    if(res.error) return toast.error(res.error.response.data.message || 'Error')

      setUser(res.data.data)
}

  const updatedUser = async(user, id) =>{
    const res = await updateUser(user, id)

    if(res.error) return toast.error(res.error.response.data.message || 'Error')

    return toast.success('User updated sucess')

  }


  return {
    register,
    loading,
    getUsers,
    user,
    updatedUser
  }
}
