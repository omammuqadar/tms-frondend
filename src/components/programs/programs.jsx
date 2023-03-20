// import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));


export function Program({ image, title, description, sessionLink }) {
  const { classes, theme } = useStyles();

  // const features = badges.map((badge) => (
  //   <Badge
  //     color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
  //     key={badge.label}
  //     leftSection={badge.emoji}
  //   >
  //     {badge.label}
  //   </Badge>
  // ));

  return (
    <div className='masonry-grid__item'>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text fz="lg" fw={500}>
              {title}
            </Text>
            {/* <Badge size="sm">{country}</Badge> */}
          </Group>
          <Text fz="sm" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} c="dimmed">
            Perfect for you, if you enjoy
          </Text>
          <Group spacing={7} mt={5}>
            
          </Group>
        </Card.Section>

        <Group mt="xs">
          <Link to={sessionLink}>
            <Button radius="md" style={{ flex: 1 }}>
              Sessions
            </Button>
          </Link>
          {/* <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </Card>
    </div>
  );
}