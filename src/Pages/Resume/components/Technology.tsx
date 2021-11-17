import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 0,
  },
});

interface TecnologyProps {
  name: string
  level: number
};

export default function CustomizedProgressBars(props: TecnologyProps) {
  const { name, level } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3} >
          <p>{name}</p>
        </Grid>
        <Grid item xs={9} >
          <BorderLinearProgress variant="determinate" value={level} />
        </Grid>
      </Grid>
    </div>
  );
}