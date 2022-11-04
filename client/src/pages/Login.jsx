import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCall";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
  };

  const handleUsername = (e) =>{
    setUsername(e.target.value)
  }
  
  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }
  return (
    <Container>
      <Wrapper>
        <Title>SE CONNECTER</Title>
        <Form>
          <Input
            type="text" placeholder="username" onChange={handleUsername}/>
          <Input
            placeholder="password" type="password" onChange={handlePassword}/>
          <Button onClick={handleClick} disabled={isFetching}>SE CONNECTER</Button>
          {error && <Error>Identifiant ou mot de passe incorrecte</Error> }
          <Link>MOT DE PASSE OUBLIE?</Link>
          <Link>CREER UN NOUVEAU COMPTE</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
