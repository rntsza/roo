"use client"

import React, { useState, useEffect } from 'react';
import monstersData from '../../lib/monsters.json';
import MonsterCard from '../../components/ui/monsterCard';

interface Monster {
  LV: number;
  Name: string;
  HP: number | string;
  Type: string;
  Property: string;
  Size: string;
  ATK: number;
  DEF: number;
  HIT: number;
  Matk: number;
  MDEF: number;
  Flee: number;
}

const MonsterList: React.FC<{ monsters: Monster[] }> = ({ monsters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {monsters.map((monster, index) => (
        <MonsterCard key={index} monster={monster} />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monstersData);

  useEffect(() => {
    const results = monstersData.filter((monster) =>
      monster?.Name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMonsters(results);
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search monsters..."
        className="border rounded-md py-2 px-4 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MonsterList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
