import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { GiftIcon, SparklesIcon, Trash2Icon } from "lucide-react";

export default function DiaMadreSorteo() {
  const [nombre, setNombre] = useState("");
  const [nombres, setNombres] = useState<string[]>([]);
  const [ganador, setGanador] = useState<string | null>(null);

  const agregarNombre = () => {
    if (nombre.trim() !== "") {
      setNombres([...nombres, nombre.trim()]);
      setNombre("");
      setGanador(null);
    }
  };

  const eliminarNombre = (indice: number) => {
    const nuevosNombres = [...nombres];
    nuevosNombres.splice(indice, 1);
    setNombres(nuevosNombres);
    setGanador(null);
  };

  const sortearNombre = () => {
    if (nombres.length > 0) {
      const indiceGanador = Math.floor(Math.random() * nombres.length);
      setGanador(nombres[indiceGanador]);
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-4xl font-bold text-pink-700 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎉 Sorteo Especial del Día de la Madre 💐
      </motion.h1>

      <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Ingresa un nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="flex-1"
            />
            <Button onClick={agregarNombre} className="bg-pink-500 hover:bg-pink-600">
              Agregar
            </Button>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-pink-600">Participantes:</h2>
            <ul className="space-y-1 text-gray-700">
              {nombres.map((n, idx) => (
                <li key={idx} className="flex justify-between items-center bg-pink-50 p-2 rounded-md">
                  <span>{n}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => eliminarNombre(idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2Icon className="w-4 h-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <Button onClick={sortearNombre} className="w-full bg-pink-600 hover:bg-pink-700">
            <SparklesIcon className="mr-2" /> Realizar Sorteo
          </Button>

          {ganador && (
            <motion.div
              className="text-center text-xl text-green-700 font-bold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              🎁 ¡Felicidades, {ganador}! Eres la ganadora del sorteo 🏆
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
