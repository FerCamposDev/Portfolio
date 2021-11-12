import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardProyecto from './components/ProjectCard';
import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import screenNotas from '../../images/proyectos/notas.png';
import screenChat from '../../images/proyectos/chat.png';
import screenCheckout from '../../images/proyectos/checkout.png'
import screenAPIWhatsapp from '../../images/proyectos/api-whatsapp.png'
import screenPortfolio from '../../images/proyectos/portfolio.png'
import enConstruccion from '../../images/proyectos/construccion.png'

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
  card: {
    marginBottom: theme.spacing(3),
  },
  cards: {
    display: 'flex',
    // margin: theme.spacing(3),
    justifyContent: 'space-around',
  },
}));

const Projects = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const html = [
    {
      title: t('projects.notes'),
      description: t('projects.notes-desc'),
      git: 'https://github.com/FerCampos95/notas',
      demo: 'https://fercampos95.github.io/notas',
      image: screenNotas,
    },
  ]

  const node = [
    {
      title: t('projects.chat'),
      description: t('projects.chat-desc'),
      git: 'https://github.com/FerCampos95/chat-socketio',
      demo: 'https://chat-socketio-fer.herokuapp.com',
      image: screenChat,
    },
    {
      title: t('projects.whatsapp'),
      description: t('projects.whatsapp-desc'),
      git: 'https://github.com/FerCampos95/API-Whatsapp',
      demo: 'https://api-whatsapp-fer.herokuapp.com/api-docs/',
      image: screenAPIWhatsapp,
    },
    {
      title: t('projects.mp'),
      description: t('projects.mp-desc'),
      git: 'https://github.com/FerCampos95/mp-ecommerce-nodejs',
      demo: 'https://fercampos-mp-ecommerce-nodejs.herokuapp.com/',
      image: screenCheckout,
    },
  ]

  const react = [
    {
      title: t('projects.portfolio'),
      description: t('projects.portfolio-desc'),
      git: 'https://github.com/FerCampos95/portfolio',
      demo: 'https://fer-portfolio.herokuapp.com/',
      image: screenPortfolio,
    },
    {
      title: t('projects.dailyapp'),
      description: t('projects.dailyapp-desc'),
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
                  //className={classes.card}
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
