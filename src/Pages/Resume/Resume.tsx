import { Grid, Avatar, Divider, Typography, Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';

import useWordings from '../../i18n/wordings';
import useResumeStyles from './resumeStyles';
import Tecnology from './components/Tecnology';
import TimeAndData from './components/TimeAndData';

import perfil from '../../images/fer-campos.png';

const Resume = () => {
  const wordings = useWordings();
  const classes = useResumeStyles();
  return (
    <Paper className={classes.paper} elevation={5}>
      <Grid container>
        <Grid container item xs={12} sm={4} className={classes.leftGrid}>
          <Grid container item xs={12} justify="center" direction="column" alignItems="center">
            <Avatar
              alt="photo"
              src={perfil}
              className={classes.photo}
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
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.marginTopCenter}>
              {wordings.resume.tecnologies}
            </Typography>
            <Tecnology name={"Javascript"} level={94} />
            <Tecnology name={"Typescript"} level={80} />
            <Tecnology name={"Java"} level={60} />
            <Tecnology name={"HTML/CSS"} level={75} />
            <Tecnology name={"React"} level={70} />
            <Tecnology name={"Node"} level={75} />
            <Tecnology name={"Firebase"} level={70} />
            <Tecnology name={"SQL"} level={35} />
            <Tecnology name={"Docker"} level={66} />
            <Tecnology name={"Azure"} level={70} />
            <Tecnology name={"C"} level={80} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={classes.rightGrid} direction="column">
          <Typography variant="h4">{wordings.resume.education}</Typography>
          <Grid container direction="row" alignItems="center" >
            <TimeAndData
              time={`01-03-2017 - ${wordings.resume.present}`}
              title='Universidad Nacional de La Matanza'
              desc={wordings.resume.degree}
              divider={true}
            />
            <TimeAndData
              time={'2008 - 2013'}
              title='Instituto González Catán'
              desc={wordings.resume.secondary}
            />
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h4" className={classes.marginTop}>{wordings.resume.work}</Typography>
          <Grid container direction="row" alignItems="center" >
            <TimeAndData
              time={`01-06-2020 - ${wordings.resume.present}`}
              title={wordings.resume.epiDev}
              desc={wordings.resume.epiDevDesc}
              divider={true}
            />
            <TimeAndData
              time={'02-03-2020 - 01-06-2020'}
              title={wordings.resume.epiInfra}
              desc={wordings.resume.epiInfraDesc}
              divider={true}
            />
            <TimeAndData
              time={'2013 - 2016 / 2019-2020'}
              title={wordings.resume.elProgreso}
              desc={wordings.resume.elProgresoDesc}
              divider={true}
            />
            <TimeAndData
              time={'2016 - 2019'}
              title={wordings.resume.blancosLine}
              desc={wordings.resume.blancosLineDesc}
            />
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h4" className={classes.marginTop}>
            {wordings.resume.knowledge}
          </Typography>
          <Grid sm={12} xs={12} className={classes.p}>
            <p><u><b>{wordings.resume.spanish}.</b></u> {wordings.resume.spanishDesc}</p>
            <p><u><b>{wordings.resume.english}.</b></u> {wordings.resume.englishDesc}</p>
            <p><u><b>{wordings.resume.microsoftOffice}.</b></u> {wordings.resume.microsoftOfficeDesc}</p>
            <p><u><b>{wordings.resume.oratory}:</b></u> {wordings.resume.oratoryDesc}</p>
            <p><u><b>{wordings.resume.mp}:</b></u> {wordings.resume.mpDesc}</p>
          </Grid>
          <Divider className={classes.divider} />
        </Grid>
        <Grid container justify="center" className={classes.download}>
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
