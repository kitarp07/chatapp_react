import './Navbar.css'

export default function Navbar(){
    return(
        <div className='navbarMain'>
            <div className='navLeft'>
                <span className='logo'>Chat</span>

            </div>

            <div className='navCenter'>
                <div></div>

            </div>

            <div className='navRight'>
                <div className='links'>
                    <span className='navLink'>Home</span>
                    <span className='navLink'>Profile</span>
                    <span className='navLink'>Links</span>

                </div>

            </div>

        </div>
    )

    
}