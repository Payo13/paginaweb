import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Routes
}from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
          
      </Routes>
    </Router>

   
  );
}

export default App;
