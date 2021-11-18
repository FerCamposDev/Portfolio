import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useWordings from '../../../i18n/wordings';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

interface ProjectCardProps {
  image: string
  title: string
  description: string
  git: string
  demo: string
}

export default function ProjectCard(props: ProjectCardProps) {
  const { image, title, description, git, demo } = props;
  const classes = useStyles();
  const wordings = useWordings();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={`Project-${title}`}
        height="180"
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.links}>
        <a href={git} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
          <Button color='primary' variant='contained'>
            GitHub
          </Button>
        </a>
        <a href={demo ? demo : undefined} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
          <Button color='primary' variant='contained' disabled={!demo}>
            {wordings.card.demo}
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}