/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, YellowLine } from './style';
import logo from '../../assets/kenzieDex2.png';
import logout from '../../assets/logout icon.png';
import profile from '../../assets/profile icon.png';
import yellowLine from '../../assets/yellowLine.png';
import { UserContext } from '../../providers/UserContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate()

  return (
    <>
      <HeaderContainer>
        <section>
          <Logo src={logo} alt='Logo' />

          <nav>
            <img src={profile} alt='profile icon' onClick={() => navigate('/team')}/>
            <img
              className='cursor'
              src={logout}
              alt='logout icon'
              onClick={() => userLogout()}
            />
          </nav>
        </section>
      </HeaderContainer>
      <YellowLine src={yellowLine} alt='yellow line' />
    </>
  );
};

export default Header;
