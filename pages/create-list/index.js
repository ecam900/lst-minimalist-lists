import { makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';
import LST_logo from '../../public/LST_logo.svg';
import { LST_rectangle_yellow as LSTRectangle } from '../../public/LST_rectangle_yellow.svg';
import { SHP_rectangle_purps as SHPRectangle } from '../../public/SHP_rectangle_purps.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logoWrapper: {
    width: '100vw',
  },
  logo: {
    width: '100%',
    height: 'auto',
    maxHeight: '30vh',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  contentSection: {
    height: 'auto',
    minHeight: '70vh',
  },
  headerSection: {
    marginTop: '2rem',
    height: 'auto',
    minHeight: '5vh',
  },
  headerText: {
    fontFamily: "'Dosis', 'Arial'",
    fontSize: '1.3rem',
  },
  typeSelectionSection: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    marginLeft: '18%',
    marginTop: '2rem',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  },
  typeItem: {
    marginBottom: '8%',
    position: 'relative',
    height: 'auto',
    '&:hover': { cursor: 'pointer' },
    // backgroundColor: 'red',
    width: 'auto',
  },
  typeItemText: {
    fontWeight: 'bold',
    zIndex: 2,
  },
  svgLineWrapper: {
    position: 'absolute',
    bottom: '-5%',
    width: 'auto',
    zIndex: -1,
  },
  svgLine: {
    width: '85%',
  },
}));

const ChooseType = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link href='/'>
        <div className={classes.logoWrapper}>
          <LST_logo className={classes.logo} />
        </div>
      </Link>

      <div className={classes.contentSection}>
        <div className={classes.headerSection}>
          <Typography align='center' className={classes.headerText}>
            choose Type
          </Typography>
        </div>
        <div className={classes.typeSelectionSection}>
          <Link href='/create-list/ideate'>
            <div className={classes.typeItem}>
              <Typography variant='h5' className={classes.typeItemText}>
                Ideas & Tasks
              </Typography>
              <div className={classes.svgLineWrapper}>
                <LSTRectangle className={classes.svgLine} />
              </div>
            </div>
          </Link>
          <Link href='/create-list/shop-list'>
            <div className={classes.typeItem}>
              <Typography variant='h5' className={classes.typeItemText}>
                Shopping
              </Typography>
              <div className={classes.svgLineWrapper}>
                <SHPRectangle className={classes.svgLine} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseType;
