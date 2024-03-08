'use client';
import { MantineProvider, AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './MobileNavbar.module.css';
import '@mantine/core/styles.css';
import Home from '../components/home/Home';
import About from '../components/about';
import React from 'react';
export default function AppShellComponent() {
  const [opened, { toggle }] = useDisclosure();
    const [currentComponent, setCurrentComponent] = React.useState<string>("component1");
  return (
    <MantineProvider>
        <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}

        >
        <AppShell.Header style={{ backgroundColor: '#363753', height: 80 }}>
            <Group h="100%" px="lg">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
                <p style={{ color: '#5CD2C6', fontSize: 30, fontWeight: 'bold', paddingLeft: 50}}>Tito</p>
                <Group ml="xl" gap={0} visibleFrom="sm">
                <UnstyledButton onClick={() => setCurrentComponent("component1")} className={classes.control}>Home</UnstyledButton>
                <UnstyledButton onClick={() => setCurrentComponent("component2")} className={classes.control}>About</UnstyledButton>
                <UnstyledButton onClick={() => setCurrentComponent("component1")} className={classes.control}>Projects</UnstyledButton>
                <UnstyledButton onClick={() => setCurrentComponent("component1")} className={classes.control}>Download CV</UnstyledButton>
                </Group>
            </Group>
            </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
            <UnstyledButton onClick={() => {setCurrentComponent("component1"), toggle()}} className={classes.control}>Home</UnstyledButton>
            <UnstyledButton onClick={() => {setCurrentComponent("component2"), toggle()} } className={classes.control}>About</UnstyledButton>
            <UnstyledButton onClick={() => setCurrentComponent("component1")} className={classes.control}>Projects</UnstyledButton>
            <UnstyledButton onClick={() => setCurrentComponent("component1")} className={classes.control}>Download CV</UnstyledButton>
        </AppShell.Navbar>

        <AppShell.Main>
            {currentComponent == "component1" ? <Home /> : <About />}
        </AppShell.Main>
        </AppShell>
    </MantineProvider>
  );
}
