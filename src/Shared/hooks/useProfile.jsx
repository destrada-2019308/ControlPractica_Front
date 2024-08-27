import { useState } from "react"
import { addPracticing, getManager, getUser } from "../../services/api"
import toast from "react-hot-toast"

export const useProfile = () => {
    
    const [ loading, setLoading ] = useState(false)
    const [ isManager, setIsManager ] = useState([])
    const [ user, setUser ] = useState([])

    const addProfile = async(prof) =>{
        setLoading(true)

        const res = await addPracticing(prof)
        setLoading(false)

        console.log(res.error);
        
        if(res.error){
            return toast.error(res.error.response.data.error || 'Error al asdasdasdsad')
        }
        return toast.success('User registeres successful')
    }
  
    const getManagers = async() =>{
        const res = await getManager()
        console.log(res);
        if(res.error) return toast.error(res.error.response.data.message || 'asdaddr')
        
        setIsManager(res.data.manager)
    }

    const getUsers = async() =>{
        const res = await getUser();
        setUser(res.data.result)
    }

    return {
        addProfile,
        getManagers,
        isManager,
        getUsers,
        user
  }
}
