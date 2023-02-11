import { useEffect, useState } from "react";
import userServices from "../services/userServices";

export default function Conversation({conversation, currentUser}){

    const [friend, setFriend] = useState([]);

    useEffect(() => {
        const friendId = conversation.members.find((m)=> m !== currentUser._id);
        console.log(friendId)

        userServices.getUser(friendId)
        .then((res) => {
            
            setFriend(res.data)
            console.log(friend)
        

        })



    }, [currentUser, conversation]);

    return (
        <div>
            <span  >{friend.fname}</span>

        </div>
    )
    


}