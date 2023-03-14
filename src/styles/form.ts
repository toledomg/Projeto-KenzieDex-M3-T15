import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
<<<<<<< HEAD
=======

  position: relative;
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: #dedede10;
    border-radius: 8px;
<<<<<<< HEAD
=======
    color: ${({ theme }) => theme.colors.gray0};
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
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
