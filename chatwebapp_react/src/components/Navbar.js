import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import userServices from '../services/userServices';


export default function Navbar() {
    const navigate = useNavigate()
    const baseUrl = 'http://localhost:3002/';
    const[user, setUser] = useState([]);

    const handleLogout = (e) => {
        e.preventDefault();
        window.localStorage.removeItem("uid")
        window.localStorage.removeItem("token")
        navigate('/login')
        window.location.reload()
    }

    const handleDelete = (e) => {
        e.preventDefault()
     
        userServices.deleteAccount(window.localStorage.getItem("uid")).then(res => {
            console.log(res.data)
            window.alert(res.data.status)
            navigate('/login')
            window.location.reload()

        }).catch(err => window.alert(err.response.data.err))

    }
    useEffect(() => {
        const uid = (window.localStorage.getItem("uid"))
        console.log(uid)
        if (window.localStorage.getItem("uid") != null) {
          userServices.getUser(window.localStorage.getItem("uid"))
            .then((res) => {
              console.log(res)
              setUser(res.data)
              
    
            }).catch((err) => { console.log(err) })
        }
      }, [])

      console.log(user)



    return (
        <div>


            <div className='navbarMain'>

                <div className='navLeft'>
                    <span className='logo'>Chat</span>

                </div>

                <div className='navCenter'>
                    <div></div>

                </div>
                <Helmet>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>



                    {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> */}

                </Helmet>

                <div className='navRight'>
                    <div className='links'>
                        <div className='navLink' onClick={() => navigate('/chats')}>Home</div>
                       

                        <div class="dropdown">
                            <div className='navLink' class=' navLink dropbtn'>Settings</div>
                            <div class="dropdown-content">
                                <a href="/editaccount">Edit Profile</a>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete Account</a>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</a>

                            </div>
                        </div>
                        <div className='c' onClick={()=> navigate('/editaccount')}>
                        <div className='navImgC'><img className="navImg" src={baseUrl+user.image} alt=""></img></div>
                        <div className='navName'><span>{user.fname} </span></div>

                        </div>
                        



                    </div>

                </div>


            </div>
            <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Logout</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Do you want to logout?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={handleLogout}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete Account</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Do you want to delete your account?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={handleDelete} >Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}