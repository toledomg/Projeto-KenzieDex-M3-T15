/* eslint-disable import/no-useless-path-segments */
/* eslint-disable jsx-a11y/img-redundant-alt */
import PokeBall from './../../../../assets/pokeball.svg';
import { StyledPokeballPage } from './styles';

const PokeballImgPages = () => (
  <StyledPokeballPage className='pokeball-Bg'>
    <img src={PokeBall} alt='image de uma pokeball' />
  </StyledPokeballPage>
);

export default PokeballImgPages;
