import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { Box, CardActionArea } from '@mui/material';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function SdProfile({ avatar, name, title, phone, email, func }) {
  const { classes } = useStyles();
  return (
    <Box sx={{p:3}}>
      <CardActionArea onClick={func}>
        <Group noWrap data-aos="fade-up" data-aos-delay="200">
          <Avatar src={avatar} size={94} radius="md" />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {title}
            </Text>

            <Text fz="lg" fw={500} className={classes.name}>
              {name}
            </Text>

            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {email}
              </Text>
            </Group>

            <Group noWrap spacing={10} mt={5}>
              <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
      </CardActionArea>
    </Box>
  );
}