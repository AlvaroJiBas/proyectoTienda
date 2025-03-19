import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main/Main';
import NavBar from './NavBar/NavBar';
import { useParams } from 'react-router-dom';

// import Login from './components/Login/Login';
function Typeof() {
 const { id } = useParams();
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
        <Main tipo={id}/>
      </header>
    </div>
  );
}

export default Typeof;
