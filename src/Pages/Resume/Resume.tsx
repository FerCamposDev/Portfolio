import { Grid, Avatar, Divider, Typography, Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';

import useWordings from '../../i18n/wordings';
import useResumeStyles from './resumeStyles';
import Technology from './components/Technology';
import TimeAndData from './components/TimeAndData';

import profile from '../../images/fer-campos.png';

const Resume = () => {
  const wordings = useWordings();
  const classes = useResumeStyles();
  return (
    <Paper className={classes.paper} elevation={5}>
      <Grid container>
        <Grid item xs={12} sm={4} className={classes.leftGrid}>
          <Grid container justifyContent="center" direction="column" alignItems="center">
            <Avatar
              alt="photo"
              src={profile}
              className={classes.photo}
            />
            <Typography variant="h3" className={classes.marginTopCenter}>
              Fernando Campos
            </Typography>
          </Grid>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Divider className={classes.divider} />
            <Typography variant="h4" className={classes.marginTopCenter} paragraph>
              {wordings.job}
            </Typography>
            <Typography variant="body1" align='justify' paragraph>
              {wordings.resume.profile}
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h6" className={classes.marginTopCenter}>
              {wordings.resume.location}
            </Typography>
            <p style={{ textAlign: "center" }}>La Matanza, Buenos Aires, Argentina.</p>
            <Typography variant="h6" className={classes.marginTop}>
              {wordings.resume.contact}
            </Typography>
            <p><b>{wordings.resume.phone}: </b> +54 11-6707-0753<br></br>
              <b>{wordings.resume.email}: </b> fer_eze_jose@hotmail.com</p>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.marginTopCenter} paragraph>
              {wordings.resume.technologies}
            </Typography>
            <Technology name={"Javascript"} level={94} />
            <Technology name={"Typescript"} level={80} />
            <Technology name={"Java"} level={60} />
            <Technology name={"HTML/CSS"} level={75} />
            <Technology name={"React"} level={70} />
            <Technology name={"Node"} level={75} />
            <Technology name={"Firebase"} level={70} />
            <Technology name={"SQL"} level={55} />
            <Technology name={"Docker"} level={66} />
            <Technology name={"Azure"} level={70} />
            <Technology name={"C"} level={80} />
            <Technology name={"Solidity"} level={55} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={classes.rightGrid}>
          <Typography variant="h4">{wordings.resume.education}</Typography>
          <Grid container alignItems="center" >
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
          <Grid container alignItems="center" >
            <TimeAndData
              time={`05-04-2021 - ${wordings.resume.present}`}
              title={wordings.resume.meli}
              desc={wordings.resume.meliDesc}
              divider={true}
            />
            <TimeAndData
              time={'01-06-2020 - 02-04-2021'}
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
          <Grid className={classes.p}>
            <p><u><b>{wordings.resume.spanish}.</b></u> {wordings.resume.spanishDesc}</p>
            <p><u><b>{wordings.resume.english}.</b></u> {wordings.resume.englishDesc}</p>
            <p><u><b>{wordings.resume.microsoftOffice}.</b></u> {wordings.resume.microsoftOfficeDesc}</p>
            <p><u><b>{wordings.resume.oratory}:</b></u> {wordings.resume.oratoryDesc}</p>
            <p><u><b>{wordings.resume.mp}:</b></u> {wordings.resume.mpDesc}</p>
          </Grid>
          <Divider className={classes.divider} />
        </Grid>
        <Grid container justifyContent="center" className={classes.download}>
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
