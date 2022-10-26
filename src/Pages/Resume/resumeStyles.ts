import { makeStyles } from "@material-ui/core";

const useResumeStyles = makeStyles((theme) => ({
  photo: {
    width: theme.spacing(45),
    height: theme.spacing(45),
  },
  marginTop: {
    marginTop: '10px',
  },
  marginTopCenter: {
    marginTop: '20px',
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
    margin: theme.spacing(0,2),
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
