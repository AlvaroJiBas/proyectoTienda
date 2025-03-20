import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter } from "react-router-dom";
import Main from '../components/Main/Main';
import NavBar from '../components/NavBar/NavBar';
import { useParams } from 'react-router-dom';

// import Login from './components/Login/Login';
const Home = () => {
 const { categoria } = useParams();
  return (
    <div className="App">
      <header className="App-header">
        {console.log({categoria})}
      <NavBar />
        <Main tipo={categoria}/>
      </header>
    </div>
  );
}

export default Home;
