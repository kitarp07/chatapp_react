import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import userServices from '../services/userServices';
import Nav from './Nav';
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
    const[image, setImage] = useState([]);

    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
     
        userServices.register({ fname, lname, username, password,image }).then(res => {
            console.log(res.data)
            window.alert(res.data.status)
            navigate('/login')

        })
            .catch(err => window.alert(err.response.data.err))

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
            setMessage(' Password doesnot match')
            return
        }
        setValid('is-valid')
        setMessage('Password matches')


    }, [confirmpassword, password])

    useEffect(() => {
        if (username.length < 8) {
            setLengthValid('is-invalid')
            setLengthMessage('Length Must be greater than 8 characters')
            return
        }
        setLengthValid('is-valid')
        setLengthMessage('')



    }, [username])



    return (
        <>
        <Nav/>
        <div className='r-container'>
            <div className='rr'></div>
            <div className='rtitle'> Register</div>
            



            <Form>
                <div className='r1'>
                    <div className='r1a'>

                        <FormGroup>
                            <Label className='username' for="fname">
                                First Name
                            </Label>
                            <Input 
                                id="fname"
                                name="fname"
                                placeholder="Enter first name"
                                type="text"
                                onChange={(e) => setfName(e.target.value)}
                            />

                           
                        </FormGroup>
                    </div>
                    <div className='r1b'>
                        <FormGroup>
                            <Label className='username' for="lname">
                                Last name
                            </Label>
                            <Input 
                                id="lname"
                                name="lname"
                                placeholder="Enter last name"
                                type="text"
                                onChange={(e) => setlName(e.target.value)}
                            />

                            
                        </FormGroup>

                    </div>
                </div>

                <div className='r2'>
                    <div className='r2a'>
                        <FormGroup>
                            <Label className='password' for="username">
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

                    </div>
                    <div className='r2b'>
                    <FormGroup>
                            <Label className='password' for="password">
                                Image
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />


                        </FormGroup>

                    </div>
                </div>
                <div className='r3'>

                    <div className='r3a'>
                        <FormGroup>
                            <Label className='password' for="password">
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

                    </div>
                    <div className='r3b'>
                        <FormGroup>
                            <Label className='password' for="confirm password">
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

                    </div>
                </div>









                <div className='buttons'>
                    <Button onClick={()=>{navigate('/login')}} className='button' color="success"  >
                        Cancel

                    </Button>
                    <Button className='button' color="primary" onClick={handleRegister} >
                        Register

                    </Button>



                </div>


            </Form>
        </div>

        </>
    )
}

export default Register;