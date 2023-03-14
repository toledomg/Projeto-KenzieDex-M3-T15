/* eslint-disable no-lone-blocks */
import { useEffect, useContext, useRef, useState } from 'react';
import { PokemonContext } from '../../providers/PokemonContext';
import { api } from '../../services/api';
import InfinityScroll from '../InfinityScroll';
import PokeModal from '../PokeModal';
import SearchModal from '../SearchModal';
import SimpleCard from '../SimpleCard';

const PokemonList = () => {
  const { setPokemonList, pokemonList, pokeModal, searchModal } = useContext(PokemonContext);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    const loadPokemons = async (page: number, limit = 100) => {
      try {
        const response = await api.get('pokemon', {
          params: {
            limit,
            offset: page * 10,
          },
        });
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadPokemons(pagina);
  }, [pagina]);

  return (
    <>
      <InfinityScroll
        callback={() => setPagina((previousPage) => previousPage - 1)}
      />
      {pokemonList.map((pokemon) => (
        <SimpleCard
          id={pokemon.name}
          pokemon={pokemon}
          key={pokemon.name}
          url={pokemon.url}
          name={pokemon.name}
        />
      ))}

      {pokeModal && <PokeModal />}
      {searchModal && <SearchModal />}
      <InfinityScroll
        callback={() => setPagina((previousPage) => previousPage + 1)}
      />
    </>
  );
};

export default PokemonList;
