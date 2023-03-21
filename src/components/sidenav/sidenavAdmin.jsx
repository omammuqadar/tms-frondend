import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core';
import {MdOutlineGroup,MdOutlineGroups} from 'react-icons/md';
import {CgArrowsExchange} from 'react-icons/cg'
import {RiHome2Line, RiBuildingLine} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'

import {HiSpeakerphone} from 'react-icons/hi'
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));


function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: RiHome2Line, label: 'Home', link: '/admin/home' },
  { icon: RiBuildingLine, label: 'Programs', link: '/admin/programs' },
  { icon: HiSpeakerphone, label: 'Sessions', link: '/admin/sessions' },
  { icon: MdOutlineGroup, label: 'Trainers', link: '/admin/trainers' },
  { icon: MdOutlineGroups, label: 'Students', link: '/admin/sds' },
];

export function AdminSidenav() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <>
    <Link to={link.link}>
      <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={() => setActive(index)}
      />
    </Link>
    </>
  ));

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Center>
        <h4 style={{fontWeight:'900'}}>TMS</h4>
      </Center>
      <p>Admin</p>
      <Navbar.Section grow mt={80}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <Link to={'/account/register'}>
            <NavbarLink icon={CgArrowsExchange} label="Change account" />
          </Link>
          <Link to={'/account/login'}>
            <NavbarLink icon={CiLogout} label="Logout" />
          </Link>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}



