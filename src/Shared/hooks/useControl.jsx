import { useState } from 'react'
import toast from 'react-hot-toast'
import { getControlByUser, sendControl, getPracticingByUser, getAllData } from '../../services/api'

export const useControl = () => {
   
    const [ control , setControl ] = useState([])
    const [ practicing, setPracticing ] = useState([])
    const [ practicId, setPracticingId ] = useState([])
    const [ allData, setAllData ] = useState([])
    let pruebaUser = 0
    
    const getPracticingByUsers = async (params) => {
        const res = await getPracticingByUser(params)
        
        setPracticing(res.data.get)
        setPracticingId(res.data.practicingId) 
        pruebaUser = res.data.practicingId
        localStorage.setItem('practicing', res.data.practicingId)
    }

    const getControl = async(id) =>{
        const res = await getControlByUser(id)
         
        
        if(res.error) return toast.error(res.error.response.data.message || 'Error to get control')
        
        setControl(res.data.get) 
    } 


    const addControl = async (params) => {
        const res = await sendControl(params)
        if(res.error) return toast.error(res.error.response.data.message || 'Error to Register control')
        
        toast.success('Control agregado correctamente')
        
    }

    const getAll = async (params) => {
        const res = await getAllData(params)
       
        
        setAllData(res.data.get)
        return res.data.get
    }

    return { 
        getControl,
        control,
        addControl,
        getPracticingByUsers, 
        practicing,
        practicId,
        getAll,
        allData, 
    }
}
