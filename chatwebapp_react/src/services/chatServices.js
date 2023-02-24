import axios from "axios";

const baseUrl = 'http://localhost:3002/chat'
const messageUrl = 'http://localhost:3002/message'





function getConversation (userId) {
    return axios.get(`${baseUrl}/${userId}/chats`)


}

function getMessagesByChatId(chatId) {
    return axios.get(`${messageUrl}/${chatId}`)
}

function addMessage(data){
    return axios.post(`${messageUrl}`, data)
}

export default {getConversation, getMessagesByChatId, addMessage};