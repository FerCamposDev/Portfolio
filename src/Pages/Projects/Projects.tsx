import Paper from '@material-ui/core/Paper';

import useWordings from '../../i18n/wordings';
import useProjectsStyles from './projectsStyles';
import ProjectList from './components/ProjectList';

import screenCryptoJournal from '../../images/projects/crypto-journal.png';
import screenCheckout from '../../images/projects/checkout.png'
import screenAPIWhatsapp from '../../images/projects/api-whatsapp.png'
import screenPortfolio from '../../images/projects/portfolio.png'
import screenFinancia from '../../images/projects/financia.png'
import inConstruction from '../../images/projects/construction.png'

const Projects = () => {
  const classes = useProjectsStyles();
  const wordings = useWordings();
  const cryptos = [
    {
      title: wordings.projects.cryptoJournal,
      description: wordings.projects.cryptoJournalDesc,
      git: 'https://github.com/FerCamposDev/Crypto-Journal',
      demo: 'https://fercamposdev.github.io/Crypto-Journal',
      image: screenCryptoJournal,
    },
    {
      title: wordings.projects.blockchainNotes,
      description: wordings.projects.blockchainNotesDesc,
      git: 'https://github.com/FerCamposDev/Blockchain-notes',
      demo: '',
      image: inConstruction,
    },
  ]

  const node = [
    {
      title: wordings.projects.mp,
      description: wordings.projects.mpDesc,
      git: 'https://github.com/FerCampos95/mp-ecommerce-nodejs',
      demo: 'https://fercampos-mp-ecommerce-nodejs.herokuapp.com/',
      image: screenCheckout,
    },
    {
      title: wordings.projects.whatsapp,
      description: wordings.projects.whatsappDesc,
      git: 'https://github.com/FerCampos95/API-Whatsapp',
      demo: 'https://whatsapp-api-swagger.herokuapp.com/api-docs/',
      image: screenAPIWhatsapp,
    },
  ]

  const react = [
    {
      title: wordings.projects.portfolio,
      description: wordings.projects.portfolioDesc,
      git: 'https://github.com/FerCamposDev/portfolio',
      demo: 'https://fer-portfolio.netlify.app/en/home',
      image: screenPortfolio,
    },
    {
      title: wordings.projects.financia,
      description: wordings.projects.financiaDesc,
      git: 'https://github.com/FerCampos95/clientes-prestamos-app',
      demo: 'https://dev-financia.netlify.app/Simulador',
      image: screenFinancia,
    },
  ]

  return (
    <Paper elevation={3} className={classes.paper}>
      <ProjectList
        title='Node'
        projects={node}
      />
      <ProjectList
        title='React'
        projects={react}
      />
      <ProjectList
        title='Cryptos / Blockchain'
        projects={cryptos}
      />
    </Paper>
  );
}

export default Projects;
