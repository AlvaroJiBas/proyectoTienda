import logo from './logo.svg';
import './App.css';
import {Route, Routes , BrowserRouter } from "react-router-dom";
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Typeof from './pages/Typeof';
// import Login from './components/Login/Login';
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
        <Main  />
      <Routes>
        <Route path="/" element={<Typeof />} />
        <Route path="/tipo:1" element={<Typeof />} />
        <Route path="/tipo:2" element={<Typeof />} />
        <Route path="/tipo:3" element={<Typeof />} />
        <Route path="/tipo:4" element={<Typeof />} />
      </Routes> 
        
      </header>
    </div>
  );
}

export default App;
