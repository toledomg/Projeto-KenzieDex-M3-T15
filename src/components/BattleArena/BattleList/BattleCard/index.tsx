/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { useContext, useEffect, useState } from 'react';
import {
  StyledCardCard,
  StyledDivCard,
  StyledSectionCard,
  StyledPokemonImageCard,
  StyledPokemonId,
  StyledPokemonName,
  StyledRemovePokemon,
} from './style';
import { ITeamCardProps } from '../../../../providers/@types';
import {
  iInfos,
  IPokemonTeam,
  PokemonContext,
} from '../../../../providers/PokemonContext';
import { api } from '../../../../services/api';

interface IStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IRival {
  stats: IStats[];
  location_area_encounters: string;
  url: string;
  types: { slot: number; type: { name: string; url: string } }[];
  name: string;
  id: number;
  order: number;
  height: number;
  weight: number;
  abilities: { slot: number; ability: { name: string; url: string } }[];
}

interface IRivalInfo {
  stats: IStats[];
}

export const BattleCard = ({ name, url, types, pokemonId }: ITeamCardProps) => {
  const { pokemonTeam } = useContext(PokemonContext);
  const pokedexNumber: string = url.slice(34, -11);
  const [cardBattle, setCardBattle] = useState<IPokemonTeam[]>([]);
  const [statBase, setStatBase] = useState<number | undefined>(0);
  const [power, setPower] = useState<IPokemonTeam[]>([]);
  const [opponent, setOpponent] = useState<IRival | undefined>();
  const [opponentPower, setOpponentPower] = useState<IRivalInfo[]>([]);

  function OpponentStats() {
    const stats = opponent?.stats.reduce(
      (acc, current) =>
        /* console.log(current.base_stat); */

        acc + current.base_stat,
      0
    );
    setStatBase(stats);
  }
  console.log(`Oponente ${statBase}`);
  console.log(`Meu pokemon ${power}`);
  
  
  
  const addToCardBattle = (currentPokemon: number) => {
    setCardBattle(
      pokemonTeam.filter((pokemon) => pokemon.id === currentPokemon)
    );
    OpponentStats();
  };

  function getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const loadRival = async () => {
      try {
        const response = await api.get(`pokemon/${getRandomInt(904)}`);
        setOpponent(response.data);

      } catch (error) {
        console.log(error);
      }
    };
    loadRival();
  }, [statBase]);


  useEffect(() => {
    cardBattle.map((pokeTeam) => {
      pokeTeam.pokemonTeam.stats.reduce((total: any , stat: { base_stat: any; }) => {
        if (stat.base_stat) {
          setPower((total += stat.base_stat));
        }
        return total;
      }, 0);
    });
  }, [cardBattle]);

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

        <StyledRemovePokemon onClick={() => addToCardBattle(pokemonId)}>
          Battle from rival
        </StyledRemovePokemon>

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
