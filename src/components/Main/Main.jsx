import React, {useState,useEffect} from "react";
import { data } from "react-router-dom";
import styles from './Main.css';





const Main =(tipo) => {
    const [producto,setProducto]=useState([]);
   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducto(data))
        .catch((error) => {
            console.error('Error:', error);
          });
    }, [])
  
  

return (
    <>
    <div id="productos">
     { producto.map((producto,index)=> (
    <div key={index} className={styles.producto}>
        <img src={producto.image} className={styles.imagen}/>
        <div className={styles.info}>
            {producto.title}
            <p className={styles.precio}>{producto.price}</p>
        </div>

    </div>
))}
</div>
    </>
)

}

export default Main;