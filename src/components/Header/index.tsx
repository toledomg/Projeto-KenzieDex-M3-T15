/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, YellowLine } from './style';
import logo from '../../assets/kenzieDex2.png';
import logout from '../../assets/logout icon.png';
import profile from '../../assets/profile icon.png';
import yellowLine from '../../assets/yellowLine.png';
import { UserContext } from '../../providers/UserContext';

const Header = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isDisabled === false) {
      navigate('/team');
      setIsDisabled(true);
    } else if (isDisabled === true) {
      navigate('/home');
      setIsDisabled(false);
    }
  };

  return (
    <>
      <HeaderContainer>
        <section>
          <Link className='redirect' to='/home'>
            <Logo src={logo} alt='Logo' />
          </Link>

          <nav>
            <img
              className='cursor'
              src={profile}
              alt='profile icon'
              onClick={() => handleClick()}
            />
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
function setAttribute(arg0: string) {
  throw new Error('Function not implemented.');
}
