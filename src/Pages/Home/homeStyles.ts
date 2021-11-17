import { makeStyles } from '@material-ui/core';

import fullstack from '../../images/fullstack.jpg';
import fullstackSky from '../../images/fullstack-sky.png';

const useHomeStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ABE9F4",
  },
  socialLinks: {
    margin: 'auto',
    marginTop: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
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
    justifyContent: 'center',
    alignItems: "top", 
    color: 'black',
    padding: '1em',
    borderRadius: '30px',

    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url(' + fullstackSky + ')',
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
  knowledge: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.2em",
    },
  },
}));

export default useHomeStyles;