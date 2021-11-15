import { Grid, Avatar, makeStyles, Divider, Typography, Button } from '@material-ui/core'
import Tecnology from './components/Tecnology';
import Paper from '@material-ui/core/Paper';

import perfil from '../../images/fer-campos.png';
import useWordings from '../../i18n/wordings';

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

const Resume = () => {
  const wordings = useWordings();
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
              {wordings.job}
            </Typography>
            <p>
              {wordings.resume.profile}
            </p>
            <Divider className={classes.divider} />
            <Typography variant="h6" className={classes.marginTopCenter}>
              {wordings.resume.location}
            </Typography>
            <p style={{ textAlign: "center" }}>González Catán, La Matanza, Bs As, Argentina.</p>
            <Typography variant="h6" className={classes.marginTop}>
              {wordings.resume.contact}
            </Typography>
            <p><b>{wordings.resume.phone}: </b> +54 11-6707-0753<br></br>
              <b>{wordings.resume.email}: </b> fer_eze_jose @hotmail.com</p>
            <Divider className={classes.divider} />
          </Grid>
          {/* <Grid container item xs={12}
            // justify="center"
            direction="column"
            text="center"
            // alignContent="flex-start"
            // alignItems="flex-start"
            > */}
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.marginTopCenter}>
              {wordings.resume.tecnologies}
            </Typography>
            <Tecnology name={"Javascript"} level={94} />
            <Tecnology name={"Java"} level={60} />
            <Tecnology name={"C"} level={80} />
            <Tecnology name={"HTML/CSS"} level={75} />
            <Tecnology name={"React"} level={70} />
            <Tecnology name={"Node"} level={70} />
            <Tecnology name={"Mongo"} level={35} />
            <Tecnology name={"SQL"} level={35} />
            <Tecnology name={"Docker"} level={66} />
            <Tecnology name={"Azure"} level={88} />

          </Grid>
        </Grid>


        <Grid item xs={12} sm={8} className={classes.gridDerecho}
          direction="column"
        >
          <Typography variant="h4" color="initial">{wordings.resume.education}</Typography>
          <Grid container direction="row" alignItems="center" >
            <Grid sm={4} xs={12}>
              <p>01-03-2017 - {wordings.resume.present}</p>
            </Grid>
            <Grid sm={8} xs={12}>
              <h2 className="fs-2">Universidad Nacional de La Matanza</h2>
              <p>{wordings.resume.degree}</p>
              <Divider className={classes.dividerCorto} />
            </Grid>
            <Grid sm={4} xs={12}>
              <p>2008 - 2013</p>
            </Grid>
            <Grid sm={8} xs={12}>
              <h2 className="fs-2">Instituto González Catán</h2>
              <p>{wordings.resume.secondary}</p>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h4" color="initial" className={classes.marginTop}>{wordings.resume.work}</Typography>
          <Grid container direction="row" alignItems="center" >
            <Grid sm={4} xs={12}>
              <p>01-06-2020 - {wordings.resume.present}</p>
            </Grid>
            <Grid sm={8} xs={12}>
              <h2 className="fs-2">{wordings.resume.epiDev}</h2>
              <p>{wordings.resume.epiDevDesc}</p>
              <Divider className={classes.dividerCorto} />
            </Grid>
            <Grid sm={4} xs={12}>
              <p>02-03-2020 - 01-06-2020</p>
            </Grid>
            <Grid sm={8} xs={12}>
              <h2 className="fs-2">{wordings.resume.epiInfra}</h2>
              <p className={`fs-1`}>
                {wordings.resume.epiInfraDesc}
              </p>
              <Divider className={classes.dividerCorto} />
            </Grid>
            <Grid sm={4} xs={12}>
              <p>2013 a 2016 y 2019-2020</p>
            </Grid>
            <Grid sm={8} xs={12}>
              <h2 className="fs-2">{wordings.resume.elProgreso}</h2>
              <p className={`fs-1`}>
                {wordings.resume.elProgresoDesc}
              </p>
              <Divider className={classes.dividerCorto} />
            </Grid>
            <Grid sm={4} xs={12}>
              <p>2016 - 2019</p>
            </Grid>
            <Grid sm={8} xs={12}>
              <h2 className="fs-2">{wordings.resume.blancosLine}</h2>
              <p className={`fs-1`}>
                {wordings.resume.blancosLineDesc}
              </p>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h4" color="initial" className={classes.marginTop}>{wordings.resume.knowledge}</Typography>
          <Grid container direction="row" alignItems="center" >
            <Grid sm={12} xs={12} className={classes.p}>
              <p><u><b>{wordings.resume.english}.</b></u> {wordings.resume.englishDesc}</p>
              <p><u><b>{wordings.resume.spanish}.</b></u> {wordings.resume.spanishDesc}</p>
              <p><u><b>{wordings.resume.microsoftOffice}.</b></u> {wordings.resume.microsoftOfficeDesc}</p>
              <p><u><b>{wordings.resume.oratory}: </b></u> {wordings.resume.oratoryDesc}</p>
              <p><u><b>{wordings.resume.mp}: </b></u> {wordings.resume.mpDesc}</p>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item container justify="center" className={classes.descarga}>
          <a style={{ textDecoration: "none" }} href={wordings.resume.resumeLink} download="CV.pdf">
            <Button variant="contained" color="primary">
              {wordings.resume.download}
            </Button>
          </a>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Resume;
