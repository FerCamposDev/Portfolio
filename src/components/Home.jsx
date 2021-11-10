import React from 'react'
import { Grid, Avatar, makeStyles, Container, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next';

//IMAGENES
import fullstack from '../images/fullstack.jpg';
import fullstackCielo from '../images/fullstackcielo.png';
import linkedin from '../images/github.png';
import github from '../images/linkedin.png';

const useStyles = makeStyles((theme) => ({
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
            margin:"auto",
            //marginTop: "10px", //no funciono
            marginBottom: "-12px",
        },
    },
    links : {
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
        },
    },
    large: {
        width: theme.spacing(155),
        height: theme.spacing(40),
    },
    resumeRightCol: {
        backgroundImage: 'url(' + fullstack + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: theme.spacing(110),
        display: "flex",
        flexDirection: "column",
        alignItems:"top",
        color: 'black',
        padding: '1em',
        borderRadius: '30px',

        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url(' + fullstackCielo + ')',
            //backgroundPosition: 'bottom',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: "#ABE9F4",
            height: theme.spacing(55),
        },
    },
    icono1: {
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
    conocimientos: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2em",
            //marginTop: theme.spacing(4),

        },
    },
}));

export const Home = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Container className={classes.root}>
            <Grid justify="center" className={classes.resumeRightCol}>
                <Grid container item xs={12} justify="center" alignContent="flex-start">
                    <Typography variant="h2" className={classes.job}>
                        <b>{t('job')}</b>
                    </Typography>

                    <Grid item xs={12} justify="center">
                        <Typography variant="h5" className={classes.conocimientos}>
                            <b>HTML/CSS | Bootstrap | Material-ui | JavaScript | React | NodeJS | Express | MongoDB | Azure | Docker</b>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item className={classes.socialLinks} >
                    <a href="https://www.linkedin.com/in/fercampos/" rel="noopener noreferrer" target="_blank">
                        <Avatar
                            alt="LinkedIn Icono"
                            src={linkedin}
                            className={classes.icono1}
                            variant="rounded"
                        />
                        <Typography 
                            variant="h6" 
                            align="center"
                            className={classes.links}
                        >/FerCampos</Typography>
                    </a>

                    <a href="https://github.com/fercampos95" rel="noopener noreferrer" target="_blank">
                        <Avatar
                            alt="Github Icono"
                            src={github}
                            className={classes.icono1}
                            variant="rounded"
                        />
                        <Typography 
                            variant="h6" 
                            align="center"
                            className={classes.links}
                        >/FerCampos95</Typography>
                    </a>
                </Grid>

            </Grid>


            {/* <Grid container item className={classes.socialLinks} justify="space-evenly" >
                <a href="https://www.linkedin.com/in/fercampos/" rel="noopener noreferrer" target="_blank">
                    <Avatar
                        alt="LinkedIn Icono"
                        src={window.location.origin + "/images/linkedin.png"}
                        className={classes.icono}
                        variant="rounded"
                    />
                    <Typography variant="h6">/FerCampos</Typography>
                </a>

                <a href="https://github.com/fercampos95" rel="noopener noreferrer" target="_blank">
                    <Avatar
                        alt="Github Icono"
                        src={window.location.origin + "/images/github.png"}
                        className={classes.icono}
                        variant="rounded"
                    />
                    <Typography variant="h6">/FerCampos95</Typography>
                </a>
            </Grid> */}

        </Container>
    )
}