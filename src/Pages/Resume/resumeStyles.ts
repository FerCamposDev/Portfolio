import { makeStyles } from "@material-ui/core";

const useResumeStyles = makeStyles((theme) => ({
  photo: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  marginTop: {
    marginTop: '10px',
  },
  marginTopCenter: {
    marginTop: '10px',
    textAlign: "center",
  },
  leftGrid: {
    paddingRight: theme.spacing(2),
    color: 'black'
  },
  rightGrid: {
    background: theme.palette.text.primary,
    color: 'white',
    padding: '2em',
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  divider: {
    borderTop: '3px solid',
    borderTopColor: theme.palette.primary.dark,
    width: '100%'
  }, 
  shortDivider: {
    borderTop: '3px solid',
    borderTopColor: theme.palette.primary.light,
    width: '50%'
  },
  p: {
    fontSize: theme.spacing(2),
  },
  download: {
    marginTop: theme.spacing(2),
  }
}));

export default useResumeStyles;