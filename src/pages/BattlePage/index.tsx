import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import PokeballImg from '../../components/HeaderLogin/PokeballImg';
import PokeballImgPages from '../../components/HeaderLogin/PokeballImg/lmagePages/lmagePages';
import { TeamList } from '../../components/TeamList';
import { PokemonContext } from '../../providers/PokemonContext';
import { apiFake } from '../../services/api';
import { StyledTitle } from '../../styles/typography';
import { TeamDivStyled } from '../TeamPage/style';

const BattlePage = () => {
  const token = localStorage.getItem('@token');
  const userId = localStorage.getItem('@userID');
  const { setPokemonTeam, pokemonTeam } = useContext(PokemonContext);

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
      </TeamDivStyled>
      <PokeballImgPages />
    </GlobalContainer>
  );
};

export default BattlePage;
