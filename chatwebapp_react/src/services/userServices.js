import axios from "axios";

const baseUrl = 'http://localhost:3002/user'

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials)
}

const register = (data) => {
    return(axios.post(`${baseUrl}/register`, data))
}

function getUser (id) {
    return axios.get(`${baseUrl}/${id}`)
}

function getContacts(id){
    return axios.get(`${baseUrl}/${id}/contacts`)
}

export default {login, register, getUser, getContacts};