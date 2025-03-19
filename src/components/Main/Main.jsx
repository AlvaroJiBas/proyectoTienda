import React, {useState,useEffect} from "react";

import styles from './Main.css';





const Main =(tipo) => {
    const [producto,setProducto]=useState([]);
   switch (tipo) {
    case value:
        
        break;
   
    default:
        break;
   }
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => data.filter(producto => producto.category === tipo.tipo))
        .then(data => setProducto(data))
        .catch((error) => {
            console.error('Error:', error);
          });
    }, [])
  
  

return (
    
    <div className="products">
      
     { producto.map((producto,index)=> (
    <div className="product" key={index}>
        <img src={producto.image} className={styles.imagen}/>
        <div className='p-heading'>
            {producto.title}
            <p className={styles.precio}>{producto.price}</p>
        </div>

    </div>
    ))}
    </div>

  
)

}

export default Main;