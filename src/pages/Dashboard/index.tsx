import { PokemonContainer } from './style';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';


import PokemonList from '../../components/PokemonList';

const Dashboard = () => (
    <GlobalContainer>
      <Header/>

      <PokemonContainer>
        <PokemonList/>
      </PokemonContainer>
  
    </GlobalContainer>
  )

export default Dashboard;