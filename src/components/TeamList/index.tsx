import { useContext, useEffect } from 'react';
import { StyledTeamUl } from './style';
import { TeamCard } from './TeamCard';
import { apiFake } from '../../services/api';
import { PokemonContext } from '../../providers/PokemonContext';

export const TeamList = () => {
  const token = localStorage.getItem('@token');

  const { pokemonTeam, setPokemonTeam } = useContext(PokemonContext);

  useEffect(() => {
    const renderPokemonTeam = async () => {
      console.log(pokemonTeam);
      try {
        const response = await apiFake.get('teams', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    renderPokemonTeam();
  }, []);

  return (
    <StyledTeamUl>
      {pokemonTeam.map((teamPokemon) => (
        <TeamCard
          key={teamPokemon.id}
          name={teamPokemon.name}
          id={teamPokemon.id}
          url={teamPokemon.location_area_encounters}
          order={teamPokemon.order}
          height={teamPokemon.height}
          weight={teamPokemon.weight}
          abilities={teamPokemon.abilities}
          types={teamPokemon.types}
        />
      ))}
    </StyledTeamUl>
  );
};
