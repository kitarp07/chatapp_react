import './mTopbar.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import userServices from '../services/userServices';
import chatServices from '../services/chatServices';



export default function MessageTopbar({ conversation, currentUser }) {
    const navigate = useNavigate()
    const baseUrl = 'http://localhost:3002/';

    const [friend, setFriend] = useState([]);


    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        window.localStorage.setItem("cid", conversation._id)
        console.log(friendId)
        userServices.getUser(friendId)
            .then((res) => {
                console.log(res)
                setFriend(res.data)
                console.log(friend.fname)


            })



    }, [currentUser, conversation]);

    const handleDeleteChat = (e) => {
        chatServices.deleteChat(window.localStorage.getItem("cid")).then(res => {
            console.log(res.data)
            window.alert(res.data.status)
            
            window.location.reload()

        }).catch(err => window.alert(err.response.data.err))

    }
    return (
        <div>


            <div className='topbarMain'>
                <div className='topLeft'>
                    <div className="topImgContainer">
                        <img className="topImg" src={baseUrl + friend.image} alt=""></img>

                    </div>

                    <span className='toplogo'>{friend.fname} {friend.lname}</span>

                </div>

                <div className='topCenter'>
                    <div></div>

                </div>

                <div className='topRight'>
                    <div className='topLink'>


                        <button class=" i1 btn btn-primary "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>

                    </div>

                    <div className='topLink1'>


                        <button class=" i1 btn btn-primary d-md-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>

                    </div>

                    <div className='topLink1'>




                        <div class="topdropdown">
                            <img className="topImg2" class=' topImg2 topdropbtn' src={require("../images/km.png")} alt=""></img>
                            <div class="topdropdown-content">

                                <a href="#" data-bs-toggle="modal" data-bs-target="#chatdeleteModal">Delete chat</a>


                            </div>
                        </div>


                    </div>

                </div>

            </div>


            <div class="modal fade" id="chatdeleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete Chat</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Do you want to delete this chat?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={handleDeleteChat}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )


}