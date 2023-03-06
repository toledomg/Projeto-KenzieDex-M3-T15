import styled from 'styled-components';

interface IStyledContainerProps {
  containerWidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  width: 100%;
  max-width: ${({ containerWidth }) => containerWidth || 450}px;

  min-width: 320px;
  margin: 0 auto;
  padding: 10px;
`;

export const StyledGridBox = styled.div`
  padding: 20px;
  background: #dedede10;
  border: 2px solid #ffcc0110;
  border-radius: 5px;
`;
