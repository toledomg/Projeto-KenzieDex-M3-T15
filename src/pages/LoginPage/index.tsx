import { StyledLoginPage } from './style';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import Header from '../../components/HeaderLogin';
import LoginForm from '../../components/Form/LoginForm';

const LoginPage = () => (
  <StyledLoginPage>
    <Header />
    <StyledContainer>
      <StyledGridBox>
        <StyledTitle tag='h2' $fontSize='three'>
          Login
        </StyledTitle>
        <LoginForm />
      </StyledGridBox>
    </StyledContainer>
  </StyledLoginPage>
);

export default LoginPage;
