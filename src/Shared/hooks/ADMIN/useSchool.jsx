import toast from "react-hot-toast"
import { getAllSchool, sendSchool, updateSchool } from "../../../services/api"
import { useState } from "react"

export const useSchool = () => {

    const [ school, setSchool ] = useState([])

    const getSchool = async ( ) => {
        const res = await getAllSchool()
        //console.log(res);
        //console.log(res.data.get);
        
        
        if(res.error) return toast.error(res.error.response.data.message || 'Error al obtener colegios')
        
            setSchool(res.data.get)
        //console.log(school);
        return res.data.get
    }

    const addSchool = async (params) => {
        const res = await sendSchool(params)
        
        if(res.error) return toast.error(res.error.response.data.message || 'Error al agregar un colegio')
    
        toast.success('Colegio agregado')
        return getSchool()
    }

    

    const updatedSchool = async(params, id ) =>{
        console.log(params, id);
        
        const res = await updateSchool(params, id)

        console.log(res);
        

        if(res.error) return toast.error(res.error.response.data.message || 'Erro al actualizar')
        
        toast.success('School updated successfully')
        return getSchool()
    }

  return {
    addSchool,
    getSchool,
    updatedSchool,
    school
  }
}
