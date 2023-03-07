import { Link } from 'react-router-dom';
import { StyledRegisterPage } from './style';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import Header from '../../components/HeaderLogin';
import PokeballImg from '../../components/HeaderLogin/PokeballImg';
import RegisterForm from '../../components/Form/RegisterForm';
import { LinkDirect, StyledButtonLink } from '../../styles/button';

<PokeballImg />;
const RegisterPage = () => (
  <StyledRegisterPage>
    <Header />
    <StyledContainer>
      <StyledGridBox>
        <div className='divTitle'>
          <StyledTitle tag='h2' $fontSize='three'>
            Cadastro
          </StyledTitle>
          <Link className='redirect' to='/'>
            Voltar para login
          </Link>
        </div>
        <RegisterForm />
      </StyledGridBox>
    </StyledContainer>
    <PokeballImg />
  </StyledRegisterPage>
);

export default RegisterPage;
