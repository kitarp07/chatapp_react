import { useEffect, useState } from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import "./account.css"
import Navbar from "./Navbar";
function Account({ user }) {

    const baseUrl = 'http://localhost:3002/';


    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const [username, setUsername] = useState('')



    const [lengthValid, setValid] = useState('')
    const [lengthMessage, setMessage] = useState('')
    const [image, setImage] = useState([])

    const navigate = useNavigate()
    const handleSave = (e) => {
        e.preventDefault();
        userServices.update(user._id, { fname, lname, username, image })
            .then((res) => {
                console.log(res)
                

                window.location.reload()


            }).catch((err) => window.alert(err.response.data.err));

    };

    useEffect(() => {
        
        
        console.log(image)

        

    })

    const upload =()=>{
        document.getElementById("icon-button-file").click()

    }

    return (
        <>
        
        <Navbar/>
       
        <div>

            <div className="edit-container">

                <div className="fdiv">
                    <div className="imgContainer">
                        <img className="img" src={baseUrl+ user.image} />

                    </div>
                    <div>
                        
                        <img onClick={upload} className="img1" src="https://cdn-icons-png.flaticon.com/128/9512/9512757.png" />

                    </div>
                    <div>
                        <div className="adetails1">
                            {user.fname} {user.lname}

                        </div>
                        <br></br>
                        <div className="adetails2">
                            Username: {user.username}

                        </div>
                    </div>

                </div>


                <div className="editForm">
                    <div className="title">Edit Details</div>


                    <Form onSubmit={handleSave}>
                    <input  id="icon-button-file" type="file" style={{ display: 'none' }} onChange={(e)=>{setImage(e.target.files[0])}} />
                        <div className="f1">

                            <FormGroup>
                                <Label className='eusername' for="fname">
                                    First Name
                                </Label>
                                <Input className={lengthValid}
                                    id="fname"
                                    name="fname"
                                    placeholder={user.fname}
                                    type="text"
                                    value={fname}
                                    onChange={(e) => setfName(e.target.value)}
                                />

                                <FormFeedback id='error'>
                                    {
                                        lengthMessage

                                    }
                                </FormFeedback>
                            </FormGroup>



                            <FormGroup>
                                <Label className='epassword' for="lname">
                                    Last name
                                </Label>
                                <Input className={lengthValid}
                                    id="lname"
                                    name="lname"
                                    placeholder={user.lname}
                                    type="text"
                                    value={lname}
                                    onChange={(e) => setlName(e.target.value)}
                                />

                                <FormFeedback id='error'>
                                    {
                                        lengthMessage

                                    }
                                </FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label className="eusername" for="username">
                                    Username
                                </Label>
                                <Input className="usernameInput"
                                    id="username"
                                    name="username"
                                    placeholder={user.username}
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                {/* <FormFeedback>
                                    {
                                        lengthMessage

                                    }
                                </FormFeedback> */}
                            </FormGroup>



                        </div>


                        <div className="buttons">
                            <Button className="button" color="secondary">
                                Cancel

                            </Button>

                            <Button onClick={handleSave} className="button" color="primary">
                                Save

                            </Button>

                        </div>



                    </Form>
                </div>
            </div>
        </div>
        </>
    )
}


export default Account;

