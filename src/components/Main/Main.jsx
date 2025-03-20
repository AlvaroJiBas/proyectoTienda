import React, { useState, useEffect } from "react";
import styles from './Main.css';

const Main = ({ tipo }) => {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                filtrarProductos(data, tipo);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [tipo]); // Añade `tipo` como dependencia para que el efecto se ejecute cuando cambie

    const filtrarProductos = (productos, tipo) => {
        let categoria;
        switch (tipo) {
            case "1":
                categoria = "men's clothing";
                break;
            case "2":
                categoria = "women's clothing";
                break;
            case "3":
                categoria = "jewelery";
                break;
            case "4":
                categoria = "electronics";
                break;
            default:
                console.log("default");
                categoria = "default";
                break;
        }
        if (categoria === "default") {
            setProductosFiltrados(productos);
            
        }else{
        const filtrados = productos.filter(producto => producto.category === categoria);
        setProductosFiltrados(filtrados);}
    };

    return (
        <div className="products">
            {productosFiltrados.map((producto, index) => (
                <div className="product" key={index}>
                    <img src={producto.image} className={styles.imagen} alt={producto.title} />
                    <div className='p-heading'>
                        {producto.title}
                        <p className={styles.precio}>{producto.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;