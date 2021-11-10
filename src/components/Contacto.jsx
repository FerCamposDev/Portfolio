import React from 'react'
import { Grid, Avatar, makeStyles, Container, Divider, Typography, Hidden, Button, Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import  {useTranslation} from 'react-i18next';

//imagenes
import perfil from '../images/fer-campos.png';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        marginTop: '10px',
        borderRadius: '30px'
    },
    marginTop: {
        paddingTop: '20px',
    },
    resumeRightCol: {
        // background: '#27221F',
        //background: theme.palette.text.primary,
        background: 'black',
        color: 'white',
        padding: '2em',
        //marginTop: '20px',
        borderRadius: '20px',
    },
    divider: {
        borderTop: '3px solid',
        borderTopColor: theme.palette.primary.dark,
        width: '45%'
    }
}));

export const Contacto = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [open, setOpen] = React.useState(false);


    const handleClick = () => {
        let aux = document.createElement("input");
        aux.setAttribute("value", "fer_eze_jose@hotmail.com");
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);

        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container style={{ marginTop: '20px' }} className={`animate__animated animate__fadeIn ${classes.resumeRightCol}`}>
            <Grid container direction="row" className={classes.resumeRightCol} justify="center">
                <Grid container item sm={6} xs={12} direction="column" alignItems="center">
                    <Hidden xsDown>
                        <Avatar
                            alt="Foto Perfil"
                            src={perfil}
                            className={classes.large}
                            variant="rounded"
                        />

                        <Typography variant="h4">
                            Fernando Campos
                            </Typography>

                    </Hidden>

                </Grid>
                <Grid item sm={6} xs={12} direction="column" alignItems="center">
                    <Typography variant="h3" style={{ paddingLeft: '30px' }}>
                        {t("contact.title")}
                        <Divider className={classes.divider} />
                    </Typography>
                    <Grid container item alignItems="center" className={classes.marginTop}>
                        <Tooltip title={t("contact.call")}>
                            <Link
                                component={Button}
                                color="inherit"
                                onClick={() => {
                                    let a = document.createElement("a");
                                    a.href = "tel:+541167070753";
                                    a.target = "_blank";
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                }}
                            >
                                <CallIcon fontSize="large"></CallIcon>
                                <Typography variant="h4">
                                    1167070753
                            </Typography>
                            </Link>
                        </Tooltip>
                    </Grid>
                    <Grid container item alignItems="center" className={classes.marginTop}>
                        <Tooltip title={t("contact.whatsapp")}>
                            <Link
                                component={Button}
                                color="inherit"
                                onClick={() => {
                                    let a = document.createElement("a");
                                    a.href = "https://wa.me/541167070753?text=Hola%20Fernando%20ví%20tu%20portafolio.";
                                    a.target = "_blank";
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                }}
                            >
                                <WhatsAppIcon fontSize="large"></WhatsAppIcon>
                                <Typography variant="h4">
                                    1167070753
                            </Typography>
                            </Link>
                        </Tooltip>
                    </Grid>
                    <Grid container item alignItems="center" className={classes.marginTop}>
                        <Tooltip title={t("contact.email")}>
                            <Link
                                component={Button}
                                color="inherit"
                                onClick={handleClick}
                            >
                                <MailIcon fontSize="large"></MailIcon>
                                <Typography variant="h6">
                                    fer_eze_jose@hotmail.com
                            </Typography>
                            </Link>
                        </Tooltip>

                    </Grid>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert icon={<FileCopyIcon fontSize="inherit" />} onClose={handleClose} severity="info">
                    {t("contact.email-copied")}
                </Alert>
            </Snackbar>
        </Container>
    )
}