import { createContext, useState } from 'react';

export interface iPokemon {
  name: string;
  url: string;
  id: number;
  pokemon: iPokemon;
}

export interface iData {
  name: string;
  url: string;
}

export interface iInfos{
  types: { slot: number; type: { name: string; url: string } }[];
  name: string;
  id: number ;
  order: number;
  height: number;
  weight: string;
  abilities:  { slot: number; ability: { name: string; url: string } }[];
}

interface iPokemonContext {
  pokemonList: iPokemon[];
  setPokemonList: React.Dispatch<React.SetStateAction<iPokemon[]>>;
  pokemonData: iData[] | string | iPokemon;
  setPokemonData: React.Dispatch<React.SetStateAction<iData[] | string | iPokemon>>;
  pokeId: string;
  setPokeId: React.Dispatch<React.SetStateAction<string>>;
  pokeModal: null | iPokemon;
  setPokeModal: React.Dispatch<React.SetStateAction<null | iPokemon>>;
  pokemonTeam: iInfos[];
  setPokemonTeam: React.Dispatch<React.SetStateAction<iInfos[]>>;
}

interface iPokemonContextProps {
  children: React.ReactNode;
}

export const PokemonContext = createContext({} as iPokemonContext);

export const PokemonProvider = ({ children }: iPokemonContextProps) => {
  const [pokemonList, setPokemonList] = useState<iPokemon[]>([]);
  const [pokemonData, setPokemonData] = useState<iData[] | string | iPokemon>([{name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}]);
  const [pokeId, setPokeId] = useState('1')
  const [pokeModal, setPokeModal] = useState<null | iPokemon>(null)
  const [pokemonTeam, setPokemonTeam ] = useState<iInfos[]>([])

  return (
    <PokemonContext.Provider
      value={{ pokemonList, setPokemonList, pokemonData, setPokemonData, pokeId, setPokeId, pokeModal, setPokeModal, pokemonTeam, setPokemonTeam }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
