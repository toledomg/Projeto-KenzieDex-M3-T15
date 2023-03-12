import { useContext, useState } from 'react';
import {
  StyledCardCard,
  StyledDivCard,
  StyledSectionCard,
  StyledPokemonImageCard,
  StyledPokemonId,
  StyledPokemonName,
  StyledRemovePokemon,
} from './style';
import { ITeamCardProps } from '../../../providers/@types';
import { iInfos, PokemonContext } from '../../../providers/PokemonContext';

interface IBattle {
  pokeBattle: iInfos;
}

export const BattleCard = ({ name, url, types, pokemonId }: ITeamCardProps) => {
  const pokedexNumber: string = url.slice(34, -11);
  const { pokemonTeam, removePokemon } = useContext(PokemonContext);
  const [cardBattle, setCardBattle] = useState<null | ITeamCardProps>(null);

  const addToCardBattle = (currentPokemon: number) => {
    const pokeBattle = pokemonTeam.filter(
      (pokemon) => pokemon.id === currentPokemon
    );
    localStorage.setItem('@myPokeBattle', pokeBattle);
    console.log(pokeBattle);
  };

  return (
    <StyledCardCard>
      <StyledDivCard>
        <StyledSectionCard>
          <StyledPokemonName>
            {name[0].toUpperCase() + name.slice(1)}
          </StyledPokemonName>

          <StyledPokemonId>
            {types[0].type.name[0].toUpperCase() + types[0]!.type.name.slice(1)}
          </StyledPokemonId>
        </StyledSectionCard>

        <StyledRemovePokemon>Battle from rival</StyledRemovePokemon>

        <StyledPokemonImageCard
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokedexNumber}.png`}
          alt={name}
        />
      </StyledDivCard>

      {/* <StyledPokemonInformation>
        <h1>Pokedex Data</h1>

        <StyledInformation>
          <span>Order:</span>
          <span>{formatPokemonId(order)}</span>
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
      </StyledPokemonInformation> */}
    </StyledCardCard>
  );
};
