import axios from "axios";

const baseUrl = 'http://localhost:3002/chat'
const messageUrl = 'http://localhost:3002/message'





function getConversation (userId) {
    return axios.get(`${baseUrl}/${userId}/chats`)


}

function getMessagesByChatId(chatId) {
    return axios.get(`${messageUrl}/${chatId}`)
}

function createChat(uId, fId,data){
    return axios.post(`${baseUrl}/${uId}/${fId}`, data)

}

function addMessage(data){
    return axios.post(`${messageUrl}`, data)
}

function deleteChat(id){
    return axios.delete(`${baseUrl}/${id}`)
}
export default {getConversation, getMessagesByChatId, addMessage, createChat, deleteChat};