import React, { useContext } from 'react';
import {
  StyledCardTeam,
  StyledDivTeam,
  StyledInformation,
  StyledPokemonId,
  StyledPokemonImageTeam,
  StyledPokemonInformation,
  StyledPokemonName,
  StyledRemovePokemon,
  StyledSectionTeam,
} from './style';
import { ITeamCardProps } from '../../../providers/@types';
import { PokemonContext } from '../../../providers/PokemonContext';

export const TeamCard = ({
  name,
  id,
  url,
  order,
  height,
  weight,
  abilities,
  types,
  pokemonId,
}: ITeamCardProps) => {
  const pokedexNumber: string = url.slice(34, -11);

  const { removePokemon } = useContext(PokemonContext);

  return (
    <StyledCardTeam id={id}>
      <StyledDivTeam>
        <StyledSectionTeam>
          <StyledPokemonName>
            {name[0].toUpperCase() + name.slice(1)}
          </StyledPokemonName>

          <StyledPokemonId>
            {types[0].type.name[0].toUpperCase() + types[0]!.type.name.slice(1)}
          </StyledPokemonId>
        </StyledSectionTeam>

        <StyledRemovePokemon onClick={() => removePokemon(pokemonId)}>
          Remove from team
        </StyledRemovePokemon>

        <StyledPokemonImageTeam
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokedexNumber}.png`}
          alt={name}
        />
      </StyledDivTeam>

      <StyledPokemonInformation>
        <h1>Pokedex Data</h1>

        <StyledInformation>
          <span>Order:</span>
          <span>#{order}</span>
        </StyledInformation>

        <StyledInformation>
          <span>Height:</span>
          <span>{height / 10}m</span>
        </StyledInformation>

        <StyledInformation>
          <span>Weight:</span>
          <span>{weight / 10}kg</span>
        </StyledInformation>

        <StyledInformation>
          <span>Main ability:</span>
          <span>
            {abilities[0].ability.name[0].toUpperCase() +
              abilities[0]!.ability.name.slice(1)}
          </span>
        </StyledInformation>
      </StyledPokemonInformation>
    </StyledCardTeam>
  );
};
