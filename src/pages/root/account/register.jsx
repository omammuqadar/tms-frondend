import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Link } from 'react-router-dom';
import { getCookie, setCookie } from '../../../hooks/useCookie';
import { decrypt } from '../../../hooks/useSecurity';


export function Register() {

  const [result, setResult] = useState(false);
  const [data, setData] = useState('');

  // backend

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = useState({
    name:'',
    email:'',
    password:'',
    role:'',
  });
  
  const handleSubmit = () => {

    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:5000/backend/user/';
    const data = values;
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 201) {
          const response = JSON.parse(xhr.responseText);
          setCookie('id', CryptoJS.AES.encrypt(response.token, '123').toString(),30)
          setResult(true)
        } else {
          console.log(xhr.responseText); // handle error
        }
      }
    };
    
    xhr.send(JSON.stringify(data));

  }
  
  // Get
  useEffect(() => {

    const id = decrypt(getCookie('id'));
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:5000/backend/user?id=${id}`;
  
    xhr.open('GET', url, true);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response); // do something with the response
          setData(response);
        } else {
          console.log(xhr.responseText); // handle error
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
        Create Account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Link to="/account/login">
          <Anchor size="sm" component="button">
            Login
          </Anchor>
        </Link>
      </Text>
      {result === false && 
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleChange('role')} 
            value={values.role}
          >
            <FormControlLabel value="Admin" control={<Radio size='small'/>} label="Admin" />
            <FormControlLabel value="Trainer" control={<Radio size='small'/>} label="Trainer" />
            <FormControlLabel value="Student" control={<Radio size='small'/>} label="Student" />
          </RadioGroup>
        </FormControl>
        <TextInput label="Name" value={values.name} onChange={handleChange('name')} placeholder="farhan" required mt="md" />
        <TextInput label="Email" value={values.email} onChange={handleChange('email')}  placeholder="you@trianleariningmanagement.dev" required mt="md" />
        <PasswordInput label="Password" value={values.password} onChange={handleChange('password')}  placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Create Account
        </Button>
      </Paper>
      }
      {result === true && 
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {data.name}
        <Button fullWidth mt="xl" >
          Create Account
        </Button>
      </Paper>
      }
    </Container>
  );
}