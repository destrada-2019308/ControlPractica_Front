import { useState } from 'react'
import { addManager, getUser } from '../../services/api'
import toast from 'react-hot-toast'

export const useAddManager = () => {

    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState([])

    const addManagerAdmin = async(data) =>{
        setLoading(true)

        const res = await addManager(data)
        setLoading(false)
        
        if(res.error) return toast.error(res.error.response.data.message || 'Error to register Manager')
    
        return toast.success('Manager registered successfully')
    }

    const getUsers = async() =>{
        const res = await getUser()

        if(res.error) return toast.error(res.err.response.data.message || 'Error to get Control')
        console.log(res);
        
        setUser(res.data.users)

    }

  return {
    addManagerAdmin,
    getUsers,
    user
  }
}
