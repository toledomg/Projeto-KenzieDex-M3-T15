/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  const { setPokemonTeam } = useContext(PokemonContext);

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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 1 }}
      >
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
      </motion.div>
    </>
  );
};

export default BattlePage;
