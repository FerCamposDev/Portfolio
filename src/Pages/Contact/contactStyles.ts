import { makeStyles } from "@material-ui/core";

const useContactStyles = makeStyles((theme) => ({
  photo: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    marginTop: '10px',
    borderRadius: '30px'
  },
  marginTop: {
    paddingTop: '20px',
  },
  main: {
    background: 'black',
    color: 'white',
    padding: '2em',
    borderRadius: '20px',
  },
  divider: {
    borderTop: '3px solid',
    borderTopColor: theme.palette.primary.dark,
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    }
  }
}));

export default useContactStyles;
