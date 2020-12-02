import {
  Button,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useLists } from '../../lib/listsContext';
import { LST_logo as Logo } from '../../public/LST_logo.svg';
import { purpLines as PurpLines } from '../../public/purpLines.svg';
import { INITIALIZE_IDEATE_LIST } from '../../lib/reducers/listsReducerTypes';
import { useRouter } from 'next/router';

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
  const [title, setTitle] = useState('');
  const list = useLists();
  const router = useRouter();

  const { dispatch } = list;

  const handleChange = (e) => {
    if (title.length <= 100) {
      setTitle(e.target.value);
    } else {
      alert('Title must not be longer than 100 characters.');
      setTitle(title.slice(0, 99));
    }
  };

  const handleDone = () => {
    dispatch({ action: INITIALIZE_IDEATE_LIST, payload: title });
    // router.push('/');
    console.log(`Title is ${title} and was dispatched...`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.content}>
        <CustomTextField
          multiline
          fullWidth
          value={title}
          onChange={handleChange}
        />
        <div>
          <Typography variant='body1'>name shopping your list</Typography>
        </div>
        {title !== '' && (
          <div>
            <Button
              variant='outlined'
              style={{ color: '#612bf3', borderColor: '#612bf3' }}
              onClick={handleDone}
            >
              <Typography variant='h4'>DONE</Typography>
            </Button>
          </div>
        )}
      </div>
      <div className={classes.purpLinesWrapper}>
        <PurpLines className={classes.purpLines} />
      </div>
    </div>
  );
};

export default ShopList;
