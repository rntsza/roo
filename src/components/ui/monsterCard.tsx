// Importa React e a interface Monster do arquivo apropriado
import React from 'react';
import { Monster } from './MonsterInterfaces'; // Ajuste o caminho conforme necessário
import Image from 'next/image';

interface MonsterCardProps {
  monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-2 flex flex-col items-center">
      <img
        src={monster.Image}
        alt={`Imagem de ${monster.Name}`}
        className="w-1/3 h- object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{monster.Name}</h2>
        <p className="text-gray-600">{`Type: ${monster.Type}`}</p>
        <p className="text-gray-600">{`Property: ${monster.Property}`}</p>
        <p className="text-gray-600">{`Size: ${monster.Size}`}</p>
        <p className="text-gray-600">{`Level: ${monster.LV}`}</p>
      </div>
    </div>
  );
};

export default MonsterCard;
