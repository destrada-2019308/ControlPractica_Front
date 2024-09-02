import { useState } from "react"
import { getAllPracticing, getAllUserPracticing, sendPracticing, updatePracticing } from "../../../services/api"
import toast from "react-hot-toast"

export const usePracticing = () => {

    const [ practicing, setPracticing ] = useState([])
    const [ userPracticing, setUserPracticing ] = useState([])

    const getPracticing = async ( ) => {
        const res = await getAllPracticing()
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')
        setPracticing(res.data.get)
        return res.data.get
    }

    const addPracticing = async (params) => {
        const res = await sendPracticing(params)
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')
        toast.success('Practicante agregado correctamente')
        return getPracticing()
    }

    const updatedPracticing = async (params, id) => {
        const res = await updatePracticing(params, id)
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')
        toast.success('Practicante actualizado')
        return getPracticing()
    }

    const getUserPracticing = async ( ) => {
        const res = await getAllUserPracticing()
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')
        setUserPracticing(res.data.get)
        return res.data.get
    }

  return {
    getPracticing,
    addPracticing,
    updatedPracticing,
    getUserPracticing,
    practicing,
    userPracticing
  }
}
