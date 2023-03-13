import { motion } from 'framer-motion';
import { PokemonContainer } from './style';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import SearchInput from '../../components/SearchInput';

import PokemonList from '../../components/PokemonList';
import PokeballImgPages from '../../components/HeaderLogin/PokeballImg/lmagePages/lmagePages';

const Dashboard = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ opacity: 1 }}
  >
    <GlobalContainer>
      <Header />

      <SearchInput />

      <PokemonContainer>
        <PokemonList />
      </PokemonContainer>
      <PokeballImgPages />
    </GlobalContainer>
  </motion.div>
);
export default Dashboard;
