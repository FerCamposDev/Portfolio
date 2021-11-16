import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useProjectsStyles from '../projectsStyles';
import ProjectCard from './ProjectCard';

interface Props {
  title: string
  projects: any[]
}

const ProjectList = (props: Props) => {
  const { title, projects } = props;
  const classes = useProjectsStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.title}>
        <Typography variant="h4" align="center">{title}</Typography>
      </Grid>
      <Grid container xs={12} className={classes.cards}>
        {
          projects.map(proyecto => {
            return (
              <ProjectCard
                image={proyecto.image}
                title={proyecto.title}
                description={proyecto.description}
                git={proyecto.git}
                demo={proyecto.demo}
              />
            )
          })
        }
      </Grid>
    </Grid>
  )
}

export default ProjectList
