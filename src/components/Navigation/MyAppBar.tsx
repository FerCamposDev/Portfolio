import clsx from 'clsx';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Grid, Hidden } from '@material-ui/core';

import useWordings from '../../i18n/wordings';
import LanguageSwitch from './LanguageSwitch';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  divider: {
    width: "3px",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  linkButton: {
    textDecoration: 'none',
    color: 'white',
  }
}));
interface Props {
  open: boolean
  handleDrawerOpen: () => void
}

const MyAppBar = ({ open, handleDrawerOpen }: Props) => {
  const wordings = useWordings();
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        <Grid container>
          <Link to="/home" className={classes.linkButton} >
            <Button color='inherit'>
              {wordings.menu.home}
            </Button>
          </Link>
        </Grid>

        <Hidden smDown>
          <Grid container justify="flex-end" alignItems="center">
            <Link to="/resume" className={classes.linkButton} >
              <Button color='inherit'>
                {wordings.menu.resume}
              </Button>
            </Link>
            <Link to="/projects" className={classes.linkButton} >
              <Button color='inherit'>
                {wordings.menu.projects}
              </Button>
            </Link>
            <Link to="/contact" className={classes.linkButton} >
              <Button color='inherit'>
                {wordings.menu.contact}
              </Button>
            </Link>
            <Divider orientation="vertical" flexItem className={classes.divider} />
            <Grid item>
              <LanguageSwitch />
            </Grid>
          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar;
