import React, { useState } from 'react'
import { evaluations, getControlByManager, getDataControl, getUserById } from '../../services/api'
import toast from 'react-hot-toast'

export const useEvaluations = () => {

  const [ controlUser, setControlUser ] = useState([])
  const [ isControlUser, setIsControlUser ] = useState([])
  const [ local, setLocal ] = useState([])
  const [ prueba, setPrueba ] = useState([])
  const [ user, setUser ] = useState([])

    const addEvaluations = async(eva) =>{
        const res = await evaluations(eva)
      console.log(res);
      
        if(res.error) return toast.error(res.error.response.data.message || 'Error to register Manager')
          setPrueba(res.data.result)
        return toast.success('Evaluations successfully')
    }

    const getControlByManage = async(control) =>{
        const res = await getControlByManager(control)
        //console.log(res.data.data[0].codeUser);
        //console.log(res.data.data);
        
        if(res.error) return toast.error(res.err.response.data.message || 'Error to get Control')
        setLocal(res.data.data[0].codeUser)
        setControlUser(res.data.data)
    }

    const getControl = async() =>{
        const res = await getDataControl()
        //console.log(res);
        
        if(res.error) return toast.error(res.err.response.data.message || 'Error to get Control')
          
          setIsControlUser(res.data.data)
    }

    const getUser = async(id) =>{
      //console.log('Id: ',id);
      
        const res = await getUserById(id)

        //console.log(res);
    

          setUser(res.data.user)
        
    }

  return {
    addEvaluations,
    getControlByManage,
    controlUser,
    getControl,
    isControlUser,
    getUser,
    user,
    local,
    prueba
  }
}
