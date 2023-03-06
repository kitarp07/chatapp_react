import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import chatServices from "../services/chatServices";
import userServices from "../services/userServices";
import Message from "./Message";
import Conversation from "./Conversations";
import "./Chat.css"
import { io } from "socket.io-client";
import Profile from "./profile";
import MessageTopbar from "./MsgTopBar";
import Navbar from "./Navbar";

function Chat({ user, conversation, setConversation }) {
    const [messages, setMessages] = useState("")
    const [currentChat, setCurrentChat] = useState([])
    const [isChat, setIsChat] = useState(false)
    const [newMessage, setNewMessage] = useState("")
    const scrollRef = useRef();
    const [receivedMessage, setReceivedMessage] = useState(null)
    const [contacts, setContacts] = useState([])

    const [senderId, setSenderId] = useState('')
    const [receiverId, setReceiverId] = useState('')
    const [IsMessage, setIsMessage] = useState(true)
    const socket = useRef()

    useEffect(() => {
        socket.current = io("ws://localhost:3003")
        socket.current.on("getMsg", data => {
            setReceivedMessage({
                sender: data.senderId,
                message: data.message,
                createdAt: Date.now()

            });
        });
    }, [])

    useEffect(() => {
        receivedMessage && currentChat?.members.includes(receivedMessage.sender) &&
            setMessages((prev) => [...prev, receivedMessage])

    }, [receivedMessage, currentChat])



    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", users => {
            console.log(users);
        })

    }, [user])


    useEffect(
        () => {
            chatServices.getConversation(user._id)
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                    setConversation(res.data)

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
                    console.log(res.data.length)
                    if (res.data.length === 0) {
                        setIsMessage(false)
                    }
                    setMessages(res.data)
                    setIsChat(true)
                    console.log(messages)
                })
        }, [currentChat]
    );

    useEffect(
        () => {

            userServices.getContacts(user._id)
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                    setContacts(res.data)




                })
                .catch((err) => console.log(err))

        }, [user._id]
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const message = {
        //     sender: user._id,
        //     message: newMessage,
        //     chatId: currentChat._id
        // };

        const sender = user._id;
        const message = newMessage;
        const chatId = currentChat._id;

        const receiverId = currentChat.members.find(member => member !== user._id)
        socket.current.emit("sendMsg", ({
            senderId: user._id,
            receiverId,
            message: newMessage,
        }))

        try {
            const res = await chatServices.addMessage({ sender, message, chatId });
            console.log(res)

            setMessages([...messages, res.data])



        } catch (error) {
            console.log(error)

        }

        setNewMessage("")


    }

    const createChat = async (senderId, receiverId) => {



        // try {
        //     const res = await chatServices.createChat(senderId,receiverId, { senderId, receiverId });
        //     console.log(res)
        //     setConversation([...conversation, res.data])
        //     console.log(conversation)
        //     setCurrentChat(res.data)
        // } catch (err) {
        //     window.alert(err.response.data.err);
        // }

        chatServices.createChat(senderId, receiverId, { senderId, receiverId })
            .then((res) => {
                console.log(res)


                setConversation([...conversation, res.data])
                console.log(conversation)
                setCurrentChat(res.data)


            }).catch((err) => { console.log(err); window.alert(err.response.data.msg) });
    }




    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })

    }, [messages])

    return (
        <>

            <Navbar />
            <div className="main">

                <div className="wrap">
                    <div className="convos">

                        <input placeholder="Search.." className="searchInput" />

                        {conversation.map((c) => (
                            <div onClick={() => setCurrentChat(c)}>

                                <Conversation conversation={c} currentUser={user} />
                            </div>

                        ))}
                    </div>

                </div>
                <div className="messagesWrap">
                    <div className="messagesArea">
                        {
                            isChat ? <>
                                <div className="messages">
                                    <MessageTopbar conversation={currentChat} currentUser={user} />




                                    {
                                        messages.map((m) => (
                                            <div ref={scrollRef}>

                                                <Message message={m} sent={m?.sender === user._id} />
                                            </div>


                                        ))
                                    }






                                </div>
                                <div className="addMessage">
                                    <textarea className="sendMessage" placeholder="Send a message" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}> </textarea>
                                    <button className="msgSubmit" class = 'btn btn-primary' onClick={handleSubmit}>Submit</button>
                                </div>

                            </> :
                                <span className="noMsgTxt">Open a conversation to start a chat</span>}

                    </div>
                </div>
                <div className="profileWrap">
                    <div className="profile">
                        <span className="allcontacts"> All contacts </span>
                        {contacts.map((c) => (


                            <div onClick={async () => createChat(user._id, c._id)}>

                                <Profile contact={c} />
                            </div>

                        ))}

                    </div>

                </div>



            </div >
        </>
    )
}

export default Chat;