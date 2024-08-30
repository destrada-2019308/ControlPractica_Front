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
        return {error: true, error}
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

export const getControlByManager = async(res) =>{
    try {
        return await apiClient.get(`/control/getControlManaClient/${res}`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getDataControl = async() =>{
    try {
        return await apiClient.get('/control/getData')
    } catch (error) {
        console.error(error);
        return{ error: true, error}
    }
}

export const getUserById = async(id) =>{
    try {
        return await apiClient.get(`/user/getUserById/${id}`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const updateUser = async(user, id) => {
    try {
        return await apiClient.put(`/user/updateUser/${id}`,user)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getAllDataControl = async(id) =>{
    try {
        return await apiClient.get(`/control/allData/${id}`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getHistorial = async(id) =>{
    try {
        return await apiClient.get(`/user/historial/${id}`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

/* CRUD School */

export const getAllSchool = async () => {
    try {
        return await apiClient.get(`/school/getSchool`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const sendSchool = async (params) => {
    try {
        return await apiClient.post(`/school/addSchool`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const updateSchool = async (params, id) => {
    try {
        return await apiClient.put(`/school/updateSchool/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

/* CRUD Career */

export const getAllCareer = async () => {
    try {
        return await apiClient.get('/career/getCareer')
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const sendCareer = async (params) => {
    try {
        return await apiClient.post(`/career/addCareer`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const updateCareer = async (params, id) => {
    try {
        return await apiClient.put(`/career/updateCareer/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

/* CRUD Workstation */
export const getAllWorkstation = async ( ) => {
    try {
        return await apiClient.get('/workstation/getWorkstation')
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const sendWorkstation = async (params) => {
    try {
        return await apiClient.post('/workstation/addWorkstation', params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const updateWorkstation = async (params, id) => {
    try {
        return await apiClient.put(`/workstation/updateWorkstation/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

/* CRUD Managments */
export const getAllManagments = async ( ) => {
    try {
        return await apiClient.get(`/managments/getManagments`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const sendManagments = async (params) => {
    try {
        return await apiClient.post(`/managments/addManagments`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const updateManagments = async (params, id) => {
    try {
        return await apiClient.put(`/managments/updateManagments/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

/* CRUD Supervisor */

export const getAllSupervisor = async ( ) => {
    try {
        return await apiClient.get(`/supervisor/getSupervisor`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const sendSupervisor = async (params) => {
    try {
        return await apiClient.post('/supervisor/addSupervisor', params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const updateSupervisor = async (params, id) => {
    try {
        return await apiClient.put(`/supervisor/updateSupervisor/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getAllUserSupervisor = async ( ) => {
    try {
        return await apiClient.get('/supervisor/getUserSupervisor')
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

/* CRUD Practicing */

export const getAllPracticing = async ( ) => {
    try {
        return await apiClient.get('/practicing/getPracticing')
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const getAllUserPracticing = async () => {
    try {
        return await apiClient.get(`/practicing/getUserPracticing`)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const sendPracticing = async (params) => {
    try {
        return await apiClient.post('/practicing/addPracticing', params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}

export const updatePracticing = async (params, id) => {
    try {
        return await apiClient.put(`/practicing/updatePracticing/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error}
    }
}