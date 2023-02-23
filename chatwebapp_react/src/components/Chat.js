import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import chatServices from "../services/chatServices";
import Message from "./Message";
import Conversation from "./Conversations";
import "./Chat.css"

function Chat({ user, conversation, setConversation }) {
    const [messages, setMessages] = useState([])
    const [currentChat, setCurrentChat] = useState([])
    const [isChat, setIsChat] = useState(true)

    useEffect(
        () => {
            chatServices.getConversation(user._id)
                .then(res => {
                    console.log(res)
                    console.log(res.data.data)
                    setConversation(res.data.data)
                    setIsChat(true)
                    console.log(conversation)



                })
                .catch((err) => console.log(err))

        }, [user._id]
    )

    useEffect(
        () => {
            console.log(currentChat)
            chatServices.getMessagesByChatId(currentChat._id)
                .then(res => {
                    console.log(res)
                    setMessages(res.data)
                    console.log(messages)
                })
        }, [currentChat]
    );

    return (
        <div className="main">
            <p > {user.fname}'s chat box</p>

            <div className="wrap">
                <div className="convos">
                    menu
                    <input placeholder="Search.." className="searchInput" />
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>





                    {/* {conversation.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>

                            <Conversation conversation={c} currentUser={user} />
                        </div>

                    ))} */}
                </div>
            </div>
            <div className="messagesWrap">
                <div className="messages">
                    messages
                    <Message/>
                    <Message sent={true}/>
                    {/* {
                    isChat ? <div>
                        {messages.map((m) => (
                            <div>
                                <Message message={m} sent={m.sender === user._id} />
                            </div>


                        ))}


                    </div>
                        : <p>No message</p>
                }
                <Form>
                    <FormGroup>
                        <Label for="message">
                            Send Message
                        </Label>
                        <Input
                            id="message"
                            name="message"
                            placeholder="Type something"
                            type="message"
                            value={messages}
                            onChange={(e) => setMessages(e.target.value)}
                        />


                    </FormGroup>





                    <Button color="primary">
                        Send

                    </Button>
                </Form> */}
                </div>
                <div className="addMessage">
                    <textarea className="sendMessage" placeholder="Send a message"> </textarea>
                    <button className="msgSubmit">Submit</button>
                </div>
            </div>
            <div className="profileWrap">
                <div className="profile">profile</div>

            </div>



        </div>
    )
}

export default Chat;