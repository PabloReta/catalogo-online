import React from 'react';

function ProductoCard({ producto }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <img
        src={producto.imagen || 'https://via.placeholder.com/300x300?text=Producto'}
        alt={producto.nombre}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-bold">{producto.nombre}</h3>
      <p className="text-gray-700">Precio: ${producto.precio}</p>
    </div>
  );
}

export default ProductoCard;

