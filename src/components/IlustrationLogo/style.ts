import styled from 'styled-components';

export const StyledIllustrationLogo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;

  .styledBoxLogo {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.gray6};
    border: 1px solid #e0e0e0;
  }
`;
