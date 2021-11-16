import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

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
      <Grid sm={4} xs={12}>
        <p>{time}</p>
      </Grid>
      <Grid sm={8} xs={12}>
        <h2>{title}</h2>
        <p>{desc}</p>
        {divider && <Divider className={classes.shortDivider} />}
      </Grid>
    </>
  )
}

export default TimeAndData
