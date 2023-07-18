import { useEffect, useState } from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import './Login.css'
import Nav from "./Nav";


function Login({ user, setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    const [lengthValid, setValid] = useState('')
    const [lengthMessage, setMessage] = useState('')

    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        userServices.login({ username, password })
            .then((res) => {
                console.log(res.data)


                window.localStorage.setItem("token", res.data.token);
                window.localStorage.removeItem("uid");
                window.localStorage.setItem("uid", res.data.userID);

                setUser(res.data.user)
                console.log(window.localStorage.getItem("uid"))


                navigate('/chats')


            }).catch((err) => window.alert(err.response.data.msg));

    };

    useEffect(() => {

    })

    return (
        <>
        <Nav/>

            <div className="login-container">
                <div className="l1">

                </div>
                <div className="ltitle">Login</div>
               

               

                <Form onSubmit={handleLogin}>
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
                    <div className="lbuttons">
                        <Button className="button" color="primary">
                            Login

                        </Button>

                        <Button onClick={() => { navigate('/register') }} className="button" color="secondary">
                            Register

                        </Button>

                    </div>



                </Form>
            </div>
        </>
    )
}


export default Login;