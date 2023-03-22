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
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Link } from 'react-router-dom';

export function Register() {

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


  const data = {
    user: values.name,
    email: values.email,
    password: values.password,
    role: values.role
  };

  const instance = axios.create({
    baseURL: 'http://localhost:5000'
  });

  
  const handleSubmit = () => {

    instance.post('/backend/user', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
    });
    // 

  }

  useEffect(() => {

    // instance.get('/backend/user', data)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    // });

  }, []);

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
            <FormControlLabel value="female" control={<Radio size='small'/>} label="Admin" />
            <FormControlLabel value="male" control={<Radio size='small'/>} label="Trainer" />
            <FormControlLabel value="other" control={<Radio size='small'/>} label="Student" />
          </RadioGroup>
        </FormControl>
        <TextInput label="Name" value={values.name} onChange={handleChange('name')} placeholder="farhan" required mt="md" />
        <TextInput label="Email" value={values.email} onChange={handleChange('email')}  placeholder="you@trianleariningmanagement.dev" required mt="md" />
        <PasswordInput label="Password" value={values.password} onChange={handleChange('password')}  placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Create Account
        </Button>
      </Paper>
    </Container>
  );
}