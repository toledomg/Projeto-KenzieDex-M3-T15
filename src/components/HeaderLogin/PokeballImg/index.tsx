/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PokeBall from './../../../assets/pokeball.svg';
import { StyledPokeballDiv } from './styles';

const PokeballImg = () => (
  <StyledPokeballDiv className='pokeball-Bg'>
    <img src={PokeBall} alt='image de uma pokeball' />
  </StyledPokeballDiv>
);

export default PokeballImg;
