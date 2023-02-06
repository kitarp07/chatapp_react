import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div className="container">
    <h1>Book review</h1>
    {/* <Register />
    <Login /> */}

    <Router>
      <div>
        <Link to={'/login'}> Login </Link>
        <Link to={'/register'}> register </Link>
        <Link to={'/home'}>Home</Link>


      </div>
      <Routes>
        {/* <Route path='/books/:id' element={<BookDetail books={books} />} /> */}

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/books' element={<Books books={books} setBooks={setBooks} />} /> */}


      </Routes>
    </Router>


  </div>
  );
}

export default App;
