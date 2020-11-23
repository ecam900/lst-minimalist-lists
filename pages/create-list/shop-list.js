import {
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import { LST_logo as Logo } from '../../public/LST_logo.svg';
import { purpLines as PurpLines } from '../../public/purpLines.svg';

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
    marginTop: '.5rem',
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
  },

  purpLinesWrapper: {
    position: 'absolute',
    width: '90vw',
    bottom: '-1%',
    [theme.breakpoints.up('lg')]: {
      width: '70vw',
      maxWidth: '70vw',
    },
    height: 'auto',
  },
  purpLines: {
    width: '100%',
  },
}));

const CustomTextField = withStyles({
  root: {
    '& label.MuiInput-underline': {
      color: '#612bf3',
    },
    '& label.Mui-focused': {
      color: '#612bf3',
    },
    '& .MuiInput-underline': {
      borderBottomColor: '#612bf3',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#612bf3',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#612bf3',
    },
    '& .MuiInput-underline:hover': {
      borderBottomColor: '#612bf3',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#612bf3',
    },
    '& .MuiInputBase-input': {
      textAlign: 'center',
      fontSize: '2rem',
      lineHeight: '2rem',
      padding: '1rem 5vw 0 5vw',
    },
  },
})(TextField);

const ShopList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.content}>
        <CustomTextField multiline fullWidth />
        <div>
          <Typography variant='caption'>
            name shopping your list
          </Typography>
        </div>
      </div>
      <div className={classes.purpLinesWrapper}>
        <PurpLines className={classes.purpLines} />
      </div>
    </div>
  );
};

export default ShopList;
