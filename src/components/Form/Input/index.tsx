/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { StyledFieldset, StyledShowPassSpan } from './style';
import { UserContext } from '../../../providers/UserContext';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, type, register, error }: IInputProps) => {
  const { isHidden, setIsHidden } = useContext(UserContext);
  return (
    <StyledFieldset>
      <StyledTextField label={label} type={type} {...register} />
      {error ? (
        <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
      ) : null}
      <StyledShowPassSpan
        id='visibility'
        onClick={() => setIsHidden(!isHidden)}
      >
        {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
      </StyledShowPassSpan>
    </StyledFieldset>
  );
};

export default Input;
