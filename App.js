import React, { useState, useEffect } from 'react';
import MadreHeader from './components/MadreHeader';
import MadreFormulario from './components/MadreFormulario';
import MadreListaParticipantes from './components/MadreListaParticipantes';
import MadreSorteo from './components/MadreSorteo';
import participantes from './mock/participantes';

const App = () => {
  const [participantesState, setParticipantesState] = useState(() => {
    const saved = localStorage.getItem('participantes');
    return saved ? JSON.parse(saved) : participantes;
  });

  useEffect(() => {
    localStorage.setItem('participantes', JSON.stringify(participantesState));
  }, [participantesState]);

  const agregarParticipante = (nombre) => {
    setParticipantesState([...participantesState, { id: Date.now(), nombre }]);
  };

  const eliminarParticipante = (index) => {
    const nuevosParticipantes = [...participantesState];
    nuevosParticipantes.splice(index, 1);
    setParticipantesState(nuevosParticipantes);
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <MadreHeader />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <MadreFormulario onAgregarParticipante={agregarParticipante} />
        <MadreListaParticipantes
          participantes={participantesState}
          onEliminar={eliminarParticipante}
        />
        <MadreSorteo participantes={participantesState} />
      </main>
    </div>
  );
};

export default App;

// DONE