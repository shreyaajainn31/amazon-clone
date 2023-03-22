import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import Login from './components/Navbar/Pages/Login';
import Home from './components/Navbar/Pages/Home';
import Prime from './components/Navbar/Pages/Prime';
import Cart from './components/Navbar/Pages/Cart';
import Return from './components/Navbar/Pages/Return';
import Computer from './components/Product/Pages/Computer';
import Gaming from './components/Product/Pages/Gaming';
import Holiday from './components/Product/Pages/Holiday';
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
          <Route path = "/computer" element = {<Computer/>} />
          <Route path = "/deals" element = {<Holiday/>}/>
          <Route path = "/gaming" element = {<Gaming/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
