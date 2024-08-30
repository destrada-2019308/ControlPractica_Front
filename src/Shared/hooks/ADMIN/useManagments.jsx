import { useState } from "react"
import { getAllManagments, sendManagments, updateManagments } from "../../../services/api"
import toast from "react-hot-toast"


export const useManagments = () => {

    const [ status, setStatus ] = useState([])

    const getManagments = async ( ) => {
        const res = await getAllManagments()
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')
        
        setStatus(res.data.get)
        return res.data.get
    }

    const addManagments = async (params) => {
        const res = await sendManagments(params)

        if(res.error) return toast.error(res.error.response.data.message || 'Error al agregar un manager')
        
        toast.success('Datos agregados')
        return getManagments()
    }

    const updatedManagments = async (params, id) => {
        const res = await updateManagments(params, id)

        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')

        toast.success('Manager actualizado')
        return getManagments()
    }

  return {
    getManagments, addManagments, updatedManagments, status
  }
}
