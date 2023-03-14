<<<<<<< HEAD
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
=======
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
import { loginSchema } from './loginSchema';
import { ILoginFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton, StyledButtonLink } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { StyledParagraph } from '../../../styles/typography';

const LoginForm = () => {
<<<<<<< HEAD
=======
  const { isHidden, setIsHidden } = useContext(UserContext);

>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ resolver: yupResolver(loginSchema) });
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Digite seu Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
<<<<<<< HEAD
      <Input
        label='Digite sua Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
=======
      <section className='loginEyePosition'>
        <Input
          label='Digite sua Senha'
          type={isHidden ? 'password' : 'text'}
          register={register('password')}
          error={errors.password}
        />
        <span
          className='eye'
          id='visibility'
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </span>
      </section>
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='yellow'>
        Entrar
      </StyledButton>
      <StyledParagraph textAlign='center' fontColor='white'>
        Crie sua Conta para poder Batalhar com seu time!
      </StyledParagraph>
      <StyledButtonLink
        to='/register'
        $buttonSize='default'
        $buttonStyle='yellow'
      >
        Cadastrar
      </StyledButtonLink>
    </StyledForm>
  );
};

export default LoginForm;
