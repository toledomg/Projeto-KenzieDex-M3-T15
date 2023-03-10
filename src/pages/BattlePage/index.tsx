import React from 'react';
import Header from '../../components/Header';
import { GlobalContainer } from '../../components/Header/style';
import PokeballImg from '../../components/HeaderLogin/PokeballImg';

const BattlePage = () => (
  <GlobalContainer>
    <Header />
    {/* Coloque aqui seu container */}
    <PokeballImg />
  </GlobalContainer>
);

export default BattlePage;
