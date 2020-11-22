import { makeStyles, Typography } from '@material-ui/core';
import { purpSquare as PurpSquare } from '../public/purpSquare.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: '5%',
    paddingRight: '5%',
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
  title: {
    fontWeight: 'bold',
  },
}));

const ShoppingListItem = ({ title, complete }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bulletWrapper}>
        <PurpSquare />
      </div>
      <Typography
        variant='body1'
        className={classes.title}
        style={{
          textDecoration: complete ? 'line-through' : 'none',
          color: complete ? 'grey' : '',
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default ShoppingListItem;
