import {
  Card,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
  rem,
} from '@mantine/core';
import { Chip } from '@mui/material';
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

export function Program({data}) {
  const { classes, theme } = useStyles();

  const programHTML = data.map(key => {
    return (
      <>
        <div className='masonry-grid__item'>
          <Card withBorder radius="md" p="md" className={classes.card} data-aos="fade-up" data-aos-delay="200">
            <Card.Section>
              {/* <Image src={image} alt={name} height={180} /> */}
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group position="apart">
                <Text fz="lg" fw={500}>
                  {key.name}
                </Text>
                <Badge size="sm">{key.start_date}</Badge>
                <Badge size="sm">{key.end_date}</Badge>
              </Group>
              <Text fz="sm" mt="xs">
                {key.description}
              </Text>
            </Card.Section>

            <Group mt="xs">
              <Link >
                <Button radius="md" onClick={key.func} style={{ flex: 1 }}>
                  Detail
                </Button>
              </Link>
            </Group>
          </Card>
        </div>
      </>
    )
  })

  return (
   <>
    {programHTML}
   </>
  );
}

export function ProgramSm({data}) {
  const { classes, theme } = useStyles();

  const programHTML = data.map(key => {
    return (
      <>
        <div className='masonry-grid__item'>
          <Card withBorder radius="md" p="md" className={classes.card} data-aos="fade-up" data-aos-delay="200">

            <Card.Section className={classes.section}>
              <Text mt="md" className={classes.label} style={{textAlign:'left'}} c="dimmed">
                {key.name}
              </Text>
              <Text fz="sm" mt="xs"  style={{textAlign:'left'}}>
                {key.description}
              </Text>
            </Card.Section>

          </Card>
        </div>
      </>
    )
  })

  return (
   <>
    {programHTML}
   </>
  );
}