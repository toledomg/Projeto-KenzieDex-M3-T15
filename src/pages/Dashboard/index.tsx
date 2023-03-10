import { PokemonContainer } from './style';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';

import PokemonList from '../../components/PokemonList';
import PokeballImgPages from '../../components/HeaderLogin/PokeballImg/lmagePages/lmagePages';

const Dashboard = () => (
  <GlobalContainer>
    <Header />

    <PokemonContainer>
      <PokemonList />
    </PokemonContainer>
    <PokeballImgPages />
  </GlobalContainer>
);
export default Dashboard;
