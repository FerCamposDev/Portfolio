
import { makeStyles } from '@material-ui/core';

import fullstack from '../../images/fullstack.jpg';
import fullstackCielo from '../../images/fullstackcielo.png';

const useHomeStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ABE9F4",
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    margin: 'auto',
    marginTop: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      margin: "auto",
      marginBottom: "-12px",
    },
  },
  links: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  main: {
    backgroundImage: 'url(' + fullstack + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: theme.spacing(110),
    display: "flex",
    flexDirection: "column",
    alignItems: "top",
    color: 'black',
    padding: '1em',

    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url(' + fullstackCielo + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundColor: "#ABE9F4",
      height: theme.spacing(55),
    },
  },
  image: {
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
    width: theme.spacing(18),
    height: theme.spacing(18),
    justifyContent: "center",

    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
  job: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: "3.6em"
    },
  },
  knowledges: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.2em",
    },
  },
}));

export default useHomeStyles;