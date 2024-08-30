import React, { useState } from 'react'
import {registerRequest, getUser, updateUser} from '../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {

  const [ loading, setLoading ] = useState(false)
  const [ user, setUser ] = useState([])

  const getUsers = async() =>{
    const res = await getUser();
    //console.log(res);
    
    if(res.error) return toast.error(res.error.response.data.message || 'Error')

      setUser(res.data.data)
      console.log(res.data.data);
      
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

  

  const updatedUser = async(user, id) =>{
    const res = await updateUser(user, id)

    if(res.error) return toast.error(res.error.response.data.message || 'Error')

   toast.success('User updated sucess')
   return getUser()

  }


  return {
    register,
    loading,
    getUsers,
    user,
    updatedUser
  }
}
