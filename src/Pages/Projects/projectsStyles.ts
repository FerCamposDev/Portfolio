import { makeStyles } from "@material-ui/core";

const useProjectsStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  // ProjectList
  title: {
    backgroundColor: theme.palette.text.primary,
    color: 'white',
    borderRadius: '30px',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export default useProjectsStyles;
