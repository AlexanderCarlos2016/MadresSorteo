import React from 'react';

const MadreHeader = () => {
  return (
    <header className="bg-pink-100 py-6 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-pink-700">
          Sorteo del Día de la Madre
        </h1>
        <p className="text-center text-pink-600 mt-2">
          Celebrando a las mujeres más especiales
        </p>
      </div>
    </header>
  );
};

export default MadreHeader;