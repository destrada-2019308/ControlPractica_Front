import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useLogin = () => {
  
    const navigate = useNavigate()
    const [ isLoading, setIsLoading ] = useState(false)
  
    const login = async(user) =>{
        setIsLoading(true)

        const res = await loginRequest(user)
        setIsLoading(false)

        if(res.error) return toast.error(res.error.response.data.message || 'Error to login ')

        return toast.success('Login successfully')
    }

    return {
        login,
        isLoading
  }
}
