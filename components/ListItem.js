import { makeStyles, Typography } from '@material-ui/core';
import { purpSquare as PurpSquare } from '../public/purpSquare.svg';
import { yellowSquare as YellowSquare } from '../public/yellowSquare.svg';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '5%',
    marginBottom: '.5rem',
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  bulletWrapper: {
    marginRight: '.5rem',
    marginTop: '.1rem',
  },
  listText: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
}));

const ListItem = ({ title, type }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bulletWrapper}>
        {type === 'idea' ? <YellowSquare /> : <PurpSquare />}
      </div>
      <Typography variant='body1' className={classes.listText}>
        {title}
      </Typography>
    </div>
  );
};

export default ListItem;
