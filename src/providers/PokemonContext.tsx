import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export interface iPokemon {
  name: string;
  url: string;
}

export interface iType {
  name: string;
}

interface iPokemonContext {
  pokemonList: iPokemon[];
  setPokemonList: React.Dispatch<React.SetStateAction<iPokemon[]>>;
  pokemonTypes: iType[];
  setPokemonTypes: React.Dispatch<React.SetStateAction<iType[]>>;
}

interface iPokemonContextProps {
  children: React.ReactNode;
}

export const PokemonContext = createContext({} as iPokemonContext);

export const PokemonProvider = ({ children }: iPokemonContextProps) => {
  const [pokemonList, setPokemonList] = useState<iPokemon[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<iType[]>([]);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await api.get('/pokemon');
        setPokemonList(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ pokemonList, setPokemonList, pokemonTypes, setPokemonTypes }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
