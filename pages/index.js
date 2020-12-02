import { makeStyles, Typography } from '@material-ui/core';
import Head from 'next/head';
import ListComponent from '../components/ListComponent';
import LST_logo from '../public/LST_logo.svg';
import { rectangleOutline as RectangleOutline } from '../public/rectangleOutline.svg';
import Link from 'next/link';
import { useLists } from '../lib/listsContext';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  logoWrapper: {
    width: '100vw',
  },
  logo: {
    width: '100%',
    height: 'auto',
    maxHeight: '30vh',
  },
  headerSection: {
    marginTop: '3rem',
  },
  headerText: {
    fontFamily: "'Dosis', 'Arial'",
    fontSize: '1.5rem',
  },
  bottomSection: {
    marginTop: 'auto',
    height: '10%',
    display: 'flex',
    position: 'relative',
  },
  rectangleOutline: {
    position: 'absolute',
    right: '-50px',
    bottom: '-25%',
  },
  listsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  newButton: {
    fontFamily: "'Josefin Slab', 'Arial'",
    fontWeight: 'bold',
    fontSize: '36px',
    width: '100%',
    position: 'absolute',
    bottom: '5%',
    right: '15px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const list = useLists();

  useEffect(() => {
    console.log('List name:');
    console.log(list.name);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.logoWrapper}>
        <LST_logo className={classes.logo} />
      </div>

      <div className={classes.headerSection}>
        <Typography
          align='center'
          className={classes.headerText}
          variant='body1'
        >
          your Lists
        </Typography>
      </div>
      <div className={classes.listsSection}>
        <ListComponent />
        <div>Name: {list.name}</div>
      </div>
      <div className={classes.bottomSection}>
        <RectangleOutline className={classes.rectangleOutline} />
        <Link href='/create-list'>
          <Typography align='right' className={classes.newButton}>
            <a>NEW</a>
          </Typography>
        </Link>
      </div>
    </div>
  );
}
