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
        <Route path="/tipo:Mujer" element={<Typeof />} />
        <Route path="/tipo:hombre" element={<Typeof />} />
        <Route path="/tipo:Joyeria" element={<Typeof />} />
        <Route path="/tipo:Electronica" element={<Typeof />} />
      </Routes> 
        <Main />
      </header>
    </div>
  );
}

export default App;
