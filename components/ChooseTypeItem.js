import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',
  },
}));

const ChooseTypeItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.typeItem}>
        <Typography>Ideas & Tasks</Typography>
      </div>
      <div className={classes.typeItem}>
        <Typography>Shopping</Typography>
      </div>
    </div>
  );
};

export default ChooseTypeItem;
