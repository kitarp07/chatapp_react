import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";


const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [valid, setValid] = useState('')
    const [lengthValid, setLengthValid] = useState('')
    const [lengthMessage, setLengthMessage] = useState('')

    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        console.log(username, password, confirmpassword)
        axios.post('http://localhost:3000/user/register', { username, password })
            .then(response => {
                console.log(response.data)
                navigate('/login')
            })
            .catch(err => (console.log(err)))

    }



    // const handleChange = (e) => {
    //     e.preventDefault()

    //     setConfirmPassword(e.target.value)

    //     if (password !== confirmpassword) {
    //         setValid('is-invalid')
    //         setMessage(' It doesnot work')
    //         return
    //     }
    //     setValid('is-valid')
    //     setMessage('Works')

    // }

    useEffect(() => {
        if (password !== confirmpassword) {
            setValid('is-invalid')
            setMessage(' It doesnot work')
            return
        }
        setValid('is-valid')
        setMessage('Works')


    }, [confirmpassword, password])

    useEffect(() => {
        if (username.length < 8) {
            setLengthValid('is-invalid')
            setLengthMessage('Length Must be greater than 8 characters')
            return
        }
        setLengthValid('is-valid')
        setLengthMessage('Works')



    }, [username])



    return (
        <>
            <p> Registration form</p>

            <Form>
                <FormGroup>
                    <Label for="username">
                        Username
                    </Label>
                    <Input className={lengthValid}
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <FormFeedback>
                        {
                            lengthMessage

                        }
                    </FormFeedback>
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
                        onChange={(e) => setPassword(e.target.value)}
                    />


                </FormGroup>

                <FormGroup>
                    <Label for="confirm password">
                        Confirm Password
                    </Label>
                    <Input className={valid}
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder="Enter password again"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <FormFeedback >

                        {message}

                    </FormFeedback>
                </FormGroup>
                <Button color="primary" onClick={handleRegister} >
                    Register

                </Button>

            </Form>

        </>
    )
}

export default Register;