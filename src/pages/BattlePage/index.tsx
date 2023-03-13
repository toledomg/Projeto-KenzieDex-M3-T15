/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BattleSectionStyled } from './styles';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import PokeballImgPages from '../../components/HeaderLogin/PokeballImg/lmagePages/lmagePages';
import { PokemonContext } from '../../providers/PokemonContext';
import { apiFake } from '../../services/api';
import { StyledTitle } from '../../styles/typography';
import { TeamDivStyled } from '../TeamPage/style';
import { BattleList } from '../../components/BattleArena/BattleList';

const BattlePage = () => {
  const token = localStorage.getItem('@token');
  const userId = localStorage.getItem('@userID');
  const { setPokemonTeam, pokemonTeam } = useContext(PokemonContext);
  const [statValue, setStatValue] = useState([]);

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

  // console.log(pokemonTeam);

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
        <BattleSectionStyled>
          <h1>teste</h1>
        </BattleSectionStyled>
      </TeamDivStyled>
      <PokeballImgPages />
    </GlobalContainer>
  );
};

export default BattlePage;
