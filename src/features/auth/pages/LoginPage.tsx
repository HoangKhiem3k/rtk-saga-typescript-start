import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import { history } from 'utils/HistoryRouter';
import { authAction, selectIsLogging } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3), //16px
  },
}));
export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(selectIsLogging);
  React.useEffect(() => {
    if (localStorage.getItem('access_token')) {
      history.push('/admin');
    }
    return;
  }, []);

  const handleLogin = () => {
    // get username + password from input
    dispatch(
      authAction.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student management
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            {isLogging && <CircularProgress size={20} color="secondary" />} Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
