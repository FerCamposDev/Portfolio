import Paper from '@material-ui/core/Paper';

import useWordings from '../../i18n/wordings';
import useProjectsStyles from './projectsStyles';
import ProjectList from './components/ProjectList';

import screenNotes from '../../images/projects/notes.png';
import screenChat from '../../images/projects/chat.png';
import screenCheckout from '../../images/projects/checkout.png'
import screenAPIWhatsapp from '../../images/projects/api-whatsapp.png'
import screenPortfolio from '../../images/projects/portfolio.png'
import inConstruction from '../../images/projects/construction.png'

const Projects = () => {
  const classes = useProjectsStyles();
  const wordings = useWordings();
  const html = [
    {
      title: wordings.projects.notes,
      description: wordings.projects.notesDesc,
      git: 'https://github.com/FerCampos95/notas',
      demo: 'https://fercampos95.github.io/notas',
      image: screenNotes,
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
      image: inConstruction,
    },
  ]

  return (
    <Paper elevation={3} className={classes.paper}>
      <ProjectList 
        title='HTML/CSS'
        projects={html}
      />
      <ProjectList 
        title='Node'
        projects={node}
      />
      <ProjectList 
        title='React'
        projects={react}
      />
    </Paper>
  );
}

export default Projects;
