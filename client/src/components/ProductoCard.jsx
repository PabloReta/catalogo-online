import React from 'react';

function ProductoCard({ producto }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
      <img src={producto.imagen} alt={producto.nombre} className="w-32 h-32 object-cover rounded mb-2" />
      <h2 className="font-semibold">{producto.nombre}</h2>
      <p className="text-lg text-green-700 font-bold">${producto.precio}</p>
    </div>
  );
}

export default ProductoCard;
