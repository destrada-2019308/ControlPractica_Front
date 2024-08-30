import { useState } from "react"
import { getAllSupervisor, getAllUserSupervisor, sendSupervisor, updateSupervisor } from "../../../services/api"
import toast from "react-hot-toast"

export const useSupervisor = () => {

    const [ supervisor, setSupervisor ] = useState([])
    const [ userSupervisor, setUserSupervisor ] = useState([])

    const getSupervisor = async ( ) => {
        const res = await getAllSupervisor()

        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')

        setSupervisor(res.data.get)
        return res.data.get
    }

    const addSupervisor = async (params) => {
        const res = await sendSupervisor(params)
        console.log(res);
        
        if(res.error) return toast.error(res.error.response.data.message || 'Error agregar')
        
        toast.success('Supervisor agregado correctamente')
        return getSupervisor()
    }

    const updatedSupervisor = async (params, id) => {
        const res = await updateSupervisor(params, id)
        
        if(res.error) return toast.error(res.error.response.data.message || 'Error al actualizar')
        toast.success('Supervisor agregado correctamente')
        return getSupervisor()
    }

    const getUserSupervisor = async ( ) => {
      const res = await getAllUserSupervisor()
      if(res.error) return toast.error(res.error.response.data.message || 'Error al actualizar')
        setUserSupervisor(res.data.get)
      return res.data.get
    }

  return {
    getSupervisor,
    addSupervisor,
    updatedSupervisor,
    getUserSupervisor,
    supervisor,
    userSupervisor
  }
}
