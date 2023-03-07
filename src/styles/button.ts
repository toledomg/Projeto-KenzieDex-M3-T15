import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $buttonSize: 'default' | 'medium';
  $buttonStyle: 'yellow' | 'blue';
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;

  border-radius: 8px;

  transition: 0.4s;

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'default':
        return css`
          padding: 0 30px;
          height: 60px;
        `;
      case 'medium':
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
  }}

  ${({ theme, $buttonStyle }) => {
    switch ($buttonStyle) {
      case 'yellow':
        return css`
          color: ${theme.colors.gray4};
          background: ${theme.colors.primary.default};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'blue':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.secondary.default};
          &:hover {
            color: ${theme.colors.white};
            background: ${theme.colors.secondary.hover};
          }
        `;
    }
  }}

.trash {
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
`;

export const LinkDirect = styled(Link)``;
