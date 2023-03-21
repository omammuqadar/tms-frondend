import { useState } from 'react';
import { createStyles, Navbar, Group, Code, getStylesRef, rem } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import {MdOutlineGroup,MdOutlineGroups} from 'react-icons/md';
import {CgArrowsExchange} from 'react-icons/cg'
import {RiHome2Line, RiBuildingLine} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'
import {HiSpeakerphone} from 'react-icons/hi'
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}));

// const data = [
//   { link: '', label: 'Notifications', icon: IconBellRinging },
//   { link: '', label: 'Billing', icon: IconReceipt2 },
//   { link: '', label: 'Security', icon: IconFingerprint },
//   { link: '', label: 'SSH Keys', icon: IconKey },
//   { link: '', label: 'Databases', icon: IconDatabaseImport },
//   { link: '', label: 'Authentication', icon: Icon2fa },
//   { link: '', label: 'Other Settings', icon: IconSettings },
// ];

const data = [
  { icon: RiHome2Line, label: 'Home', link: '/trainer/home' },
  { icon: HiSpeakerphone, label: 'Sessions', link: '/trainer/sessions' },
  { icon: HiSpeakerphone, label: 'Session', link: '/trainer/session' },
  { icon: HiSpeakerphone, label: 'Assignment', link: '/trainer/assignment' },
  { icon: HiSpeakerphone, label: 'Feedback', link: '/trainer/feedback' },
  { icon: HiSpeakerphone, label: 'Videos', link: '/trainer/videos' },
  { icon: HiSpeakerphone, label: 'Updates', link: '/trainer/updates' },
  { icon: HiSpeakerphone, label: 'Reports', link: '/trainer/reports' },
  { icon: HiSpeakerphone, label: 'SdList', link: '/trainer/sdlist' },
];

export function TrainerSidenav() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" data-aos="fade-right" data-aos-delay="100">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          {/* <MantineLogo size={28} /> */}
          <h4>TMS</h4>
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="./" className={classes.link} onClick={(event) => event.preventDefault()} alt="image">
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="./" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}