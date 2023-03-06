import React from 'react';
import { StyledHeader } from './style';
import { StyledContainer } from '../../styles/grid';
import IlustrationLogo from '../IlustrationLogo';

const Header = () => (
  <StyledHeader>
    <StyledContainer containerWidth={1200}>
      <IlustrationLogo />
    </StyledContainer>
  </StyledHeader>
);

export default Header;
