import {
  Button,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { LST_logo as Logo } from '../../public/LST_logo.svg';
import { yellowLines as YellowLines } from '../../public/yellowLines.svg';
import { useState } from 'react';

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
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    if (title.length <= 100) {
      setTitle(e.target.value);
    } else {
      alert('Title must not be longer than 100 characters.');
      setTitle(title.slice(0, 99));
    }
  };
  return (
    <div className={classes.root}>
      <Link href='/'>
        <div className={classes.header}>
          <Logo className={classes.logo} />
        </div>
      </Link>
      <div className={classes.content}>
        <CustomTextField
          multiline
          fullWidth
          value={title}
          onChange={handleChange}
        />
        <div>
          <Typography variant='body1'>name your list</Typography>
        </div>

        {title !== '' && (
          <div>
            <Button
              variant='outlined'
              style={{ color: '#ffcf3d', borderColor: '#ffcf3d' }}
            >
              <Typography variant='h4'>DONE</Typography>
            </Button>
          </div>
        )}
      </div>
      <div className={classes.yellowLinesWrapper}>
        <YellowLines className={classes.yellowLines} />
      </div>
    </div>
  );
};

export default Ideate;
