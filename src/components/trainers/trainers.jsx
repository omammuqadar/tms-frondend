import { Avatar, Text, Button, Paper } from '@mantine/core';

export function TrainerProfile({ avatar, name, email, job, func }) {
  return (
    <div className='masonry-grid__item'>
      <Paper
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        })}
        data-aos="fade-up" data-aos-delay="200"
      >
        <Avatar src={avatar} size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" weight={500} mt="md">
          {name}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {email} • {job}
        </Text>
        <Button variant="default" fullWidth mt="md" onClick={func}>
          Detail
        </Button>
      </Paper>
    </div>
  );
}