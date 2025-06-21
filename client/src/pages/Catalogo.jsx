import React, { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import axios from 'axios';

function Catalogo() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/productos') // Asegurate que coincida con tu backend
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
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
