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

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Link } from 'react-router-dom';

export function Register() {
  return (
    <Container size={420} my={40}>
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
          >
            <FormControlLabel value="female" control={<Radio size='small'/>} label="Admin" />
            <FormControlLabel value="male" control={<Radio size='small'/>} label="Trainer" />
            <FormControlLabel value="other" control={<Radio size='small'/>} label="Student" />
          </RadioGroup>
        </FormControl>
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          Create Account
        </Button>
      </Paper>
    </Container>
  );
}