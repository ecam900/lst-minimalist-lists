import { makeStyles, Typography } from '@material-ui/core';
import ListItem from './ListItem';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.5rem',
    // backgroundColor: 'red',
    width: '80%',
  },
}));

const ListComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem title={'Idea List Should Be Yellow'} type={'idea'} />
      <ListItem
        title={'Shopping List Should be Purps'}
        type={'shopping'}
      />
    </div>
  );
};

export default ListComponent;
