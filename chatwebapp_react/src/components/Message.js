import "./Message.css"
function Message ({sent}) {

    return(
        <div className={sent ? "message sent" : "message"}>
            <p>Hello </p>
        </div>

    )

}

export default Message;