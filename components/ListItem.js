import { makeStyles, Typography } from '@material-ui/core';
import { purpSquare as PurpSquare } from '../public/purpSquare.svg';
import { yellowSquare as YellowSquare } from '../public/yellowSquare.svg';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '15%',
    marginBottom: '.5rem',
    width: '100%',
  },
  bulletWrapper: {
    marginRight: '.5rem',
    marginTop: '.1rem',
  },
}));

const ListItem = ({ title, type }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bulletWrapper}>
        {type === 'idea' ? <YellowSquare /> : <PurpSquare />}
      </div>
      <Typography variant='body1' style={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
    </div>
  );
};

export default ListItem;
