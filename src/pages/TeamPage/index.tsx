import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TeamDivStyled } from './style';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import { StyledTitle } from '../../styles/typography';
import { TeamList } from '../../components/TeamList';
import { apiFake } from '../../services/api';
import { PokemonContext } from '../../providers/PokemonContext';

const TeamPage = () => {
  const token = localStorage.getItem('@token');
  const userId = localStorage.getItem('@userID');
  const { setPokemonTeam, pokemonTeam } = useContext(PokemonContext);

  useEffect(() => {
    if (userId){
        const getTeam = async () => {
        try {
          const response = await apiFake.get('teams', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setPokemonTeam(response.data)
          
        } catch (error) {
          console.log(error)
        }
      } 
      getTeam()
      }
  }, [])

  return (
    <GlobalContainer>
      <Header />

      <TeamDivStyled>
        <div>
        <StyledTitle tag='h2' $fontSize='one'>
          Your Team
        </StyledTitle>
        <Link className='redirect' to='/home'>
            Voltar para Home
          </Link>
          </div>
        <TeamList />
      </TeamDivStyled>
    </GlobalContainer>
  );
};

export default TeamPage;
