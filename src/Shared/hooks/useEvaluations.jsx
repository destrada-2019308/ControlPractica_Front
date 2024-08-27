import React, { useState } from 'react'
import { evaluations, getAllDataControl, getControlByManager, getDataControl, getUserById } from '../../services/api'
import toast from 'react-hot-toast'

export const useEvaluations = () => {

  const [ controlUser, setControlUser ] = useState([])
  const [ isControlUser, setIsControlUser ] = useState([])
  const [ local, setLocal ] = useState([])
  const [ prueba, setPrueba ] = useState([])
  const [ isUser, setIsUser ] = useState([])
  const [ user, setUser ] = useState([])

    const addEvaluations = async(eva) =>{
        const res = await evaluations(eva)
        console.log(res);
      
        if(res.error) return toast.error(res.error.response.data.message || 'Error to register Manager')
          setPrueba(res.data.result)
        return toast.success('Evaluations successfully')
    }

    const getAllData = async(id) => {
        const res = await getAllDataControl(id)
        console.log(res)
        
        if (res.error) return toast.error(res.error.response.data.message || 'Error')
          setUser(res.data.data)
        
    }

    const getUserByIdManager = async(id) =>{
      const res = await getUserById(id)
      console.log(res);
      
      setIsUser(res.data.user.name)
}

      const getControlByManage = async(control) =>{
        const res = await getControlByManager(control);
        
        const updatedControlUsers = await Promise.all(res.data.data.map(async element => {
            const idUser = element.codeUser;
            const userRes = await getUserById(idUser);
            const userName = userRes.data.user.name;
            return {
                ...element,
                userName: userName 
            };
        }));

        if(res.error) return toast.error(res.err.response.data.message || 'Error to get Control');

        setControlUser(updatedControlUsers);
      }


    const getControl = async() =>{
        const res = await getDataControl()
        //console.log(res);
        
        if(res.error) return toast.error(res.err.response.data.message || 'Error to get Control')
          
          setIsControlUser(res.data.data)
    }

  return {
    addEvaluations,
    getControlByManage,
    controlUser,
    getControl,
    isControlUser,
    local,
    prueba,
    isUser,
    getAllData,
    user
  }
}
