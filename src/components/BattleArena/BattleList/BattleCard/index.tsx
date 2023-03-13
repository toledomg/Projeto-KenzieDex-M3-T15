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
  stats: IStats[]
}

export const BattleCard = ({ name, url, types, pokemonId }: ITeamCardProps) => {
  const { pokemonTeam } = useContext(PokemonContext);
  const pokedexNumber: string = url.slice(34, -11);
  const [cardBattle, setCardBattle] = useState<IPokemonTeam[]>([]);
  const [statBase, setStatBase] = useState<any[]>([]);
  const [power, setPower] = useState<IPokemonTeam[]>([]);
  const [rival, setRival] = useState<IRival>([]);
  const [rivalPower, setRivalPower] = useState<IRivalInfo[]>([]);

  const addToCardBattle = (currentPokemon: number) => {
    setCardBattle(
      pokemonTeam.filter((pokemon) => pokemon.id === currentPokemon)
    );
  };
  console.log(cardBattle);
  

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const loadRival = async () => {
      try {
        const response = await api.get(`pokemon/4`);
        setRival(response.data);
        /* console.log(response.data); */
      } catch (error) {
        console.log(error);
      }
    };
    loadRival();
  }, []);

  console.log(rival.stats[0].base_stat);
  

  const opponent = rival.stats.reduce((total, stat) => {
      if (stat.base_stat) {
       
        
        setRivalPower((total += stat.base_stat));
       
      
      return total; 
    }, 0);
  
  


  useEffect(() => {
    cardBattle.map((pokeTeam) => {
      pokeTeam.pokemonTeam.stats.reduce((total , stat ) => {
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
