import React, { useState } from 'react'
import {getUsers, registerRequest} from '../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {

  const [ loading, setLoading ] = useState(false)
  const [ user, setUser ] = useState([])
 
  const getUser = async () => {
      const res = await getUsers()

      if(res.error) return toast.error(res.error.response.data.error || 'Error to get user')

      setUser(res.data.data)
      return res.data.data

  }


  const register = async(user) =>{
    setLoading(true)

    const res = await registerRequest(user)
    setLoading(false)

    if(res.error) return toast.error(res.error.response.data.error || 'Error to Register user')


    toast.success('User registered successfully')
    return getUser()

  } 
 

  return {
    register,
    loading,  
    user, 
    getUser
  }
}
