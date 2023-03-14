/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BattleContainer, CardContainer, PokemonBattleCard } from './styles';

import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import PokeballImgPages from '../../components/HeaderLogin/PokeballImg/lmagePages/lmagePages';
import { PokemonContext } from '../../providers/PokemonContext';
import { apiFake } from '../../services/api';
import { StyledTitle } from '../../styles/typography';
import { TeamDivStyled } from '../TeamPage/style';
import { BattleList } from '../../components/BattleArena/BattleList';
import { toasts } from '../../styles/toast';

const BattlePage = () => {
  const token = localStorage.getItem('@token');
  const userId = localStorage.getItem('@userID');

  const {
    power,
    statBase,
    setPokemonTeam,
    yourPokemon,
    setYourPokemon,
    opponent,
    pokemonTeam,
    setCardBattle,
    setStatBase,
  } = useContext(PokemonContext);

  const [statValue, setStatValue] = useState([]);

  function OpponentStats() {
    const stats = opponent?.stats.reduce(
      (acc, current) => acc + current.base_stat,
      0
    );
    setStatBase(stats);
  }

  const addToCardBattle = (currentPokemon: number) => {
    setCardBattle(
      pokemonTeam.filter((pokemon) => pokemon.id === currentPokemon)
    );

    OpponentStats();

    const theWinner =
      power! > statBase!
        ? toasts('success', `You WIN with ${power} points x ${statBase} points`)
        : toasts(
            'error',
            `You LOOSE with ${power} points x ${statBase} points`
          );
  };

  useEffect(() => {
    if (userId) {
      const getTeam = async () => {
        try {
          const response = await apiFake.get('teams', {
            params: {
              userId,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPokemonTeam(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getTeam();
    }
  }, []);

  return (
    <GlobalContainer>
      <Header />
      <TeamDivStyled>
        <div>
          <StyledTitle tag='h2' $fontSize='one'>
            Battle
          </StyledTitle>
          <Link className='redirect' to='/team'>
            Voltar para Team
          </Link>
        </div>
        <BattleList />
        <BattleContainer>
          {yourPokemon !== null ? (
            <>
              <CardContainer>
                <PokemonBattleCard>
                  {yourPokemon ? (
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${yourPokemon?.id}.png`}
                      alt={yourPokemon?.name}
                    />
                  ) : (
                    <h1>?</h1>
                  )}

                  {yourPokemon ? (
                    <span>
                      {yourPokemon.name[0].toUpperCase() +
                        yourPokemon.name.slice(1)}
                    </span>
                  ) : (
                    <span />
                  )}
                </PokemonBattleCard>
                <span>Your Pokémon</span>
              </CardContainer>
              <div>
                <h1>Vs</h1>

                <button onClick={() => addToCardBattle(yourPokemon!.id)}>
                  Battle!
                </button>
              </div>
              <CardContainer>
                <PokemonBattleCard>
                  {opponent ? (
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${opponent?.id}.png`}
                      alt={opponent?.name}
                    />
                  ) : (
                    <h1>?</h1>
                  )}

                  {opponent ? (
                    <span>
                      {opponent.name[0].toUpperCase() + opponent.name.slice(1)}
                    </span>
                  ) : (
                    <span />
                  )}
                </PokemonBattleCard>
                <span>Rival</span>
              </CardContainer>
            </>
          ) : (
            <div />
          )}
        </BattleContainer>
      </TeamDivStyled>
      <PokeballImgPages />
    </GlobalContainer>
  );
};

export default BattlePage;
