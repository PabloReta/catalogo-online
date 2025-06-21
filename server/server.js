const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const path = require('path');

const app = express();
app.use(cors());

// Ruta para leer el Excel
app.get('/api/productos', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'catalogo_consolidado.xlsx');
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets['Hoja1'];
  const data = XLSX.utils.sheet_to_json(sheet);

  const productos = data
    .filter(item => item.MOSTRAR === "SI")
    .map(item => ({
      nombre: item.DESCRIPCION,
      precio: Number(item['P.RAM']).toFixed(2),
      imagen: item.IMAGEN || 'https://via.placeholder.com/300x300?text=Producto'
    }));

  res.json(productos);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));
