import { useEffect, useState } from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import "./account.css"
function Account({ user }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')



    const [lengthValid, setValid] = useState('')
    const [lengthMessage, setMessage] = useState('')

    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        // userServices.login({ username, password })
        //     .then((res) => {
        //         console.log(res.data)


        //         window.localStorage.setItem("token", res.data.token);

        //         setUser(res.data.user)
        //         console.log(user._id)
        //         navigate('/chats')


        //     }).catch((err) => window.alert(err.response.data.err));

    };

    useEffect(() => {

    })

    return (
        <div>
            <span className="title">Login</span>
            <div className="edit-container">

                <div className="fdiv">
                    <div className="imgContainer">
                        <img className="img" src="https://imgs.search.brave.com/5_b49VF7wGl2lEclXmMKB9gP953NEiAJ2Sb59uUI6pc/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/WEI4TkYxYXdReUFw/blFERG1CbVF3SGFF/byZwaWQ9QXBp" />

                    </div>
                    <div>
                        <div className="adetails1">
                            Name

                        </div>
                        <br></br>
                        <div className="adetails2">
                            Username

                        </div>
                    </div>

                </div>


                <div className="editForm">

                    <div className="f2">

                    </div>
                    <div className="f3">

                    </div>



                    <Form onSubmit={handleLogin}>
                        <div className="f1">
                            <div className="f1a">
                                <FormGroup>
                                    <Label className='username' for="fname">
                                        First Name
                                    </Label>
                                    <Input className={lengthValid}
                                        id="fname"
                                        name="fname"
                                        placeholder="Enter first name"
                                        type="text"
                                        onChange={(e) => setfName(e.target.value)}
                                    />

                                    <FormFeedback id='error'>
                                        {
                                            lengthMessage

                                        }
                                    </FormFeedback>
                                </FormGroup>

                            </div>
                            <div className="f1b">
                                <FormGroup>
                                    <Label className='password' for="lname">
                                        Last name
                                    </Label>
                                    <Input className={lengthValid}
                                        id="lname"
                                        name="lname"
                                        placeholder="Enter last name"
                                        type="text"
                                        onChange={(e) => setlName(e.target.value)}
                                    />

                                    <FormFeedback id='error'>
                                        {
                                            lengthMessage

                                        }
                                    </FormFeedback>
                                </FormGroup>

                            </div>

                        </div>
                        <FormGroup>
                            <Label className="username" for="username">
                                Username
                            </Label>
                            <Input className="usernameInput"
                                id="username"
                                name="username"
                                placeholder="Enter username"
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


                        <FormGroup>
                            <Label className="password" for="password">
                                Password
                            </Label>
                            <Input className="passwordInput"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />


                        </FormGroup>
                        <div className="buttons">
                            <Button className="button" color="primary">
                                Login

                            </Button>

                            <Button onClick={() => { navigate('/register') }} className="button" color="secondary">
                                Register

                            </Button>

                        </div>



                    </Form>
                </div>
            </div>
        </div>
    )
}


export default Account;

