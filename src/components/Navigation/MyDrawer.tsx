
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ContactMail, MenuBook, Home, Apps } from '@mui/icons-material';

import MyAppBar from './MyAppBar';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}

export default function MyDrawer() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  let lang = "/" + localStorage.getItem("lang") || "";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MyAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
        
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} size="large">
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemLink href={lang + "/inicio"}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>
              {t('menu.home')}
            </ListItemText>
          </ListItemLink>

          <ListItemLink href={lang + "/proyectos"}>
            <ListItemIcon>
              <Apps />
            </ListItemIcon>
            <ListItemText>
              {t('menu.projects')}
            </ListItemText>
          </ListItemLink>

          <ListItemLink href={lang + "/curriculum"}>
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText>
              {t('menu.resume')}
            </ListItemText>
          </ListItemLink>

          {/* <ListItemLink href={lang+"/sobre-mi"}>
                  <ListItemIcon>
                      <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText>
                      {t('menu.about')}
                  </ListItemText>
              </ListItemLink> */}

          <ListItemLink href={lang + "/contacto"}>
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText>
              {t('menu.contact')}
            </ListItemText>
          </ListItemLink>
        </List>
        <Divider />
        <List >
          <ListItem >
            {/* <SwitchIdioma /> */}
            switch idioma
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}