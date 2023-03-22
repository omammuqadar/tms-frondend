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
import { Link } from 'react-router-dom';

export function Login() {

  const handleSubmit = () => {

  }

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
        <TextInput label="Email"  placeholder="you@trianleariningmanagement.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          Sign In
        </Button>
        <Group grow mb="md" mt="md">
        {/* <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton> */}
      </Group>
      </Paper>
    </Container>
  );
}