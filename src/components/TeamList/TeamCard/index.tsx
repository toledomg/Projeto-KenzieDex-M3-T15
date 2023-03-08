import React from 'react';
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

interface iSimpleCardProps {
  name: string;
  id: string;
}

export const TeamCard = ({ name, id }: iSimpleCardProps) => {
  const add = 1;

  return (
    <StyledCardTeam id={id}>

      <StyledDivTeam>

        <StyledSectionTeam>

          <StyledPokemonName>
            {name[0].toUpperCase() + name.slice(1)}
          </StyledPokemonName>

          <StyledPokemonId>#1</StyledPokemonId>
        </StyledSectionTeam>

        <StyledRemovePokemon>Remove from team</StyledRemovePokemon>

        <StyledPokemonImageTeam
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'
          alt={name}
        />
      </StyledDivTeam>

      <StyledPokemonInformation>
        <h1>Pokedex Data</h1>

        <StyledInformation>
          <span>Order:</span>
          <span>#3</span>
        </StyledInformation>

        <StyledInformation>
          <span>Height:</span>
          <span>66 ft</span>
        </StyledInformation>

        <StyledInformation>
          <span>Weight:</span>
          <span>1000 kg</span>
        </StyledInformation>

        <StyledInformation>
          <span>Main ability:</span>
          <span>OverGrow</span>
        </StyledInformation>
      </StyledPokemonInformation>
    </StyledCardTeam>
  );
};
