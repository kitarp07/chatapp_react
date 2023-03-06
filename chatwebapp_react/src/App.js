import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Link, Navigate, Route, Routes, useMatch } from 'react-router-dom';
import Chat from './components/Chat';
import Account from './components/Account'
import { useEffect, useState } from 'react';
import userServices from './services/userServices';
import Navbar from './components/Navbar';

function App() {

  const [user, setUser] = useState([])

  const [conversation, setConversation] = useState([])

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






  return (
    <div  >

      <Router>
        
        <div >
          {/* <Link to={'/login'}> Login </Link>
          <Link to={'/register'}> register </Link>
          <Link to={'/home'}>Home</Link> */}
          {/* <Link to={'/chat/'}>Chat</Link> */}
          {/* <Link to={'/books'}>Books</Link> */}


        </div>
        <Routes>
          {/* <Route path='/books/:id' element={<BookDetail books={books} />} /> */}

          <Route  path='' element={<Navigate to="/login" replace={true} />}/>
          

          <Route path='/login' element={<Login user={user} setUser={setUser} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/chat' element={<Chat />} /> */}
          <Route path='/chats' element={<Chat user={user} conversation={conversation} setConversation={setConversation} />} />
          <Route path='/editaccount' element={<Account user={user} />} />
          <Route path='/navbar' element={<Navbar />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
