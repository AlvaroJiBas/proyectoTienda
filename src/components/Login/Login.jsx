import React, {useState} from "react";
import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();
    const handleUsuario = (e) => {
        setUsuario(e.target.value)
    }
    const handleNavigation = () => {

      navigate(`/home/${usuario}`);
    }
return(
    <>
   <div className={styles.login} id="login">
        <h2> Bienvenido a mi tiendita</h2>
        <form action="post">
        <label for="usuario">Usuario:</label>
        <input type="text" onChange={handleUsuario} name="usuario" id="usuario" />
        <label for="password"> Password:</label>
        <input type="password" name="contraseña" id="contraseña" />
        <input type="submit" onClick={handleNavigation} value="Entrar"/>
        </form>
    </div> 
    </>
)}
export default Login