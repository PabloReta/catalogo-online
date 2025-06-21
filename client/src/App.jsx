import React from 'react';
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <Catalogo />
    </div>
  );
}

export default App;
