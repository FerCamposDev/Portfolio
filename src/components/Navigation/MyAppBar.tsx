import clsx from 'clsx';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useWordings from '../../i18n/wordings';
import useMyAppBarStyles from './myAppBarStyles';
import LanguageSwitch from './LanguageSwitch';

interface Props {
  open: boolean
  handleDrawerOpen: () => void
}

const MyAppBar = ({ open, handleDrawerOpen }: Props) => {
  const wordings = useWordings();
  const classes = useMyAppBarStyles();

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
          <Grid container justifyContent="flex-end" alignItems="center">
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
