import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:2658',
    timeout: 2000
})

apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if(token) config.headers.Authorization = token
        return config
    },
    err => Promise.reject(err)
)

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

export const addPracticing = async(practicing) =>{
    try {
        return await apiClient.post('/practicing/addPracticing', practicing)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getPracticingById = async(idP) =>{
    try {
        return await apiClient.get(`/practicing/getPracticingById/${idP}` )
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const addManager = async(id) =>{
    try {
        return await apiClient.put(`/user/addAttendant`, id)
    } catch (error) {
        console.error(error);
        return{ error: true, error}
    }
}

export const getUser = async() =>{
    try {
        return await apiClient.get(`/user/getUsers`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getManager = async() =>{
    try {
        return await apiClient.get('/practicing/getManager')
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const evaluations = async(req) =>{
    try {
        return await apiClient.put('/control/evaluation', req)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}