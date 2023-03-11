import { PokemonContainer } from './style';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import SearchInput from '../../components/SearchInput';

import PokemonList from '../../components/PokemonList';
import PokeballImgPages from '../../components/HeaderLogin/PokeballImg/lmagePages/lmagePages';

const Dashboard = () => (
  <GlobalContainer>
    <Header />
    
    <SearchInput/>
    
    <PokemonContainer>
      <PokemonList />
    </PokemonContainer>
    <PokeballImgPages />
  </GlobalContainer>
);
export default Dashboard;
