import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { getControlByUser } from '../../services/api'

export const useControl = () => {
  
    const [ control, setControl ] = useState([])
    const [ user, setUser ] = useState([])

    const getById = async(id) =>{
        const res = await getControlByUser(id)

        //console.log(res);
        

        if(res.error) return toast.error(res.err.response.data.message || 'Error to get Control')

        setControl(res.data.data)
        setUser(res.data.user)
        //return toast.success( res.data.message)

    } 
  
    

    return {
        getById,
        control,
        user
    }
}
