import { useState } from "react"
import { addPracticing, getManager } from "../../services/api"
import toast from "react-hot-toast"

export const useProfile = () => {
    
    const [ loading, setLoading ] = useState(false)
    const [ isManager, setIsManager ] = useState([])

    const addProfile = async(prof) =>{
        setLoading(true)

        const res = await addPracticing(prof)
        setLoading(false)

        if(res.error) return toast.error(res.error.response.data.message || 'Error to register user')

        return toast.success('User registeres successful')
    }
  
    const getManagers = async() =>{
        const res = await getManager()
        console.log(res);
        
        setIsManager(res.data.manager)
    }

    return {
        addProfile,
        getManagers,
        isManager
  }
}
