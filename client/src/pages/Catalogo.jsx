import React, { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import axios from 'axios';

function Catalogo() {
  const [productos, setProductos] = useState([]);

useEffect(() => {
  fetch('/catalogo/datos/productos.json')
    .then(res => res.json())
    .then(data => {
      const productosFormateados = data.map(item => ({
        nombre: item['DESCRIPCION'],
        precio: item['P.RAM'],
        imagen: item['IMAGEN']
      }));
      setProductos(productosFormateados);
    })
    .catch(error => console.error('Error cargando productos:', error));
}, []);


  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {productos.map((producto, idx) => (
        <ProductoCard key={idx} producto={producto} />
      ))}
    </div>
  );
}

export default Catalogo;
