import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Link, Route, Routes, useMatch } from 'react-router-dom';
import Chat from './components/Chat';
import { useState } from 'react';
import userServices from './services/userServices';

function App() {

  const [user, setUser] = useState([])
  
 
  
  


  return (
    <div className='container' >
      <h1>Chat App</h1>
      <Router>
        <div>
          <Link to={'/login'}> Login </Link>
          <Link to={'/register'}> register </Link>
          <Link to={'/home'}>Home</Link>
          <Link to={'/chat/'}>Chat</Link>
          {/* <Link to={'/books'}>Books</Link> */}


        </div>
        <Routes>
          {/* <Route path='/books/:id' element={<BookDetail books={books} />} /> */}

          <Route path='/login' element={<Login user={user} setUser={setUser} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/chat/:id' element={<Chat user={user} />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
