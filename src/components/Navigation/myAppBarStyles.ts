import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useMyAppBarStyles = makeStyles((theme) => ({
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

export default useMyAppBarStyles;
