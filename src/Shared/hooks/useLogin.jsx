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

        console.log(res);

        if(res.error) return toast.error(res.error.response.data.message || 'Error to login ')

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.userLogged))

        navigate('/home/prCtrl')

        return toast.success(res.data.message)
    }

    const logout = () =>{
        localStorage.clear()
        navigate('/')
    }

    return {
        login,
        isLoading,
        logout
  }
}
