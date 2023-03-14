<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import { StyledLoginPage } from './style';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import Header from '../../components/HeaderLogin';
import LoginForm from '../../components/Form/LoginForm';
import PokeballImg from '../../components/HeaderLogin/PokeballImg';

const LoginPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ opacity: 1 }}
  >
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
      <PokeballImg />
    </StyledLoginPage>
  </motion.div>
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
);

export default LoginPage;
