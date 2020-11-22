import { makeStyles, Typography } from '@material-ui/core';
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
  },
  headerSection: {
    marginTop: '3rem',
  },
  headerText: {
    fontFamily: "'Dosis', 'Arial'",
    fontSize: '24px',
  },
  typeSelectionSection: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ChooseType = () => {
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
          choose Type
        </Typography>
      </div>
      <div className={classes.typeSelectionSection}>
        <div className={classes.typeItem}>
          <Typography>Ideas & Tasks</Typography>
        </div>
        <div className={classes.typeItem}>
          <Typography>Shopping</Typography>
        </div>
      </div>
    </div>
  );
};

export default ChooseType;
