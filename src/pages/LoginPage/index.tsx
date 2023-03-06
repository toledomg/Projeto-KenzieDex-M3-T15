import { StyledLoginPage } from './style';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import Header from '../../components/Header';
import LoginForm from '../../components/Form/LoginForm';

const LoginPage = () => (
  <StyledLoginPage>
    <Header />
    <StyledContainer>
      <StyledTitle tag='h2' $fontSize='three'>
        Login
      </StyledTitle>
      <StyledGridBox>
        <LoginForm />
      </StyledGridBox>
    </StyledContainer>
  </StyledLoginPage>
);

export default LoginPage;
