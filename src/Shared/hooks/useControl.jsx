import { useState } from 'react'
import toast from 'react-hot-toast'
import { getControlByUser, sendControl, getPracticingByUser, getAllData, evaluations, getHistorial } from '../../services/api'

export const useControl = () => {
   
    const [ control , setControl ] = useState([])
    const [ practicing, setPracticing ] = useState([])
    const [ practicId, setPracticingId ] = useState([])
    const [ allData, setAllData ] = useState([])
    
    const getPracticingByUsers = async (params) => {
        const res = await getPracticingByUser(params)
        let pruebaUser
        setPracticing(res.data.get)
        setPracticingId(res.data.practicingId) 
        pruebaUser = res.data.practicingId
        localStorage.setItem('practicing', res.data.practicingId)
    }

    const getControl = async(id) =>{
        const res = await getControlByUser(id)
         
        
        if(res.error) return toast.error(res.error.response.data.message || 'Carga un practicante')
        
        setControl(res.data.get) 
        return res.data.get
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

    const evaluationPracticing = async (params, id) => {
        
        const res = await evaluations(params, id)

        toast.success(`Control actualizado correctamente`)
        return getControl(id)
    }
    
    const historial = async (id) => {
        const res = await getHistorial(id, { responseType: 'blob'})
        
        const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
             
            const link = document.createElement('a');
            link.href = url;
            link.download = `historial_${id}.pdf`;  
            document.body.appendChild(link);
            link.click() 
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

        toast.success(`Historial descargado `)
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
        evaluationPracticing,
        historial
    }
}
