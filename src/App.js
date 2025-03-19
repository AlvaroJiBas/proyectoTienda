import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main/Main';
import NavBar from './NavBar/NavBar';
// import Login from './components/Login/Login';
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
        <Main  />
      </header>
    </div>
  );
}

export default App;
