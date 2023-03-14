import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
<<<<<<< HEAD
=======
import { StyledFieldset } from './style';
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, type, register, error }: IInputProps) => (
<<<<<<< HEAD
  <fieldset>
=======
  <StyledFieldset>
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
    <StyledTextField label={label} type={type} {...register} />
    {error ? (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    ) : null}
<<<<<<< HEAD
  </fieldset>
=======
  </StyledFieldset>
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
);

export default Input;
