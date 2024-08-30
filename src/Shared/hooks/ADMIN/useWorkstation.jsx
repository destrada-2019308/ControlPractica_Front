import { useState } from "react"
import { getAllWorkstation, sendWorkstation, updateWorkstation } from "../../../services/api"
import toast from "react-hot-toast"


export const useWorkstation = () => {

    const [ work, setWork ] = useState([])

    const getWorkstation = async ( ) => {
        const res = await getAllWorkstation()
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')
    
        setWork(res.data.get)
        return res.data.get
    }

    const addWorkstation = async (params) => {
        const res = await sendWorkstation(params)
        console.log(res);
        
        if(res.error) return toast.error(res.error.response.data.message || 'Error al agregar el dato')
        
        toast.success('Puesto de trabajo agreado')
        return getWorkstation()
    }

    const updatedWorkstation = async (params, id) => {
        const res = await updateWorkstation(params, id)

        if(res.error) return toast.error(res.error.response.data.message || 'Error al actualizar el dato')

        toast.success('Dato actualizads correctamente')
        return getWorkstation()
    }

  return {
    addWorkstation, 
    getWorkstation,
    updatedWorkstation, 
    work
  }
}
