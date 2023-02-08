import axios from "axios";

const baseUrl = 'http://localhost:3002/user'

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials)
}

const register = (data) => {
    return(axios.post(`${baseUrl}/register`, data))
}

export default {login, register};