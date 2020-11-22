import { makeStyles, Typography } from '@material-ui/core';
import { LST_logo as Logo } from '../../public/LST_logo.svg';
import { LST_rectangle_purps as PurpsRectangle } from '../../public/LST_rectangle_purps.svg';
import { thin_purps_line as ThinLine } from '../../public/thin_purps_line.svg';
import { useRouter } from 'next/router';
import ShoppingListItem from '../../components/ShoppingListItem';

const listItems = [
  { title: 'MoonDestroyer 3000', complete: false },
  {
    title: 'My First Medieval trebuchet by FisherPrice',
    complete: false,
  },
  {
    title:
      'Milk, eggs, cheese, samurai sword, one of those glasses fixing kits they sell by the register.',
    complete: false,
  },
  { title: "At-a-glance DeathRay by L'Oreal", complete: true },
];

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
  purpRectangleTopWrapper: {
    position: 'absolute',
    width: '100vw',
    top: '-1%',
  },
  purpRectangleTop: {
    width: '100vw',
  },
  listTitleSection: {
    marginTop: '10%',
    // backgroundColor: 'cyan',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      width: '70vw',
    },
  },
  listTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  thinLine: {
    width: '100%',
  },
  listContentSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '2rem',
    [theme.breakpoints.up('lg')]: {
      width: '70vw',
    },
  },
}));

const ShoppingList = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.listTitleSection}>
        <Typography
          align='center'
          className={classes.listTitle}
          variant='body1'
        >
          Stuff to buy to take over the world
        </Typography>
        <ThinLine className={classes.thinLine} />
      </div>

      <div className={classes.listContentSection}>
        {listItems.map((item, i) => (
          <ShoppingListItem
            key={i}
            title={item.title}
            complete={item.complete}
          />
        ))}
      </div>

      <div className={classes.purpRectangleTopWrapper}>
        <PurpsRectangle className={classes.purpRectangleTop} />
      </div>
    </div>
  );
};

export default ShoppingList;
