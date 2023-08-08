import axios from "axios";

const baseUrl = 'http://localhost:3002/user'

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials)
}

const register = (data) => {
   
   
    const formData = new FormData();
    formData.append("fname", data.fname)
    formData.append("lname", data.lname)
    formData.append("username", data.username)
    formData.append("password", data.password)
    formData.append("image", data.image)
    return(axios.post(`${baseUrl}/register`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }

    }))
}

function getUser (id) {
    return axios.get(`${baseUrl}/${id}`)
}

function getContacts(id){
    return axios.get(`${baseUrl}/${id}/contacts`)
}

function update(id, data){
    const formData = new FormData();
    formData.append("fname", data.fname)
    formData.append("lname", data.lname)
    formData.append("username", data.username)
   
    formData.append("image", data.image)
    return axios.put(`${baseUrl}/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

}

function deleteAccount(id){
    return axios.delete(`${baseUrl}/${id}`)

}
export default {login, register, getUser, getContacts, update, deleteAccount};