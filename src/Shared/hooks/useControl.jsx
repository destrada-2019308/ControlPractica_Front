import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { getControlByUser, getPracticingById } from '../../services/api'

export const useControl = () => {
  
    const [ control, setControl ] = useState([])
    const [ user, setUser ] = useState([])
    const [ practicing, setPracticing] = useState([])
    

    const getById = async(id) =>{
        const res = await getControlByUser(id)

        console.log(res);

        if(res.error) return toast.error(res.err.response.data.message || 'Error to get Control')

        setControl(res.data.data)
        setUser(res.data.user)
        
        //console.log(res);
        

        //console.log(control);
        
        //return toast.success( res.data.message)

    } 

    const getPracticing = async(id) =>{
        const res = await getPracticingById(id)
        console.log(res);
        
        console.log('Practicante',res.data.practicing["codePracticante"]);

        if(res.error) return toast.error(res.error.response.data.message || 'Error ')


        setPracticing(res.data.practicing["codePracticante"])

    }
  
    

    return {
        getById,
        control,
        user,
        getPracticing,
        practicing
    }
}
