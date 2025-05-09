import React, { useState, useEffect } from 'react';

const MadreSorteo = ({ participantes }) => {
  const [ganador, setGanador] = useState(null);
  const [sorteando, setSorteando] = useState(false);

  const realizarSorteo = () => {
    if (participantes.length === 0) return;
    
    setSorteando(true);
    setGanador(null);
    
    const interval = setInterval(() => {
      const indiceAleatorio = Math.floor(Math.random() * participantes.length);
      setGanador(participantes[indiceAleatorio].nombre);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setSorteando(false);
      const indiceFinal = Math.floor(Math.random() * participantes.length);
      setGanador(participantes[indiceFinal].nombre);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-pink-700 mb-4">Realizar Sorteo</h2>
      <button
        onClick={realizarSorteo}
        disabled={participantes.length === 0 || sorteando}
        className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-colors ${
          participantes.length === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : sorteando
            ? 'bg-pink-400'
            : 'bg-pink-600 hover:bg-pink-700'
        }`}
      >
        {sorteando ? 'Sorteando...' : 'Realizar Sorteo'}
      </button>
      
      {ganador && (
        <div className="mt-6 text-center">
          <p className="text-lg text-pink-600">¡La ganadora es!</p>
          <p className="text-4xl font-bold text-pink-700 mt-2 animate-bounce">
            {ganador}
          </p>
        </div>
      )}
    </div>
  );
};

export default MadreSorteo;