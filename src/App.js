import logo from './logo.svg';
import './App.css';
import {Route, Routes , BrowserRouter } from "react-router-dom";
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
// import Login from './components/Login/Login';
function App() {

  return (
    <div className="App">
      <header className="App-header">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:categoria" element={<Home />} />
       
      </Routes> 
        
      </header>
    </div>
  );
}

export default App;
