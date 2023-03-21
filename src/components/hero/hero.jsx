import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: rem(200),
    paddingBottom: rem(120),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  const text = [
    {
      mainText:"Training Management System", 
      description:"Training Management System for Khyber Pakhtunkhwa Employment Program (KPYEP) is a web-based platform designed to facilitate the administration of training sessions, assignments, and user interactions"
    }
  ]

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title} data-aos="fade-up" data-aos-delay="100">
          {text[0].mainText}
        </h1>

        <Text className={classes.description} color="dimmed" data-aos="fade-up" data-aos-delay="200">
          {text[0].description}
        </Text>

        <Group className={classes.controls} data-aos="fade-up" data-aos-delay="400">
          {/* <Link to="/account/register">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Register
            </Button>
          </Link>*/}
          <Link to="/account/login">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Login
            </Button>
          </Link> 
          <Link to="/admin/home">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Admin
            </Button>
          </Link>
          <Link to="/sd/home">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Student
            </Button>
          </Link>
          <Link to="/trainer/home">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Trainer
            </Button>
          </Link>
          {/* <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button> */}
        </Group>
      </Container>
    </div>
  );
}