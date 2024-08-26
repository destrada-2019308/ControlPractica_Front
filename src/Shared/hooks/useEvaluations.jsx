import React from 'react'
import { evaluations } from '../../services/api'
import toast from 'react-hot-toast'

export const useEvaluations = () => {

    const addEvaluations = async(eva) =>{
        const res = await evaluations(eva)
      console.log(res);
      
        if(res.error) return toast.error(res.error.response.data.message || 'Error to register Manager')

        return toast.success('Evaluations successfully')
    }

  return {
    addEvaluations
  }
}
