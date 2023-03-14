/* eslint-disable array-callback-return */
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
import { PokemonContext } from '../../../../providers/PokemonContext';
import { api } from '../../../../services/api';

export const BattleCard = ({ name, url, types, pokemonId }: ITeamCardProps) => {
  const {
    pokemonTeam,
    power,
    setPower,
    statBase,
    setStatBase,
    cardBattle,
    setCardBattle,
  } = useContext(PokemonContext);
  const pokedexNumber: string = url.slice(34, -11);

  const { yourPokemon, setYourPokemon, opponent, setOpponent } =
    useContext(PokemonContext);

  useEffect(() => {
    if (opponent !== undefined) {
      setStatBase(
        opponent!.stats.reduce((total: any, stat: { base_stat: any }) => {
          if (stat.base_stat) {
            setPower((total += stat.base_stat));
          }
          return total;
        }, 0)
      );
    }
  }, [opponent]);

  function getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }
  const loadRival = async () => {
    try {
      const response = await api.get(`pokemon/${getRandomInt(904)}`);
      setOpponent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectPokemon = (currentPokemon: number) => {
    pokemonTeam.filter((pokemon) => {
      if (pokemon.id === currentPokemon) {
        setYourPokemon(pokemon.pokemonTeam);
      }
    });
    loadRival();
  };

  useEffect(() => {
    if (yourPokemon !== null) {
      yourPokemon.stats.reduce((total: any, stat: { base_stat: any }) => {
        if (stat.base_stat) {
          setPower((total += stat.base_stat));
        }
        return total;
      }, 0);
    }
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
        <StyledRemovePokemon onClick={() => selectPokemon(pokemonId)}>
          Battle with rival
        </StyledRemovePokemon>
        <StyledPokemonImageCard
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokedexNumber}.png`}
          alt={name}
        />
      </StyledDivCard>
    </StyledCardCard>
  );
};
