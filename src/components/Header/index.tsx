import { HeaderContainer, Logo } from './style'
import logo from '../../assets/kenzieDex2.png'
import logout from '../../assets/logout icon.png'
import profile from '../../assets/profile icon.png'
import yellowLine from '../../assets/yellowLine.png'

const Header = () => (
 <>
 <HeaderContainer>
   <Logo src={logo} alt='Logo' />

   <div>
   <img src={profile} alt='profile icon' />
   <img src={logout} alt='logout icon' />
   </div>

 </HeaderContainer>
   <img src={yellowLine} alt='yellow line'/>
   </>
)

export default Header