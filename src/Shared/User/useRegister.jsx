import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {registerRequest} from '../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {

  const [ loading, setLoading ] = useState(false)

  const register = async(user) =>{
    setLoading(true)

    const res = await registerRequest(user)
    setLoading(false)

    if(res.error) return toast.error(res.error.response.data.message || 'Error to Register user')


    return toast.success('User registered successfully')

  } 

  return {
    register,
    loading
  }
}
