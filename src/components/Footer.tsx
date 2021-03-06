import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import useWordings from '../i18n/wordings';

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
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(1, 0),
    width: '100%',
    position: 'relative',
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const wordings = useWordings();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {wordings.job}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
