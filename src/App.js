import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Prime from './components/Pages/Prime';
import Cart from './components/Pages/Cart';
import Return from './components/Pages/Return';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/return" element = {<Return/>}/>
          <Route path = "/prime" element = {<Prime/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
