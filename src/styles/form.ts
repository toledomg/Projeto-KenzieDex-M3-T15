import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: #dedede10;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.gray0};
  }

  label {
    color: #f8f9fa50;
  }

  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary.default};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colors.primary.default}!important;
      outline-color: ${({ theme }) => theme.colors.primary.default}!important;
    }
  }
`;
