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
  IRival,
  IRivalInfo,
  PokemonContext,
} from '../../../../providers/PokemonContext';
import { api } from '../../../../services/api';
import BattleTeam from '../../BattleTeam';



export const BattleCard = ({ name, url, types, pokemonId }: ITeamCardProps) => {
  const { pokemonTeam, power, setPower, opponent, setOpponent, setStatBase, statBase } = useContext(PokemonContext);
  const pokedexNumber: string = url.slice(34, -11);
  const [cardBattle, setCardBattle] = useState<IPokemonTeam[]>([]);
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
  /* console.log(`Oponente ${statBase}`); */
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
    // eslint-disable-next-line array-callback-return
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
      <BattleTeam/>
      
    </StyledCardCard>
  );
};
