import React, { useState } from 'react'
import { getAllCareer, sendCareer, updateCareer } from '../../../services/api'
import toast from 'react-hot-toast'

export const useCareer = () => {

    const [ career, setCareer ] = useState([])

    const add = async (params) => {
        const res = await sendCareer(params)
        if(res.error) return toast.error(res.error.response.data.message || 'Error al agregar el dato')
        toast.success('Carrera agregada')
    }

    const get = async ( ) => {
        const res = await getAllCareer()
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener datos')
        setCareer(res.data.get)
    }

    const update = async (params, id) => {
        const res = await updateCareer(params, id)
        if(res.error) return toast.error(res.error.response.data.message || 'Error al actualizar el dato')
        
        toast.success('Carrera actualizada')
    }

  return {
    add,
    get,
    update,
    career
  }
}
