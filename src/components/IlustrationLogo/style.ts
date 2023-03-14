import styled from 'styled-components';

export const StyledIllustrationLogo = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 20px;
  gap: 30px;

  .styledBoxLogo {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.gray6};
    border: 1px solid #e0e0e0;
  }

  img {
    width: 300px;
  }
`;
