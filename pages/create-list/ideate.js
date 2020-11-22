import {
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import { LST_logo as Logo } from '../../public/LST_logo.svg';
import { yellowLines as YellowLines } from '../../public/yellowLines.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  header: {
    height: 'auto',
    maxHeight: '4vh',
  },

  logo: {
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '70vw',
      maxWidth: '70vw',
    },
    // backgroundColor: 'red',
  },
  yellowLinesWrapper: {
    position: 'absolute',
    width: '90vw',
    bottom: '-1%',
    [theme.breakpoints.up('lg')]: {
      width: '70vw',
      maxWidth: '70vw',
    },
  },
  yellowLines: {
    width: '100%',

    // height: 'auto',
    // maxHeight: '5vh',
  },
}));

const CustomTextField = withStyles({
  root: {
    '& label.MuiInput-underline': {
      color: '#ffcf3d',
    },
    '& label.Mui-focused': {
      color: '#ffcf3d',
    },
    '& .MuiInput-underline': {
      borderBottomColor: '#ffcf3d',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#ffcf3d',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#ffcf3d',
    },
    '& .MuiInput-underline:hover': {
      borderBottomColor: '#ffcf3d',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffcf3d',
    },
    '& .MuiInputBase-input': {
      textAlign: 'center',
      fontSize: '2rem',
      paddingTop: '.5rem',
    },
  },
})(TextField);

const Ideate = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.content}>
        <CustomTextField multiline fullWidth />
        <div>
          <Typography variant='caption'>name your list</Typography>
        </div>
      </div>
      <div className={classes.yellowLinesWrapper}>
        <YellowLines className={classes.yellowLines} />
      </div>
    </div>
  );
};

export default Ideate;
