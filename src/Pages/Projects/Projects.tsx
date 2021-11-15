import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardProyecto from './components/ProjectCard';
import { Grid, Typography } from '@material-ui/core';

import screenNotas from '../../images/proyectos/notas.png';
import screenChat from '../../images/proyectos/chat.png';
import screenCheckout from '../../images/proyectos/checkout.png'
import screenAPIWhatsapp from '../../images/proyectos/api-whatsapp.png'
import screenPortfolio from '../../images/proyectos/portfolio.png'
import enConstruccion from '../../images/proyectos/construccion.png'

import useWordings from '../../i18n/wordings';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
  },
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

const Projects = () => {
  const classes = useStyles();
  const wordings = useWordings();
  const html = [
    {
      title: wordings.projects.notes,
      description: wordings.projects.notesDesc,
      git: 'https://github.com/FerCampos95/notas',
      demo: 'https://fercampos95.github.io/notas',
      image: screenNotas,
    },
  ]

  const node = [
    {
      title: wordings.projects.chat,
      description: wordings.projects.chatDesc,
      git: 'https://github.com/FerCampos95/chat-socketio',
      demo: 'https://chat-socketio-fer.herokuapp.com',
      image: screenChat,
    },
    {
      title: wordings.projects.whatsapp,
      description: wordings.projects.whatsappDesc,
      git: 'https://github.com/FerCampos95/API-Whatsapp',
      demo: 'https://api-whatsapp-fer.herokuapp.com/api-docs/',
      image: screenAPIWhatsapp,
    },
    {
      title: wordings.projects.mp,
      description: wordings.projects.mpDesc,
      git: 'https://github.com/FerCampos95/mp-ecommerce-nodejs',
      demo: 'https://fercampos-mp-ecommerce-nodejs.herokuapp.com/',
      image: screenCheckout,
    },
  ]

  const react = [
    {
      title: wordings.projects.portfolio,
      description: wordings.projects.portfolioDesc,
      git: 'https://github.com/FerCampos95/portfolio',
      demo: 'https://fer-portfolio.herokuapp.com/',
      image: screenPortfolio,
    },
    {
      title: wordings.projects.dailyapp,
      description: wordings.projects.dailyappDesc,
      git: '',
      demo: '',
      image: enConstruccion,
    },
  ]

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" color="initial" align="center">HTML/CSS</Typography>
        </Grid>
        <Grid container xs={12} className={classes.cards}>
          {
            html.map(proyecto => {
              return (
                <CardProyecto
                  image={proyecto.image}
                  title={proyecto.title}
                  description={proyecto.description}
                  git={proyecto.git}
                  demo={proyecto.demo}
                ></CardProyecto>
              )
            })
          }
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" color="initial" align="center">Node</Typography>
        </Grid>
        <Grid container xs={12} className={classes.cards}>
          {
            node.map(proyecto => {
              return (
                <CardProyecto
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

      <Grid container>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" color="initial" align="center">React</Typography>
        </Grid>
        <Grid container xs={12} className={classes.cards}>
          {
            react.map(proyecto => {
              return (
                <CardProyecto
                  image={proyecto.image}
                  title={proyecto.title}
                  description={proyecto.description}
                  git={proyecto.git}
                  demo={proyecto.demo}
                ></CardProyecto>
              )

            })
          }
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Projects;
