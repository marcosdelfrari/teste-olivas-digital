// components/Busca.tsx
"use client";

import React, { useState } from "react";

interface BuscaProps {
  onSearch: (query: string, type: string) => void; // Aceita dois parâmetros
}

const Busca: React.FC<BuscaProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("keyword");

  const handleSearch = () => {
    onSearch(query, searchType); // Passa a consulta e o tipo de busca
  };

  return (
    <div>
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="keyword">Buscar por palavra-chave</option>
        <option value="category">Buscar por categoria</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite sua busca"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Busca;
