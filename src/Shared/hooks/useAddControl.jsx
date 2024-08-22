import React, { useState } from 'react'
import { addControlRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useAddControl = () => {

    const [ loading, setLoading ] = useState(false)

    const registerControler = async(control) =>{
        setLoading(true)

        const res = await addControlRequest(control)
        setLoading(false)

        if(res.error) return toast.error(res.error.response.data.message || 'Erro to register')

        return toast.success('Control registered successfully')

    }

  return {
    registerControler,
    loading
  }
}
