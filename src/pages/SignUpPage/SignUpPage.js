import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGN_UP_URL } from '../../constants/urls';
import logo from '../../assets/images/Logo.png';

function SignUpPage() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    name: '',
    image: '',
    password: ''
  })

  function handleForm(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function SignUp(e) {
    e.preventDefault();
    console.log(user);
    axios.post(SIGN_UP_URL, user)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  }


  return (
    <PageContainer>
      <img src={logo} alt='' />
      <Form onSubmit={SignUp}>
        <Input
          type='email'
          placeholder='email'
          name='email'
          value={user.email}
          onChange={handleForm}
          required>
        </Input>

        <Input
          type='password'
          placeholder='senha'
          name='password'
          value={user.password}
          onChange={handleForm}
          required>
        </Input>

        <Input
          type='text'
          placeholder='nome'
          name='name'
          value={user.nome}
          onChange={handleForm}
          required>
        </Input>

        <Input
          type='text'
          placeholder='foto'
          name='image'
          value={user.image}
          onChange={handleForm}
          required>
        </Input>

        <Button type='submit'>Cadastrar</Button>
      </Form>
      <Link to='/'>
        <ButtonSwap>Já tem uma conta? Faça login!</ButtonSwap>
      </Link>
    </PageContainer>
  );
}

export default SignUpPage;

const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 180px;
    margin: 33px;
  } 
`;

const Form = styled.form`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  font-family: 'Lexend Deca', sans-serif;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin: 3px;
  box-sizing: border-box;

  &::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
  }
`;

const Button = styled.button`
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  height: 45px;
  font-size: 21px;
  line-height: 26px;
  color: #FFFFFF;
  background-color: #52B6FF;
  border-radius: 5px;
  margin: 3px;
  border: none;
  outline: none;
`;

const ButtonSwap = styled.button`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
  line-height: 17px;
  margin: 22px;
  box-sizing: border-box;
  text-decoration-line: underline;
  background-color: transparent;
  color: #52B6FF;
  border: none;
  outline: none;
`;
