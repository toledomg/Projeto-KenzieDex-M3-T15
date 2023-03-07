import {  useContext } from 'react';


import { PokemonContainer } from './style';
import SimpleCard from '../../components/SimpleCard';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import { PokemonContext } from '../../providers/PokemonContext';

const Dashboard = () => {
  const { pokemonList } = useContext(PokemonContext)

  return (
    <GlobalContainer>
      <Header/>
      <PokemonContainer>
      {pokemonList.map((pokemon) =>  (
          <SimpleCard key={pokemon.name} url={pokemon.url} name={pokemon.name}/>
        )
      )}
      </PokemonContainer>

    </GlobalContainer>
  )
  }

export default Dashboard;
