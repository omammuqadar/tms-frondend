import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core';
import {MdOutlineVideoLibrary, MdOutlineGroups} from 'react-icons/md';
import {CgArrowsExchange} from 'react-icons/cg'
import {RiHome2Line} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'
import {BiPencil} from 'react-icons/bi'
import {VscFeedback,VscReport} from 'react-icons/vsc'
import {BsCardChecklist, BsViewList, BsListColumns} from 'react-icons/bs'
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
  { icon: RiHome2Line, label: 'Home', link: '/trainer/home' },
  { icon: BsCardChecklist, label: 'Sessions', link: '/trainer/sessions' },
  { icon: BsViewList, label: 'Session', link: '/trainer/session' },
  { icon: BsListColumns, label: 'Assignment', link: '/trainer/assignment' },
  { icon: VscFeedback, label: 'Feedback', link: '/trainer/feedback' },
  { icon: MdOutlineVideoLibrary, label: 'Videos', link: '/trainer/videos' },
  { icon: BiPencil, label: 'Updates', link: '/trainer/updates' },
  { icon: VscReport, label: 'Reports', link: '/trainer/reports' },
  { icon: MdOutlineGroups, label: 'SdList', link: '/trainer/sdlist' },
];

export function TrainerSidenav() {
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
    <Navbar height={750} width={{ base: 80 }} p="md" data-aos="fade-right" data-aos-delay="100">
      <Center>
        <h4 style={{fontWeight:'900'}}>TMS</h4>
      </Center>
      <p>Trainer</p>
      <Navbar.Section grow mt={40}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={CgArrowsExchange} label="Change account" />
          <NavbarLink icon={CiLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}