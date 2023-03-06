import React from 'react';
import { StyledHeader } from './style';
import LogoKenzieDex from '../../assets/LogoKenzieDex.png';
import { StyledContainer } from '../../styles/grid';

const Header = () => (
  <StyledHeader>
    <StyledContainer containerWidth={1200}>
      <div className='flexGrid'>
        <img src={LogoKenzieDex} alt='logo-kenziedex' className='logo' />
        <nav className='nav' role='navigation'>
          {console.log('aqui')}
        </nav>
      </div>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
