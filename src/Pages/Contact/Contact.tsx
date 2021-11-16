import { useState } from 'react';
import {
  Grid, Avatar, Container, Divider, Typography, Hidden, Button, Tooltip, Link
} from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useWordings from '../../i18n/wordings';
import useContactStyles from './contactStyles';
import perfil from '../../images/fer-campos.png';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = () => {
  const classes = useContactStyles();
  const wordings = useWordings();
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    const clipboard = navigator.clipboard;
    if (clipboard) {
      navigator.clipboard.writeText('fer_eze_jose@hotmail.com')
        .then(() => setOpen(true))
        .catch((err) => console.log(err));
    } else {
      let aux = document.createElement("input");
      aux.setAttribute("value", "fer_eze_jose@hotmail.com");
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
      setOpen(true)
    }
  };

  const handleClick = (to: string) => {
    let a = document.createElement("a");
    a.href = to;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const handleClose = (event: React.SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container style={{ marginTop: '20px' }} className={classes.container}>
      <Grid container direction="row" className={classes.main} justify="center">
        <Grid container item sm={6} xs={12} direction="column" alignItems="center">
          <Hidden xsDown>
            <Avatar alt="Photo" variant="rounded"
              src={perfil}
              className={classes.photo}
            />
            <Typography variant="h3">Fernando Campos</Typography>
          </Hidden>
        </Grid>
        <Grid item sm={6} xs={12} direction="column" alignItems="center">
          <Typography variant="h3" style={{ paddingLeft: '30px' }}>
            {wordings.contact.title}
            <Divider className={classes.divider} />
          </Typography>
          <Grid container alignItems="center" className={classes.marginTop}>
            <Tooltip title={wordings.contact.call} style={{ color: 'white' }}>
              <Link component={Button}
                onClick={() => handleClick('tel:+541167070753')}
              >
                <CallIcon fontSize="large" />
                <Typography variant="h4">&nbsp;1167070753</Typography>
              </Link>
            </Tooltip>
          </Grid>
          <Grid container alignItems="center" className={classes.marginTop}>
            <Tooltip title={wordings.contact.whatsapp} style={{ color: 'white' }}>
              <Link component={Button}
                onClick={() =>
                  handleClick("https://wa.me/541167070753?text=Hola%20Fernando%20ví%20tu%20portafolio.")
                }
              >
                <WhatsAppIcon fontSize="large" />
                <Typography variant="h4">&nbsp;1167070753</Typography>
              </Link>
            </Tooltip>
          </Grid>
          <Grid container alignItems="center" className={classes.marginTop}>
            <Tooltip title={wordings.contact.email} style={{ color: 'white' }}>
              <Link component={Button} onClick={handleCopy} >
                <MailIcon fontSize="large" />
                <Typography variant="h6">
                  &nbsp;fer_eze_jose@hotmail.com
                </Typography>
              </Link>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert icon={<FileCopyIcon />} onClose={handleClose} severity="info">
          {wordings.contact.emailCopied}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Contact;