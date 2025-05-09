import React from 'react';

const MadreListaParticipantes = ({ participantes, onEliminar }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-pink-700 mb-4">Participantes</h2>
      <ul className="space-y-2">
        {participantes.map((participante, index) => (
          <li key={index} className="flex justify-between items-center bg-pink-50 p-3 rounded-lg">
            <span className="text-pink-800">{participante.nombre}</span>
            <button
              onClick={() => onEliminar(index)}
              className="text-pink-500 hover:text-pink-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MadreListaParticipantes;