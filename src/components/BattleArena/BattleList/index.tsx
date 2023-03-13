import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledTeamUl } from './style';
import { BattleCard } from './BattleCard';
import { PokemonContext } from '../../../providers/PokemonContext';
import { StyledTitle } from '../../../styles/typography';

export const BattleList = () => {
  const token = localStorage.getItem('@token');

  const { pokemonTeam, setPokemonTeam } = useContext(PokemonContext);

  return (
    <StyledTeamUl>
      {pokemonTeam.length !== 0 ? (
        pokemonTeam.map((teamPokemon) => (
          <BattleCard
            name={teamPokemon.pokemonTeam.name}
            key={uuidv4()}
            url={teamPokemon.pokemonTeam.location_area_encounters}
            types={teamPokemon.pokemonTeam.types}
            pokemonId={teamPokemon.id}
            order={0}
            height={0}
            weight={0}
            abilities={[]}
          />
        ))
      ) : (
        <div className='empty'>
          <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
            Seu time ainda não tem nenhum pokémon!
          </StyledTitle>
          <StyledTitle tag='h2' $fontSize='three' textAlign='center'>
            Volte a Pagina Team e adicione pokémon
          </StyledTitle>
        </div>
      )}
    </StyledTeamUl>
  );
};
