import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Group,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCookie, setCookie } from '../../../hooks/useCookie';
import { decrypt } from '../../../hooks/useSecurity';
import CryptoJS from 'crypto-js';

export function Login() {
  
  const [result, setResult] = useState(false);
  const [data, setData] = useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = useState({
    email:'',
    password:'',
  });

  // Get
  const handleSubmit = () => {

    const loginuser = data.filter(e => e.email == values.email);
    
    if(loginuser) {
      setTimeout(() => {
        setResult(true)
        setCookie('id', CryptoJS.AES.encrypt(loginuser[0].id, '123').toString(),30)
        setCookie('role', CryptoJS.AES.encrypt(loginuser[0].role, '123').toString(),30)
      }, 2000);
    }else {
      setResult(false)
    }

  };

  // Get
  useEffect(() => {

    const xhr = new XMLHttpRequest();
    const url = `http://localhost:5000/backend/user/`;
  
    xhr.open('GET', url, true);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setData(response);
        } else {
        }
      }
    };
  
    xhr.send();

  }, [result]);

  return (
    <Container size={420} my={40} data-aos="fade-up" data-aos-delay="200">
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Link to="/account/register">
          <Anchor size="sm" component="button">
            Create Account
          </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email"  placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          Sign In
        </Button>
      </Paper>
    </Container>
  );
}