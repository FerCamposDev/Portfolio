import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    opacity: 1,

    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.grey[500]}`,

      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.primary.main,
  },
  checked: {},
}))(Switch);

export default function LanguageSwitch() {
  const [ingles, setIngles] = useState(true);

  useEffect(() => {
    const userLang = navigator.language;
    let defaultLocale = userLang.substring(0, 2);

    let langSave = localStorage.getItem("lang");
    if (langSave) {
      defaultLocale = langSave;
    }

    if (defaultLocale === 'es')
      setIngles(false);
    else
      setIngles(true);
  }, []);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngles(event.target.checked);
    if (event.target.checked) {
      localStorage.setItem("lang", "en");
      window.location.href = window.location.href.replace('/es/', '/en/')
    } else {
      localStorage.setItem("lang", "es");
      window.location.href = window.location.href.replace('/en/', '/es/')
    }
  };

  return (
    <Grid component="label" container justify="center" alignItems="center" spacing={1}>
      <Grid item>Español</Grid>
      <Grid item>
        <AntSwitch checked={ingles} onChange={handleChange} />
      </Grid>
      <Grid item>English</Grid>
    </Grid>
  );
}