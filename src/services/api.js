import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:2658',
    timeout: 2000
})

export const registerRequest = async(user) =>{
    try {
        return await apiClient.post('/user/createUser', user)
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}

export const loginRequest = async(lg) =>{
    try {
        return await apiClient.post('/user/login', lg)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const addControlRequest = async(control) =>{
    try {
        return await apiClient.post('/control/createControl', control)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getControlByUser = async(id) =>{
    try {
        return await apiClient.get(`/control/getControlByUser/${id}`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}