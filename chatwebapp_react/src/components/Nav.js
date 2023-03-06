import './Navbar.css'

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';


export default function Nav() {
    const navigate = useNavigate()



    return (
        <div>


            <div className='navbarMain'>

                <div className='navLeft'>
                    <span className='logo'>Chat</span>

                </div>

                <div className='navCenter'>
                    <div></div>

                </div>
            

                <div className='navRight'>
                    <div className='nlinks'>

                        <span onClick={() => navigate('/login')} className='navLink'>Login</span>
                        <span onClick={() => navigate('/register')} className='navLink'>Register</span>

    
                    </div>

                </div>


            </div>
           

        </div>
    )


}