import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StyledRegisterPage } from './style';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import Header from '../../components/HeaderLogin';
import PokeballImg from '../../components/HeaderLogin/PokeballImg';
import RegisterForm from '../../components/Form/RegisterForm';

<PokeballImg />;
const RegisterPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ opacity: 1 }}
  >
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
  </motion.div>
);

export default RegisterPage;
