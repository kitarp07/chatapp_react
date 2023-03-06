import "./Message.css";
import { format } from "timeago.js"
import { useEffect, useInsertionEffect, useState } from "react";
import MessageTopbar from "./MsgTopBar";

function Message({ message, sent }) {

    const [IsMessage, setIsMessage] = useState(true)

    useEffect(() => {
        console.log(message)
        if (message.length ===0) {

            setIsMessage(false) ;


        }
        else {
            setIsMessage(true);
        }

    }, [])



    return (
        

        <div>
            
            {
                IsMessage ? <>

                <div className={sent ? "message sent" : "message"} >
                    <div className="msg">
                        <img className="msgImg" src="https://imgs.search.brave.com/5HQBrsaMCKrNxqnMNDA16Xxg7QkzT5pZq0nyHXo2I2I/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/dnhodFFxcjVGb3Vi/R2pxNHNJWHVnSGFF/byZwaWQ9QXBp" />
                        <p className="msgText">{message.message}</p>

                    </div>
                    <div className="msgTime">
                        {format(message.createdAt)}

                    </div>

                </div >
                </> : <span> Start chatting</span>

            }
        </div>


    )


}

export default Message;