import { Box, makeStyles } from '@material-ui/core';
import { Header } from 'components/Common';
import Dashboard from 'features/dashboard';
import Students from 'features/students';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,
    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: 'main',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
  },
}));

export function AdminLayout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/students" element={<Students />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}
