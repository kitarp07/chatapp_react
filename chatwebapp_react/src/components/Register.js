import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import userServices from '../services/userServices';
import "./Registration.css"

const Register = () => {

    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')

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

        userServices.register({ fname, lname, username, password }).then(res => {
            console.log(res.data)
            navigate('/login')

        })
            .catch(err => console.log(err))

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
        <><div className='r-container'>
            <span className='title'> Register</span>

            <Form>
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
                <FormGroup>
                    <Label className='password'for="lname">
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
                <FormGroup>
                    <Label className='password'for="username">
                        Username
                    </Label>
                    <Input className={lengthValid}
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <FormFeedback id='error'>
                        {
                            lengthMessage

                        }
                    </FormFeedback>
                </FormGroup>


                <FormGroup>
                    <Label className='password'for="password">
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
                    <Label className='password'for="confirm password">
                        Confirm Password
                    </Label>
                    <Input className={valid}
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder="Enter password again"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <FormFeedback id='error'>

                        {message}

                    </FormFeedback>
                </FormGroup>
                <div className='buttons'>
                <Button className='button' color="primary"  >
                    Cancel

                </Button>
                <Button className='button' color="secondary" onClick={handleRegister} >
                    Register

                </Button>

                

                </div>
                

            </Form>
        </div>

        </>
    )
}

export default Register;