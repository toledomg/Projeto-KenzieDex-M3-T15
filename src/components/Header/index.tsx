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
          <Link className='redirect' to='/home' title='KenzieDex'>
            <Logo src={logo} alt='Logo' onClick={refreshPage} />
          </Link>

          <nav>
            <Link to='/home' title='Go to page Home page'>
              <RiHome2Line />
            </Link>
            <Link to='/team' title='Go to page Team page'>
              <TbPokeball />
            </Link>
            <Link to='/battle' title='Go to page Battle page'>
              <MdCatchingPokemon />
            </Link>
            <Link to='/' onClick={() => userLogout()} title='Log out'>
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
