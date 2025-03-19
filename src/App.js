import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Login from './components/Login/Login';
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Login />
      
      </header>
    </div>
  );
}

export default App;
