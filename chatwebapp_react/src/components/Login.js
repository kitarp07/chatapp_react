import { useEffect, useState } from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [lengthValid, setValid] = useState('')
    const [lengthMessage, setMessage] = useState('')

    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        userServices.login({ username, password })
            .then((res) => {
                console.log(res.data);
                navigate('/chat')
                window.localStorage.setItem("token", res.data.token);
                window.alert(res.data.status);
            }).catch((err) => window.alert(err.response.data.err));

    };

    useEffect(() => {

    })

    return (
        <div>
            <p> Login Page</p>

            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="username">
                        Username
                    </Label>
                    <Input
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
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />


                </FormGroup>

                <Button color="primary">
                    Login

                </Button>

            </Form>
        </div>
    )
}


export default Login;