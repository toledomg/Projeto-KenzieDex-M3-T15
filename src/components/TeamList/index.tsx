import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledTeamUl } from './style';
import { TeamCard } from './TeamCard';
import { PokemonContext } from '../../providers/PokemonContext';
import { StyledTitle } from '../../styles/typography';

export const TeamList = () => {
  const { pokemonTeam } = useContext(PokemonContext);

  return (
    <StyledTeamUl>
      {pokemonTeam.length !== 0 ? (
        pokemonTeam.map((teamPokemon) => (
          <TeamCard
            name={teamPokemon.pokemonTeam.name}
            key={uuidv4()}
            url={teamPokemon.pokemonTeam.location_area_encounters}
            order={teamPokemon.pokemonTeam.order}
            height={teamPokemon.pokemonTeam.height}
            weight={teamPokemon.pokemonTeam.weight}
            abilities={teamPokemon.pokemonTeam.abilities}
            types={teamPokemon.pokemonTeam.types}
            pokemonId={teamPokemon.id}
          />
        ))
      ) : (
        <div className='empty'>
          <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
            Você ainda não escolheu nenhum Pokémon
          </StyledTitle>
        </div>
      )}
    </StyledTeamUl>
  );
};
