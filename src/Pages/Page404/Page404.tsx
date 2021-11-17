import { useState } from "react";
import { useNavigate } from "react-router";
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'

import CrySVG from '../../images/svg/Cry';
import SmileSVG from '../../images/svg/Smile';
import useWordings from "../../i18n/wordings";

const Page404 = () => {
  const navigate = useNavigate();
  const wordings = useWordings();
  const [isHappy, setIsHappy] = useState(false);

  const handleOver = () => {
    setIsHappy(true);
  }

  const handleLeave = () => {
    setIsHappy(false);
  }

  return (
    <Grid container direction='column' justifyContent='space-around' alignItems='center'
      style={{minHeight: '70vh'}}
    >
      <Typography variant="h2">
        <b>{wordings.page404.title}</b>
      </Typography>
      <Typography variant="h6">
        {wordings.page404.description}
      </Typography>
      {
        isHappy
          ? <SmileSVG />
          : <CrySVG />
      }
      <Button variant='contained'
        onMouseOver={handleOver}
        onMouseLeave={handleLeave}
        onClick={()=> navigate('/home')}
      >
        {wordings.page404.button}
      </Button>
    </Grid>
  )
}

export default Page404;
