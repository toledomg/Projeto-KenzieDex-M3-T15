/* eslint-disable no-lone-blocks */
import {useEffect, useContext } from 'react'
import { PokemonContext } from '../../providers/PokemonContext';
import { api } from '../../services/api';
import PokeModal from '../PokeModal';
import SimpleCard from '../SimpleCard';

const PokemonList = () => {
  
  const {setPokemonList, pokemonList, pokeModal, pokemonTeam  } = useContext(PokemonContext)

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await api.get('/pokemon?limit=20');
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadPokemons();
  }, []);


  return (
    <>

    {pokemonList.map((pokemon) =>  (
      <SimpleCard id={pokemon.name} pokemon={pokemon} key={pokemon.name} url={pokemon.url} name={pokemon.name}/>
      )
      )}
      {pokeModal && <PokeModal/>}
    </>
  )
}


export default PokemonList