import "./profile.css"

export default function Profile({contact}){
    return(
        <div className="profile">
            
            <div className="details">
                <div className="profileImgContainer">
                    <img className="profileImg" src="https://imgs.search.brave.com/5_b49VF7wGl2lEclXmMKB9gP953NEiAJ2Sb59uUI6pc/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/WEI4TkYxYXdReUFw/blFERG1CbVF3SGFF/byZwaWQ9QXBp" alt=""></img>
                    <div className="badge"></div>
                </div>
                
                <span className="name"> {contact.fname}</span>

            </div>
            
        </div>
    )
}