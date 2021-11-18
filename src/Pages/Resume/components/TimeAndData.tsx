import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import useResumeStyles from '../resumeStyles';

interface Props {
  time: string
  title: string
  desc: string
  divider?: boolean
}

const TimeAndData = (props: Props) => {
  const { time, title, desc, divider } = props;
  const classes = useResumeStyles();

  return (
    <>
      <Grid item sm={4} xs={12}>
        <p>{time}</p>
      </Grid>
      <Grid item sm={8} xs={12}>
        <h2>{title}</h2>
        <Typography variant="body1" align='justify' paragraph>
          {desc}
        </Typography>
        {divider && <Divider className={classes.shortDivider} />}
      </Grid>
    </>
  )
}

export default TimeAndData
