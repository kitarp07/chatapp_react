import { useEffect, useState } from "react";
import userServices from "../services/userServices";
import "./convo.css"
//{conversation, currentUser}
export default function Conversation(){

    // const [friend, setFriend] = useState([]);

    // useEffect(() => {
    //     const friendId = conversation.members.find((m)=> m !== currentUser._id);
    //     console.log(friendId)
    //     userServices.getUser(friendId)
    //     .then((res) => {
    //         console.log(res)
    //         setFriend(res.data)
    //         console.log(friend.fname)
        

    //     })



    // }, [currentUser, conversation]);

    return (
        <div className="chat">
            <img className="chatImage" src="https://imgs.search.brave.com/124s5XpPSX3gg5CDVJH_ph7cjVvibcW9t0wKsgDOFQI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/WWlwSl9oU25jdWdN/MlN3blppdHZnSGFF/SyZwaWQ9QXBp" alt=""/>
            <span className="chatName">friend.fname</span>

        </div>
    )
    


}