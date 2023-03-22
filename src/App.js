import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import Login from './components/Navbar/Pages/Login';
import Home from './components/Navbar/Pages/Home';
import Prime from './components/Navbar/Pages/Prime';
import Cart from './components/Navbar/Pages/Cart';
import Return from './components/Navbar/Pages/Return';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element= {<Login/>}/>
          <Route path = "/return" element = {<Return/>}/>
          <Route path = "/prime" element = {<Prime/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
