import "./Message.css"
function Message ({message, sent}) {



    return(
        <div className={sent ? "message sent" : "message"}>
            <p>{message.message}</p>
        </div>

    )

}

export default Message;