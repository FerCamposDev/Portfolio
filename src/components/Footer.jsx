import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import  {useTranslation} from 'react-i18next';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/fercampos/">
        Fernando Campos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.grey[300],
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();
  const {t} = useTranslation();
  
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {t('job')}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
