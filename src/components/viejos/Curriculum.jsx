import { Grid, Avatar, makeStyles, Divider, Typography, Button } from '@material-ui/core'
import React from 'react';
import Tecnologia from './Tecnologia';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import SaveIcon from '@material-ui/icons/Save';


//imagenes
import perfil from '../images/fer-campos.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    foto: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    marginTop: {
        marginTop: '10px',
    },
    marginTopCenter: {
        marginTop: '10px',
        textAlign: "center",
    },
    gridDerecho: {
        // background: '#27221F',
        background: theme.palette.text.primary,
        color: 'white',
        padding: '2em',
    },
    line: {
        lineHeight: 2
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    divider: {
        borderTop: '3px solid',
        borderTopColor: theme.palette.primary.dark,
        width: '100%'
    }, dividerCorto: {
        borderTop: '3px solid',
        borderTopColor: theme.palette.primary.light,
        width: '50%'
    },
    gridIzquierda: {
        paddingRight: theme.spacing(2),
        color: 'black'
    },
    p: {
        fontSize: theme.spacing(2),
    },
    descarga: {
        marginTop: theme.spacing(2),
    }
}));

export const Curriculum = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={5}>
            <Grid container>
                <Grid container item xs={12} sm={4} className={classes.gridIzquierda}>
                    <Grid container item xs={12} justify="center" direction="column" alignItems="center">
                        <Avatar
                            alt="Foto Perfil"
                            src={perfil}
                            className={classes.foto}
                        />
                        <Typography variant="h3" className={classes.marginTopCenter}>
                            Fernando Campos
                        </Typography>
                    </Grid>
                    <Grid container item xs={12}
                        justify="center"
                        direction="column"
                        alignContent="center"
                        alignItems="center"
                    >
                        <Divider className={classes.divider} />
                        <Typography variant="h4" className={classes.marginTopCenter}>
                            {t("job")}
                        </Typography>
                        <p>
                            {t('resume.profile')}
                        </p>
                        <Divider className={classes.divider} />
                        <Typography variant="h6" className={classes.marginTopCenter}>
                            {t('resume.location')}
                        </Typography>
                        <p style={{ textAlign: "center" }}>González Catán, La Matanza, Bs As, Argentina.</p>
                        <Typography variant="h6" className={classes.marginTop}>
                            {t('resume.contact')}
                        </Typography>
                        <p><b>{t('resume.phone')}:</b> +54 11-6707-0753<br></br>
                            <b>{t('resume.email')}:</b> fer_eze_jose@hotmail.com</p>
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid container item xs={12}
                        // justify="center"
                        direction="column"
                        text="center"
                    // alignContent="flex-start"
                    // alignItems="flex-start"
                    >
                        <Typography variant="h6" className={classes.marginTopCenter}>
                            {t('resume.tecnologies')}
                        </Typography>
                        <Tecnologia nombre={"Javascript"} nivel={94}></Tecnologia>
                        <Tecnologia nombre={"Java"} nivel={60}></Tecnologia>
                        <Tecnologia nombre={"C"} nivel={80}></Tecnologia>
                        <Tecnologia nombre={"HTML/CSS"} nivel={75}></Tecnologia>
                        <Tecnologia nombre={"React"} nivel={70}></Tecnologia>
                        <Tecnologia nombre={"Node"} nivel={70}></Tecnologia>
                        <Tecnologia nombre={"Mongo"} nivel={35}></Tecnologia>
                        <Tecnologia nombre={"SQL"} nivel={35}></Tecnologia>
                        <Tecnologia nombre={"Docker"} nivel={66}></Tecnologia>
                        <Tecnologia nombre={"Azure"} nivel={88}></Tecnologia>

                    </Grid>
                </Grid>


                <Grid item xs={12} sm={8} className={classes.gridDerecho}
                    direction="column"
                >
                    <Typography variant="h4" color="initial">{t('resume.education')}</Typography>
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={4} xs={12}>
                            <p>01-03-2017 - {t('resume.present')}</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Universidad Nacional de La Matanza</h2>
                            <p>{t('resume.degree')}</p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>2008 - 2013</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Instituto González Catán</h2>
                            <p>{t('resume.secondary')}</p>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Typography variant="h4" color="initial" className={classes.marginTop}>{t('resume.work')}</Typography>
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={4} xs={12}>
                            <p>01-06-2020 - {t('resume.present')}</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">{t('resume.epi-dev')}</h2>
                            <p>{t('resume.epi-dev-desc')}</p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>02-03-2020 - 01-06-2020</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">{t('resume.epi-infra')}</h2>
                            <p className={`fs-1`}>
                                {t('resume.epi-infra-desc')}
                            </p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>2013 a 2016 y 2019-2020</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">{t('resume.el-progreso')}</h2>
                            <p className={`fs-1`}>
                                {t('resume.el-progreso-desc')}
                            </p>
                            <Divider className={classes.dividerCorto} />
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p>2016 - 2019</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">{t('resume.blancos-line')}</h2>
                            <p className={`fs-1`}>
                                {t('resume.blancos-line-desc')}
                            </p>
                            {/* <Divider className={classes.dividerCorto}/> */}
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Typography variant="h4" color="initial" className={classes.marginTop}>{t('resume.knowledge')}</Typography>
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={12} xs={12} className={classes.p}>
                            <p><u><b>{t('resume.english')}.</b></u> {t('resume.english-desc')}</p>
                            <p><u><b>{t('resume.spanish')}.</b></u> {t('resume.spanish-desc')}</p>
                            <p><u><b>{t('resume.microsoft-office')}.</b></u> {t('resume.microsoft-office-desc')}</p>
                            <p><u><b>{t('resume.oratory')}:</b></u> {t('resume.oratory-desc')}</p>
                            <p><u><b>{t('resume.mp')}:</b></u> {t('resume.mp-desc')}</p>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item container justify="center" className={classes.descarga}>
                    <a style={{ textDecoration: "none" }} href={t('resume.resume-link')} download="CV.pdf">
                        <Button variant="contained" color="primary">
                            {t('resume.download')}
                        </Button>
                    </a>
                </Grid>
            </Grid>
        </Paper>
    )
}
