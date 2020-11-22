import { makeStyles, Typography } from '@material-ui/core';
import Head from 'next/head';
import ListComponent from '../components/ListComponent';
import LST_logo from '../public/LST_logo.svg';
import { rectangleOutline as RectangleOutline } from '../public/rectangleOutline.svg';

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
    fontSize: '24px',
  },
  bottomSection: {
    marginTop: 'auto',
    height: '10vh',
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
  },
}));

export default function Home() {
  const classes = useStyles();
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
      </div>
      <div className={classes.bottomSection}>
        <RectangleOutline className={classes.rectangleOutline} />
        <Typography align='right' className={classes.newButton}>
          NEW
        </Typography>
      </div>
    </div>
  );
}
