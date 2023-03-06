import { StyledIllustrationLogo } from './style';
import LogoKenzieDex from '../../assets/LogoKenzieDex.png';

function IlustrationLogo() {
  return (
    <StyledIllustrationLogo>
      <img src={LogoKenzieDex} alt='logo-kenziedex' className='logo' />
    </StyledIllustrationLogo>
  );
}

export default IlustrationLogo;
