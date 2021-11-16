import { makeStyles } from "@material-ui/core";

const useProjectsStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
  // ProjectCard
  
}));

export default useProjectsStyles;
