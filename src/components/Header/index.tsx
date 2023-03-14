<<<<<<< HEAD
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
=======
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { MdCatchingPokemon } from 'react-icons/md';
import { TbPokeball } from 'react-icons/tb';
import { HeaderContainer, Logo, YellowLine } from './style';
import logo from '../../assets/kenzieDex2.png';
import yellowLine from '../../assets/yellowLine.png';
import { UserContext } from '../../providers/UserContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);

  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <HeaderContainer>
        <section>
          <Link className='redirect' to='/home'>
            <Logo src={logo} alt='Logo' onClick={refreshPage} />
          </Link>

          <nav>
            <Link to='/home'>
              <RiHome2Line />
            </Link>
            <Link to='/team'>
              <TbPokeball />
            </Link>
            <Link to='/battle'>
              <MdCatchingPokemon />
            </Link>
            <Link to='/' onClick={() => userLogout()}>
              <IoExitOutline />
            </Link>
          </nav>
        </section>
      </HeaderContainer>
      <YellowLine src={yellowLine} alt='yellow line' />
    </>
  );
};

export default Header;
function setAttribute(arg0: string) {
  throw new Error('Function not implemented.');
}
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
