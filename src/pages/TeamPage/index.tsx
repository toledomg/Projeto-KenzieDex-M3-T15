import { TeamDivStyled } from './style';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import { StyledTitle } from '../../styles/typography';
import { TeamList } from '../../components/TeamList';

const TeamPage = () => {
  const add = 1;

  return (
    <GlobalContainer>
      <Header />

      <TeamDivStyled>
        <StyledTitle tag='h2' $fontSize='one'>
          Your Team
        </StyledTitle>

        <TeamList />
      </TeamDivStyled>
    </GlobalContainer>
  );
};

export default TeamPage;
