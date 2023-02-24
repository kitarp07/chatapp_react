import { useEffect, useState } from "react";
import userServices from "../services/userServices";
import "./convo.css"


export default function Conversation({conversation, currentUser}){
    const baseUrl = 'http://localhost:3002/';

    const [friend, setFriend] = useState([]);
    

    useEffect(() => {
        const friendId = conversation.members.find((m)=> m !== currentUser._id);
        console.log(friendId)
        userServices.getUser(friendId)
        .then((res) => {
            console.log(res)
            setFriend(res.data)
            console.log(friend.fname)
        

        })



    }, [currentUser, conversation]);

    return (
        <div className="chat">
            <img className="chatImage" src= {baseUrl+ friend.image} alt=""/>
            <span className="chatName">{friend.fname}</span>

        </div>
    )
    


}