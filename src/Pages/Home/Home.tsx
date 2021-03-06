import { Grid, Avatar, Container, Typography } from '@material-ui/core'
import useWordings from '../../i18n/wordings';
import useHomeStyles from './homeStyles';

import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const Home = () => {
  const classes = useHomeStyles();
  const wordings = useWordings();

  return (
    <Container>
      <Grid className={classes.main}>
        <Grid container item xs={12} justifyContent="center" alignContent="flex-start">
          <Typography variant="h2" className={classes.job}>
            <b>{wordings.job}</b>
          </Typography>
          <Typography variant="h5" className={classes.knowledge}>
            <b>HTML/CSS | Bootstrap | Material-ui | JavaScript | Typescript | React | Node | Express | Firebase | Azure | Docker</b>
          </Typography>
        </Grid>

        <Grid container justifyContent="center" className={classes.socialLinks} >
          <a href="https://www.linkedin.com/in/fercampos" rel="noopener noreferrer" target="_blank">
            <Avatar
              alt="LinkedIn Icon"
              src={linkedin}
              className={classes.image}
              variant="rounded"
            />
            <Typography
              variant="h6"
              align="center"
              className={classes.links}
            >
              /FerCampos
            </Typography>
          </a>

          <a href="https://github.com/FerCamposDev" rel="noopener noreferrer" target="_blank">
            <Avatar
              alt="Github Icon"
              src={github}
              className={classes.image}
              variant="rounded"
            />
            <Typography
              variant="h6"
              align="center"
              className={classes.links}
            >
              /FerCamposDev
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;
