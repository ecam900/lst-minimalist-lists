import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  layoutRoot: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.layoutRoot}>{children}</div>;
};

export default Layout;
