/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, YellowLine } from './style';
import logo from '../../assets/kenzieDex2.png';
import logout from '../../assets/logout icon.png';
import profile from '../../assets/profile icon.png';
import yellowLine from '../../assets/yellowLine.png';
import { UserContext } from '../../providers/UserContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <>
      <HeaderContainer>
        <Link className='redirect' to='/home'>
          <Logo src={logo} alt='Logo' />
        </Link>

        <div>
          <Link className='redirect' to='/team'>
            <img src={profile} alt='profile icon' />
          </Link>
          <img
            className='cursor'
            src={logout}
            alt='logout icon'
            onClick={() => userLogout()}
          />
        </div>
      </HeaderContainer>
      <YellowLine src={yellowLine} alt='yellow line' />
    </>
  );
};

export default Header;
