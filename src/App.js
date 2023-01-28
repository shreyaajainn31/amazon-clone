import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import './components/Navbar.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
