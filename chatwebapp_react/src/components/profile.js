import "./profile.css"

export default function Profile({contact}){
    const baseUrl = 'http://localhost:3002/';
    return(
        <div className="profile">
            
            <div className="details">
                <div className="profileImgContainer">
                    <img className="profileImg" src={baseUrl + contact.image} alt=""></img>
                    <div className="badge"></div>
                </div>
                
                <span className="name"> {contact.fname}</span>

            </div>
            
        </div>
    )
}