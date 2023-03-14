/* eslint-disable default-case */
import styled, { css } from 'styled-components';
import BaseTitle from './components/BaseTitle';

interface IStyledTitleProps {
  $fontSize: 'one' | 'two' | 'three' | 'four';
  textAlign?: 'center' | 'left' | 'right';
}

interface IStyledParagraphProps {
  fontColor?: 'white' | 'red';
  textAlign?: 'center' | 'left' | 'right';
}

export const StyledTitle = styled(BaseTitle)<IStyledTitleProps>`
<<<<<<< HEAD
  width: 100%;
=======
  /* width: 100%; */
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
  color: ${({ theme }) => theme.colors.primary.default};

  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.6;
  margin-bottom: 20px;

  text-align: ${({ textAlign }) => textAlign};

  // eslint-disable-next-line consistent-return
  ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'one':
        return css`
          font-size: 1.55rem;
          font-weight: 600;
        `;
      case 'two':
        return css`
          font-size: 1.35rem;
          font-weight: 600;
        `;

      case 'three':
        return css`
          font-size: 1.15rem;
          font-weight: 600;
        `;

      case 'four':
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}
`;

export const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontColor, theme }) => {
    switch (fontColor) {
      case 'white':
        return css`
<<<<<<< HEAD
          color: ${theme.colors.gray0};
=======
          color: ${theme.colors.gray1};
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
        `;
      case 'red':
        return css`
          color: ${theme.colors.feedback.negative};
        `;
      default:
        return css`
          color: ${theme.colors.gray4};
        `;
    }
  }}

  strong {
    font-weight: 600;
  }
`;

export const StyledCaption = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 400;
`;
