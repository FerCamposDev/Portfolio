import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Grid, Hidden, Link } from '@mui/material';

import { useTranslation } from 'react-i18next';
import SwitchIdioma from '../SwitchIdioma';

interface MyAppBarProps {
  open?: boolean;
  handleDrawerOpen: () => void
}

export default function MyAppBar(props: MyAppBarProps) {
  const { open, handleDrawerOpen } = props;
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Link href="/inicio"
              component={Button}
              color="inherit"
            >
              <Typography variant="h6">
                {t('menu.home')}
              </Typography>
            </Link>
          </Grid>
          <Hidden mdDown>
            <Grid container justifyContent="flex-end" alignItems="center">
              <Link href="/curriculum"
                component={Button}
                color="inherit"
              >
                {t('menu.resume')}
              </Link>
              <Link href="/proyectos"
                component={Button}
                color="inherit"

              >
                {t('menu.projects')}
              </Link>
              <Link href="/contacto"
                component={Button}
                color="inherit"
              >
                {t('menu.contact')}
              </Link>

              <Divider orientation="vertical" flexItem sx={{
                width: "3px",
                marginRight: "5px",
                marginLeft: "5px",
              }} />

              <Grid item>
                <SwitchIdioma />
              </Grid>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
