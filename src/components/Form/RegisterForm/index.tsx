/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { registerSchema } from './registerSchema';
import { IRegisterFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const RegisterForm = () => {
  const [cadIsHidden, setCadIsHidden] = useState(true);
  const [cadConfirmIsHidden, setCadConfirmIsHidden] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({ resolver: yupResolver(registerSchema) });
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Digite seu Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
      <Input
        label='Digite seu Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <section className='registerEyePosition'>
        <Input
          label='Digite sua Senha'
          type={cadIsHidden ? 'password' : 'text'}
          register={register('password')}
          error={errors.password}
        />
        <span
          className='eye'
          id='visibility'
          onClick={() => setCadIsHidden(!cadIsHidden)}
        >
          {cadIsHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </span>
      </section>
      <section className='registerEyePosition'>
        <Input
          label='Confirme sua Senha'
          type={cadConfirmIsHidden ? 'password' : 'text'}
          register={register('passwordConfirm')}
          error={errors.passwordConfirm}
        />
        <span
          className='eye'
          id='visibility'
          onClick={() => setCadConfirmIsHidden(!cadConfirmIsHidden)}
        >
          {cadConfirmIsHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </span>
      </section>

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='yellow'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
